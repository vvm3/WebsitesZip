"use client";

// Hooks / Form
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Utilities / Lib
import { cn } from "@/lib/utils";

// Config / Constants
import { InputFieldClassName } from "@/config";

// UI / Components / Fonts
import { AlexandriaFont } from "../ui/Font/font";
import { Input } from "../ui/input";
// Notifications / Icons
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";
import { ContactFormValues, DemoSchema } from "@/config/zodschemas";
import SeratekMark from "../ui/icons/SeratekMark";
import SeratekWordmark from "../ui/icons/SeratekWordmark";
import Link from "next/link";
import { Textarea } from "../ui/textarea";

/**
 * Contact form module: DemoSchema, ContactFormValues and ContactForm.
 * Validates with zod + react-hook-form and posts to /api/sendMail.
 * Includes honeypot field "hp".
 *
 * @public
 */
export const DemoRequestForm = ({
  fullScreen = false,
}: {
  fullScreen?: boolean;
}) => {
  // State Management
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(DemoSchema),
    mode: "onChange", // live validation
    defaultValues: {
      Email: "",
      FullName: "",
      PhoneNumber: "",
      Institute: "",
      Message: "",
      hp: "",
    },
  });

  const messageLength = watch("Message")?.length ?? 0;

  // Submit handler
  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "demo", fields: data }),
      });

      const result = await res.json();
      if (result.status === "sent") {
        toast.success("Email sent successfully!");
        setSuccess(true);
        reset();
      } else {
        toast.error("Failed to send email: " + result.error);
      }
    } catch (err) {
      if (process?.env?.NODE_ENV === "development") {
        console.error("Error sending email:", err);
      }
      toast.error("Something went wrong!");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const formSection = (
    <section
      id="RequestDemo"
      className="flex flex-col items-center py-6 px-4 scroll-mt-[80px]"
    >
      <h3
        className={cn(
          "text-[28px] font-[600] text-center mb-2 text-muted-foreground",
          AlexandriaFont.className,
        )}
      >
        {fullScreen
          ? "Let's Revolutionize Digital Campus"
          : "Are you ready to make the digital transition?"}
      </h3>
      <h6
        className={cn(
          "text-[20px] font-[400] text-muted-foreground text-center mb-8",
          AlexandriaFont.className,
        )}
      >
        Get a free demo of our ERP software now to see how it can transform your
        company.
      </h6>

      <form className="w-full max-w-4xl" onSubmit={handleSubmit(onSubmit)}>
        {/* Honeypot field */}
        <input
          type="text"
          {...register("hp")}
          style={{ display: "none" }}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-center align-middle gap-4 mb-4">
          <div>
            <Input
              type="text"
              placeholder="Your Full Name *"
              maxLength={500}
              {...register("FullName")}
              className={InputFieldClassName}
            />
            {errors.FullName && (
              <p className="text-destructive text-sm mt-1">
                {errors.FullName.message}
              </p>
            )}
          </div>
          <div>
            <Input
              type="text"
              placeholder="Your Institute *"
              {...register("Institute")}
              className={InputFieldClassName}
            />
            {errors.Institute && (
              <p className="text-destructive text-sm mt-1">
                {errors.Institute.message}
              </p>
            )}
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email *"
              {...register("Email")}
              className={InputFieldClassName}
            />
            {errors.Email && (
              <p className="text-destructive text-sm mt-1">
                {errors.Email.message}
              </p>
            )}
          </div>
          <div>
            <Input
              type="text"
              placeholder="Phone Number *"
              {...register("PhoneNumber")}
              className={InputFieldClassName}
            />
            {errors.PhoneNumber && (
              <p className="text-destructive text-sm mt-1">
                {errors.PhoneNumber.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* <div>
            <Input type="text" placeholder="Institute Website:" {...register("Website")} className={InputFieldClassName} />
            {errors.Website && <p className="text-destructive text-sm mt-1">{errors.Website.message}</p>}
          </div>
          <div>
            <SelectField
              name="Solution"
              label="Solution"
              options={[{ label: "Webdesk", value: "Webdesk" }]}
              className={InputFieldClassName}
              value={watch("Solution")}
              onChange={(val) => { setValue("Solution", val) }}
            />
            {errors.Solution && <p className="text-destructive text-sm mt-1">{errors.Solution.message}</p>}
          </div> */}
        </div>

        <div>
          <Textarea
            placeholder="Message"
            rows={4}
            maxLength={1000}
            {...register("Message")}
            className={cn(InputFieldClassName, "min-h-[100px] max-h-[200px]")}
          />
          {messageLength > 0 && (
            <p className="text-muted-foreground w-full flex justify-end">
              {messageLength}&nbsp;/&nbsp;1000
            </p>
          )}
          {errors.Message && (
            <p className="text-destructive text-sm mt-1">
              {errors.Message.message}
            </p>
          )}
        </div>

        <div className="flex justify-center mt-7">
          <button
            type="submit"
            disabled={loading || success}
            className={cn(
              success
                ? "bg-success"
                : "bg-primary-text/90 hover:bg-primary-text dark:bg-white dark:hover:bg-input",
              "min-h-[48px] w-[252px] text-white dark:text-background dark:hover:text-white font-[700] text-[15px] py-3 px-8 rounded-xl transition disabled:opacity-50",
              AlexandriaFont.className,
            )}
          >
            {success ? (
              <div
                className={cn(
                  "transition-all text-white flex justify-center items-center font-normal animate-fade-in gap-2",
                  AlexandriaFont.className,
                )}
              >
                <CheckCircle /> Request Successful
              </div>
            ) : loading ? (
              "Sending..."
            ) : (
              "REQUEST FOR DEMO"
            )}
          </button>
        </div>
      </form>
    </section>
  );

  if (fullScreen) {
    return (
      <section
        className={cn(
          "relative isolate flex w-full items-center justify-center overflow-hidden px-4 py-16 sm:px-8",
          "min-h-[calc(100vh-90px)]",
          AlexandriaFont.className,
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 -z-10",
            "[background-image:linear-gradient(to_right,hsl(210_60%_70%/0.10)_1px,transparent_1px),linear-gradient(to_bottom,hsl(210_60%_70%/0.10)_1px,transparent_1px)]",
            "[background-size:96px_96px]",
            "dark:[background-image:linear-gradient(to_right,hsl(210_40%_70%/0.12)_1px,transparent_1px),linear-gradient(to_bottom,hsl(210_40%_70%/0.08)_1px,transparent_1px)]",
          )}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--background))_100%)]"
        />
        <div className="mx-auto flex w-full flex-col items-center text-center">
          <Link
            href="/"
            className="mb-8 flex items-center gap-2"
            aria-label="Seratek home"
          >
            {/* Mark SVG — circle uses currentColor (navy → white in dark mode); chevron stays brand blue */}
            <SeratekMark className="h-10 w-auto text-[#062645] dark:text-white sm:h-12" />
            {/* Wordmark SVG — navy in light mode, white in dark mode via currentColor */}
            <SeratekWordmark className="h-[28px] w-auto text-[#062645] dark:text-white sm:h-[34px]" />
          </Link>
          {formSection}
        </div>
      </section>
    );
  } else {
    return formSection;
  }
};

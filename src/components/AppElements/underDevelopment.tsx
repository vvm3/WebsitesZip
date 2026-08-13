"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { toast } from "sonner";
import { CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { AlexandriaFont } from "@/components/ui/Font/font";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SeratekMark from "@/components/ui/icons/SeratekMark";
import SeratekWordmark from "@/components/ui/icons/SeratekWordmark";
import { useAppContext } from "@/context/AppContext";
import { RequestDemoId } from "@/config";

/** Strict email pattern used for client-side Notify Me validation. */
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

type UnderDevelopmentPageProps = {
  /** Support inbox from env (`SUPPORT_EMAIL_ADDRESS`), used for the mailto CTA. */
  supportEmail: string;
};

const UnderDevelopmentPage = ({ supportEmail }: UnderDevelopmentPageProps) => {
  const { isHeaderVisible, contactFormEnabled } = useAppContext();
  const [email, setEmail] = useState("");
  // Honeypot value — bots fill this; real users never see the field.
  const [hp, setHp] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const illustrationSrc = "/assets/images/appIcons/page_under_development.gif";

  const isEmailValid = useMemo(() => {
    const value = email.trim();
    return value.length > 0 && value.length <= 254 && EMAIL_REGEX.test(value);
  }, [email]);

  const validateEmail = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return "Email is required";
    if (trimmed.length > 254) return "Email must be at most 254 characters";
    if (!EMAIL_REGEX.test(trimmed)) return "Please enter a valid email address";
    return "";
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    try {
      // Sends the email to SUPPORT_EMAIL_ADDRESS via /api/notifyMe.
      const res = await fetch("/api/notifyMe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), hp }),
      });

      let result: { status?: string; error?: string } = {};
      try {
        result = await res.json();
      } catch {
        result = {};
      }

      if (res.ok && (result.status === "sent" || result.status === "ok")) {
        toast.success("You're on the list! We'll notify you soon.");
        setSuccess(true);
        setEmail("");
      } else {
        toast.error(result.error || "Failed to submit. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    /* Full-page under-development shell (offset header only when it is visible). */
    <section
      className={cn(
        "relative isolate flex w-full items-center justify-center overflow-hidden px-4 py-16 sm:px-8",
        isHeaderVisible ? "min-h-[calc(100vh-90px)]" : "min-h-screen",
        AlexandriaFont.className,
      )}
    >
      {/*
        Layer 1 — CSS grid background (not an image).
        Drawn with repeating 1px linear gradients so it scales cleanly on any screen.
      */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          "[background-image:linear-gradient(to_right,hsl(210_60%_70%/0.10)_1px,transparent_1px),linear-gradient(to_bottom,hsl(210_60%_70%/0.10)_1px,transparent_1px)]",
          "[background-size:96px_96px]",
          "dark:[background-image:linear-gradient(to_right,hsl(210_40%_70%/0.12)_1px,transparent_1px),linear-gradient(to_bottom,hsl(210_40%_70%/0.08)_1px,transparent_1px)]",
        )}
      />

      {/*
        Layer 2 — soft radial fade over the grid.
        Keeps the center content readable by fading the grid toward the edges.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--background))_100%)]"
      />

      {/* Centered content column: logo → illustration → copy → CTAs */}
      <div className="mx-auto flex w-full flex-col items-center text-center">
        {/* Brand mark — only when site header is hidden (avoids duplicate logos) */}
        {!isHeaderVisible && (
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
        )}

        {/* Fixed-size frame so the animated GIF doesn't shift layout while loading */}
        <div className="relative mb-6 flex h-[132px] w-[132px] items-center justify-center sm:h-[132px] sm:w-[134px]">
          {/* eslint-disable-next-line @next/next/no-img-element -- animated GIF; next/image is less reliable for theme-swapped GIFs */}
          <img
            key={illustrationSrc}
            src={illustrationSrc}
            height={132}
            width={132}
            alt="Under development illustration"
            className="h-[132px] w-[132px] object-contain"
            draggable={false}
          />
        </div>

        <h1 className="mb-3 w-full !text-[24px] font-bold leading-tight text-primary-text sm:text-[24px] dark:text-white">
          Hang on! Website is Under Development
        </h1>
        <p className="mb-8 w-full text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
          The page you&apos;re looking for is currently under development and
          will be back soon.
        </p>

        <div className="flex flex-wrap gap-2">
          {/* Opens Contact form with request demo id */}
          {contactFormEnabled && (
            <Button
              asChild
              className="mb-10 h-10 rounded-md bg-primary dark:bg-white dark:text-background dark:hover:text-white dark:hover:bg-input px-8 text-[15px] font-semibold text-white hover:bg-primary-hover"
            >
              <Link href={`/contact#${RequestDemoId}`}>Request Demo</Link>
            </Button>
          )}
          
          {/* Opens the user's mail client to the configured support address */}
          <Button
            asChild
            className="mb-10 h-10 rounded-md bg-primary dark:bg-white dark:text-background dark:hover:text-white dark:hover:bg-input px-8 text-[15px] font-semibold text-white hover:bg-primary-hover"
          >
            <a href={`mailto:${supportEmail}`}>Contact Support</a>
          </Button>

        </div>

        {/* Notify Me — collects an email and POSTs it to /api/notifyMe */}
        <div className="w-full max-w-md">
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-2 sm:flex-row sm:items-start"
            noValidate
          >
            {/*
              Honeypot field (hidden from users).
              If a bot fills this, the API silently accepts and skips sending mail.
            */}
            <input
              type="text"
              name="hp"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
            />

            {/* Email field + inline validation message wrapper */}
            <div className="flex-1">
              <Input
                type="email"
                name="email"
                inputMode="email"
                autoComplete="email"
                placeholder="example@gmail.com"
                value={email}
                disabled={loading || success}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "notify-email-error" : undefined}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(validateEmail(e.target.value));
                  if (success) setSuccess(false);
                }}
                onBlur={() => {
                  if (email.trim()) setError(validateEmail(email));
                }}
                className="h-11 rounded-md border-border bg-white text-[15px] dark:bg-background"
              />
              {error && (
                <p
                  id="notify-email-error"
                  className="mt-1 text-left text-sm text-destructive"
                >
                  {error}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading || success || !isEmailValid}
              variant={"outline"}
              className="h-11 shrink-0 cursor-pointer rounded-md px-5 text-[14px] font-semibold text-primary-text hover:text-white dark:hover:text-background dark:hover:bg-white hover:bg-primary-hover dark:text-white dark:bg-input/30 disabled:opacity-50"
            >
              {success ? (
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="size-4" /> Subscribed
                </span>
              ) : loading ? (
                <span className="flex items-center gap-1.5">
                  <Loader2 className="size-4 animate-spin" /> Sending
                </span>
              ) : (
                "Notify Me"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UnderDevelopmentPage;

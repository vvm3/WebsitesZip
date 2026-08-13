'use client';
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { PropsWithChildren } from "react"
import { ClassNameValue } from "tailwind-merge"

export const PopOnView = ({ className, children }: PropsWithChildren & { className?: ClassNameValue }) => {
    return <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
        }}
        viewport={{ once: true, amount: 0.5 }}
        className={cn(className)}
    >{children}</motion.div>
}

type FlippableCardProps = {
    front: React.ReactNode;
    back: React.ReactNode;
    className?: string;           // extra wrapper classes
    width?: string | number;      // e.g. "300px" or 300
    height?: string | number;     // e.g. "200px" or 200
    duration?: number;            // seconds for flip
    perspective?: number;         // perspective px, default 1000
};

export function FlippableCard({
    front,
    back,
    className = "",
    width = "300px",
    height = "150px",
    duration = 0.4,
    perspective = 500,
}: FlippableCardProps) {
    const w = typeof width === "number" ? `${width}px` : width;
    const h = typeof height === "number" ? `${height}px` : height;

    return (
        <motion.div
            // the perspective wrapper controls how deep the 3D looks
            className={`${className}`}
            style={{
                width: w,
                minWidth: w,
                minHeight: h,
                height: h,
                perspective, // gives 3D depth (number becomes px)
            }}
            whileHover={{}} // needed to enable hover-based animations on children
        >
            {/* the inner card is the thing that rotates */}
            <motion.div
                className="w-full h-full"
                style={{
                    transformStyle: "preserve-3d", // keep children in 3D space
                }}
                // rotate on Y axis when hovered (returns to 0 on unhover automatically)
                initial={{ rotateY: 180 }}
                whileHover={{ rotateY: 0 }}
                transition={{ duration, ease: [0.2, 0.8, 0.2, 1] }}
            >
                {/* FRONT FACE */}
                <div
                    className="absolute w-full h-full inset-0 flex items-center justify-center"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        // make front face sit on top
                        transform: "rotateY(180deg)",
                    }}
                >
                    {front}
                </div>

                {/* BACK FACE */}
                <div
                    className="absolute w-full h-full flex items-center justify-center"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        // rotate the back face so it's hidden until the card is flipped
                        transform: "rotateY(0deg)",
                    }}
                >
                    {back}
                </div>
            </motion.div>
        </motion.div>
    );
}

interface SlideInOnViewProps {
    className?: string;
    children: React.ReactNode;
    side?: "left" | "right";
    delay?: number;
}
export function SlideInOnView({ className, children, side = "left", delay = 0 }: SlideInOnViewProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: side === "left" ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            viewport={{ once: true, amount: 0.5 }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
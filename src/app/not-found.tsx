'use client'

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * NotFound component is displayed when a user navigates to a non-existent page.
 * It provides a "Go Back" button that either redirects the user to the previous page
 * or to the homepage if there's no previous page in the browser history.
 * 
 * @returns {JSX.Element} The rendered component for the 404 page.
 */

export default function NotFound() {

    const handleGoBack = () => {
        if (document.referrer) {
            window.history.back(); // Go to the previous page if referrer exists
        } else {
            window.location.href = "/"; // Go to home page if there's no referrer
        }
    };

    return (
        <>
            <div className="flex justify-center items-center bg-white fixed z-49 h-screen w-full top-0 left-0">
                <div className="w-full p-16">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-text mb-2">
                        Oops...
                    </h1>
                    <p className="mb-1 w-full text-foreground dark:text-muted-foreground">
                        We Couldn&apos;t find the page you were looking for
                    </p>
                    <Button
                        className="w-fit mt-2 bg-transparent text-primary border border-primary hover:bg-primary/10"
                        aria-label="Go back to the previous page"
                        onClick={handleGoBack}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                    </Button>
                </div>
            </div>
        </>
    );
}

"use client";
import { BackgroundBeams } from "./components/ui/background-beams";
import Contact from "./Contact";

export function BackgroundBeamsDemo() {
    return (
        (<div
            className="w-full rounded-t-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                
            <Contact></Contact>
            
        </div>)
    );
}

import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";

export function BackgroundBeamsWithCollisionDemo() {
    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });  // Smooth scroll to section
        }
    };

    const words = [
        {
            text: "Nayamul Azim Sarker.",
            className: "relative text-lg md:text-2xl lg:text-4xl dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-indigo-500 dark:via-purple-500 dark:to-transparent font-semibold shadow-lg text-gray-400",
        },
    ];

    return (
        <BackgroundBeamsWithCollision>
            <div className="flex flex-col gap-2 font-roboto">
                <div className="flex justify-center">
                    <div className="text-lg md:text-2xl lg:text-4xl inline-block items-center text-gray-200">
                        Hey, I am&nbsp;
                        <span className="inline-block">
                            <TypewriterEffectSmooth words={words} />
                        </span>
                    </div>
                </div>

                <p className="text-sm md:text-xl lg:text-2xl mt-4 text-center text-gray-700 dark:text-gray-300 font-medium max-w-3xl mx-auto">
                    A Dedicated Web Developer crafting impactful Websites and Web Applications
                    that drive user engagement and business growth.
                </p>
                <div className="flex justify-center text-center mt-6">
                    <button onClick={() => handleScrollToSection('project')} className="relative inline-flex w-fit overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-purple-600 hover:bg-purple-900 px-6 py-2 text-xl font-medium text-white backdrop-blur-3xl">
                            Projects
                        </span>
                    </button>
                </div>

            </div>
        </BackgroundBeamsWithCollision>
    );
}

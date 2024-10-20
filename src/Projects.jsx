import { InfiniteMovingCardsDemo } from "./Cards";

const Projects = () => {
    

    return (
        <section className="w-full font-roboto bg-neutral-950 text-white py-12">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold leading-tight lg:text-4xl mb-4">My Projects</h2>
                    <p className="text-gray-400 text-base lg:text-lg">
                        Here are some of the projects I’ve worked on. Click the links to explore them further.
                    </p>
                    <div>
                        <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;

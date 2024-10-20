import { FaDownload } from 'react-icons/fa'; 

const AboutMe = () => {
    return (
        <section className="w-full font-roboto bg-neutral-950 lg:bg-gradient-to-b lg:from-neutral-800 lg:dark:to-neutral-950 text-gray-300 py-12">
            {/* Wrapper to Control Margins on the Sides */}
            <div className="max-w-screen-xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4 text-white">ABOUT ME</h2>
                    <p className="text-base max-w-2xl mx-auto text-gray-400">
                        Discover who I am, my journey as a developer, and the skills I bring to the table in programming and technology.
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                    {/* Left Column: Introduction */}
                    <div>
                        <h3 className="text-3xl font-bold mb-4 text-white">Get to know me!</h3>
                        <p className="mb-4 text-lg">
                            I graduated from <span className="font-semibold text-white">East West University</span> with a passion for technology and web development.
                            I'm always motivated to take on <span className="font-semibold text-white">challenges</span> and constantly strive to improve myself through hard work and dedication.
                        </p>
                        <p className="mb-4 text-lg">
                            While I may not consider myself a genius, I am a <span className="font-semibold text-white">hard worker</span> who believes in the power of perseverance and continuous learning.
                            I enjoy solving problems and diving into new technologies that push me out of my comfort zone.
                        </p>
                        <p className="mb-6 text-lg">
                            If you're looking for someone who is ready to take on new challenges with determination, feel free to
                            check my CV for to know more about me and also for potential job opportunities or collaboration.
                        </p>
                         {/* Button to download CV */}
                         <a
                            href="/Nayamul-Azim-CV.pdf"  // Path to your CV file
                            download="Nayamul-Azim-CV.pdf"  // The name that the file will be saved as
                            className="inline-flex items-center bg-purple-600 text-white text-lg font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
                        >
                            <FaDownload className="mr-2" />  {/* Download icon */}
                            CV
                        </a>
                    </div>

                    {/* Right Column: Skills */}
                    <div>
                        <h3 className="text-3xl font-bold mb-4 text-white">My Skills</h3>
                        <div className="flex flex-wrap gap-4">
                            {['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React', 'MongoDB', 'Firebase', 'Git', 'Github', 'Responsive Design'].map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-800 text-gray-300 py-1 px-3 rounded-lg shadow-md text-lg"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
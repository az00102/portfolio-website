import Header from './header';
import Sidebar from './Sidebar';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';
import { BackgroundBeamsWithCollisionDemo } from './test';
import { BackgroundBeamsDemo } from './About_UI';
const Home = () => {

    return (
        <div className="text-4xl text-green-500">
            <Header />
            <Sidebar />
            <div id="home">
                <BackgroundBeamsWithCollisionDemo />
            </div>
            {/* AboutMe Section */}
            <div id="about">
                <AboutMe />
            </div>
            <div id='project'>
                <Projects></Projects>
            </div>
            <div id="contact">
                <BackgroundBeamsDemo></BackgroundBeamsDemo>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;

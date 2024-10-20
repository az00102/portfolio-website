import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className="fixed top-1/4 left-4 lg:left-8 hidden lg:flex z-50">
            <ul className="space-y-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <li className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all duration-300">
                    <a href="https://www.linkedin.com/in/nayamul-azim/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 transition duration-300" />
                    </a>
                </li>
                <li className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all duration-300">
                    <a href="https://x.com/9b99742de900405?t=7S2IdBgK3ZWBQ8Rqx9O9Ag&s=09" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faXTwitter} className="text-3xl text-blue-400 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-500 transition duration-300" />
                    </a>
                </li>
                <li className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all duration-300">
                    <a href="https://github.com/az00102" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="text-3xl text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300" />
                    </a>
                </li>
                <li className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all duration-300">
                    <a href="https://www.facebook.com/nayamul.azim.EA" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="text-3xl text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-600 transition duration-300" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

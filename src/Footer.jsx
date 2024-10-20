import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 lg:bg-gradient-to-b lg:from-neutral-800 lg:dark:to-neutral-950 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex justify-between gap-7 items-center border-b border-gray-700 pb-6 mb-6">
          {/* Left Side: Name and Description */}
          <div>
            <h2 className="text-2xl font-bold">Nayamul Azim Sarker</h2>
            <p className="text-gray-400 mt-2 text-lg">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall product.
            </p>
          </div>

          {/* Right Side: Social Links */}
          <div>
            <h3 className="text-2xl font-bold">SOCIAL</h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.linkedin.com/in/nayamul-azim/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
              </a>
              <a
                href="https://github.com/az00102"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faGithub} size="sm" />
              </a>
              <a
                href="https://x.com/9b99742de900405?t=7S2IdBgK3ZWBQ8Rqx9O9Ag&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faXTwitter} size="sm" />
              </a>
              <a
                href="https://www.facebook.com/nayamul.azim.EA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faFacebook} size="sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <p>© Copyright 2024. Made by <a href="https://www.yourwebsite.com" className="text-indigo-500 hover:underline">Nayamul Azim Sarker</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

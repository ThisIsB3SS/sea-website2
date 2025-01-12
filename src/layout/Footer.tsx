import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-screen h-20 flex justify-between items-center mb-8 px-12 py-12">
      <div className="flex flex-col items-center justify-center copyright size-fit">
        <p className="text-md text-gray-500">
          Copyright © 2025 SEA Webstudio.
        </p>
        <p className="text-md text-gray-500">All rights reserved.</p>
      </div>
      <div className="flex items-center justify-center gap-2 size-fit social-links">
        <div className="flex items-center size-fit justify-center border-2 rounded-lg p-2 ">
          <a
            href="https://www.linkedin.com/in/sebastien-escudero/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-all duration-300 size-fit"
          >
            <FaLinkedin className={`size-8`} />
          </a>
        </div>
        <div className="flex items-center size-fit justify-center border-2 rounded-lg p-2 ">
          <a
            href="https://www.github.com/ThisIsB3SS/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-all duration-300 size-fit"
          >
            <FaGithub className={`size-8`} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

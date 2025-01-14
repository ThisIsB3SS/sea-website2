import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-screen h-fit lg:h-20 flex flex-col lg:flex-row  justify-start md:justify-between items-center mb-0 lg:mb-8 -translate-y-60 lg:-translate-y-0  md:mt-0 md:px-12 px-4 lg:py-12 py-0 overflow-hidden ">
      <div className="copyright flex flex-col items-center justify-center  size-fit">
        <p className="text-md text-gray-500">
          Copyright © 2025 SEA Webstudio.
        </p>
        <p className="text-md text-gray-500">All rights reserved.</p>
      </div>
      <div className="social-links flex  items-center justify-center gap-2 size-fit ">
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
        <div className="flex items-center size-fit justify-center border-2 rounded-lg p-2 ">
          <a
            href="https://www.codeur.com/-sebastien_sq"
            target="_blank"
            aria-label="Suivez-nous sur Codeur.com !"
          >
            <img
              src="/assets/CodeurLogo.svg"
              alt="Follow us on Codeur.com"
              height={40}
              width={40}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

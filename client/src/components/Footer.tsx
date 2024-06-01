import React from "react";

type Props = {};

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow  dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <a
            href="https://deepanshupatel.netlify.app"
            target="_blank"
            className="hover:underline font-serif text-xl"
          >
            Deepanshu Patel
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://deepanshupatel.netlify.app"
              className="hover:underline me-4 md:me-6"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="mailto:pateldeepanshu196@gmail.com"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

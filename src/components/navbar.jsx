import React from "react";

const Navbar = ({ onTopicClick, selectedTopic }) => {
  return (
    <div>
      <header className="items-center justify-center">
        <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap  justify-center lg:justify-between items-center mx-auto max-w-screen-xl">
            <div className="lg:flex lg:w-auto">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <button
                    onClick={() => onTopicClick("ecommerce")}
                    className={`block py-2 pr-4 pl-3 text-white rounded ${
                      selectedTopic === "ecommerce"
                        ? "bg-primary-700"
                        : "hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white"
                    } lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white`}
                    aria-current="page"
                  >
                    E-commerce Questions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onTopicClick("robotics")}
                    className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 ${
                      selectedTopic === "robotics"
                        ? "hover:bg-gray-50"
                        : "hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    }`}
                  >
                    Robotics
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onTopicClick("health")}
                    className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 ${
                      selectedTopic === "health"
                        ? "hover:bg-gray-50"
                        : "hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    }`}
                  >
                    Health
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onTopicClick("fundamental")}
                    className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 ${
                      selectedTopic === "fundamental"
                        ? "hover:bg-gray-50"
                        : "hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    }`}
                  >
                    CS Fundamentals
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onTopicClick("cs")}
                    className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 ${
                      selectedTopic === "cs"
                        ? "hover:bg-gray-50"
                        : "hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    }`}
                  >
                    Cyber Security
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onTopicClick("software")}
                    className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 ${
                      selectedTopic === "software"
                        ? "hover:bg-gray-50"
                        : "hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    }`}
                  >
                    Software
                  </button>
                </li>
                {/* Add more topic buttons here as needed */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

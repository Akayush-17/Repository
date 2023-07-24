import React, { useState } from 'react';
import Navbar from "./navbar";
import QuestionTab from './questionstab';
import Robotics from "./robotics";
import Software  from "./software";
import Health  from "./health";
import CyberSecurtiy from "./cs";
import Fundamental from "./fundamental"

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('ecommerce');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };


  return (
    <div className='bg-gray-800'>
      <Navbar className="justify-center items-center flex" onTopicClick={handleTopicClick} selectedTopic={selectedTopic} />
      <div className="p-6">
        <form className="flex justify-center items-center">
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-[50%]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search branch name..."
              value={searchTerm}
              onChange={handleSearchChange}
              required
            />
          </div>
        </form>
      </div>
      {selectedTopic === 'ecommerce' && <QuestionTab searchTerm={searchTerm} />}
      {selectedTopic === 'robotics' && <Robotics searchTerm={searchTerm} />}
      {selectedTopic === 'health' && <Health searchTerm={searchTerm} />}
      {selectedTopic === 'fundamental' && <Fundamental searchTerm={searchTerm} />}
      {selectedTopic === 'software' && <Software searchTerm={searchTerm} />}
      {selectedTopic === 'cs' && <CyberSecurtiy searchTerm={searchTerm} />}
    </div>
  );
}

export default Homepage;

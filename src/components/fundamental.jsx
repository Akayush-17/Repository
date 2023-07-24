import React from 'react'
import fundamnetals from './fundamnetals'

const fundamental = ({searchTerm}) => {
  return (
    <div>
         <div className="flex flex-wrap justify-center">
      {fundamnetals.success &&
        fundamnetals.data.que
          .filter((item) =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => (
            <div
              key={index}
              className="w-[80%] p-2 mb-2 bg-white border t border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="flex flex-col justify-between">
                <div className="">
                  <h5 className="text-xl font-bold tracking-tight text-gray-900">
                    {item.question}
                  </h5>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-green-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
    </div>



    </div>
  )
}

export default fundamental
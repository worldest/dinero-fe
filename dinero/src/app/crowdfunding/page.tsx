import React from 'react';

const Crowdfunding = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Crowdfunding</h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Campaign Title
          </label>
          <input
            type="text"
            id="title"
            className="block w-full px-4 py-2 leading-tight bg-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="block w-full px-4 py-2 leading-tight bg-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="target" className="block text-gray-700 font-bold mb-2">
            Target Amount
          </label>
          <input
            type="number"
            id="target"
            className="block w-full px-4 py-2 leading-tight bg-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        >
          Start Campaign
        </button>
      </form>
    </div>
  );
};

export default Crowdfunding;

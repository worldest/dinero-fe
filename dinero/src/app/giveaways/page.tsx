import React from 'react';

const Giveaways = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Giveaways</h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="giveawayType" className="block text-gray-700 font-bold mb-2">
            Giveaway Type
          </label>
          <select
            id="giveawayType"
            className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Cash</option>
            <option>Airtime</option>
            <option>Data</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="block w-full px-4 py-2 leading-tight bg-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="participants" className="block text-gray-700 font-bold mb-2">
            Number of Participants
          </label>
          <input
            type="number"
            id="participants"
            className="block w-full px-4 py-2 leading-tight bg-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        >
          Start Giveaway
        </button>
      </form>
    </div>
  );
};

export default Giveaways;

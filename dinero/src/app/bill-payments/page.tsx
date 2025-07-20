import React from 'react';

const BillPayments = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Bill Payments</h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="biller" className="block text-gray-700 font-bold mb-2">
            Select Biller
          </label>
          <select
            id="biller"
            className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Airtime</option>
            <option>Data</option>
            <option>Electricity</option>
            <option>TV</option>
            <option>Internet</option>
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
          <label htmlFor="account" className="block text-gray-700 font-bold mb-2">
            Account/Meter Number
          </label>
          <input
            type="text"
            id="account"
            className="block w-full px-4 py-2 leading-tight bg-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        >
          Pay Bill
        </button>
      </form>
    </div>
  );
};

export default BillPayments;

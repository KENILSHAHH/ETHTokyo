/** @format */

import React from 'react';

function Logo() {
  return (
    <div>
      {' '}
      <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Thrift : Your Savings DApp
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Secure Your Savings with Ethereum
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/createClub"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Create A Club Now!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Logo;

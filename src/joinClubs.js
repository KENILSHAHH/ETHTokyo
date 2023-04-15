/** @format */

import React from 'react';
import coins from './coins.png';
import save from './save.png';
function JoinClubs() {
  return (
    <div className="inline-flex">
      <div
        className="card w-96 bg-base-100 shadow-xl"
        style={{ marginRight: '50px', marginLeft: '-50px' }}>
        <figure>
          <img
            src={coins}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Club : ETHTokyo</h2>
          <p>Proposed Amount : 0.02 ETH / per week</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Join Now!</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={save}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Club : ETHDenver</h2>
          <p>Propsed Amount : 0.1 ETH / per week</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Join Now !</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinClubs;

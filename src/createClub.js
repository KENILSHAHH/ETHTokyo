/** @format */

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Web3Modal from 'web3modal';
import { useHistory } from 'react-router-dom';
import { ethers } from 'ethers';
import abi from './abi.json';
import pigi from './piggy.png';
import { useNavigate } from 'react-router-dom';

export default function CreateClub() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    club: '',
    userName: '',
  });
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await createClub(formData.club, formData.userName);
  };
  async function createClub(club, userName) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      '0x3B759bA5b728075dCeE2B590E2Eebf5B8A73Cd5d',
      abi,
      signer
    );

    const tx = await contract.createClub(club, userName);
    console.log(tx);
    navigate('/');
  }

  return (
    <>
      <div className="card w-64 glass">
        <figure>
          <img
            src={pigi}
            alt="car!"
            style={{ width: '250px' }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Create Club</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="club"
                value={formData.club}
                onChange={handleInputChange}
                placeholder="Club"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                placeholder="User Name"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <button
                type="submit"
                className="btn btn-primary">
                Create Club
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

/** @format */

import React from 'react';

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Web3Modal from 'web3modal';
import { useHistory } from 'react-router-dom';
import { ethers } from 'ethers';
import abi from './abi.json';
import pigi from './piggy.png';
import { useNavigate } from 'react-router-dom';
function FundClubs() {
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
      '0x6389d42C9B655c62c759895BB56dABd79d32dA06',
      abi,
      signer
    );
    const tx = await contract.sendAmountToContract({
      value: ethers.utils.parseEther('0.01'),
    });
    console.log(tx);
    navigate('/joinClubs');
  }

  return (
    <div className="card w-200 glass">
      <figure>
        <img
          src={pigi}
          alt="car!"
          style={{ width: '700px', height: '400px' }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Fund the Club with proposed amount</h2>

        <div className="inline-flex card-actions">
          <form
            onSubmit={handleSubmit}
            className="inline-flex">
            <input
              type="text"
              name="club"
              value={formData.club}
              onChange={handleInputChange}
              placeholder="Fund the club in ETH"
              className="input input-bordered input-primary w-full max-w-xs"
              style={{ marginRight: '15px' }}
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
  );
}

export default FundClubs;

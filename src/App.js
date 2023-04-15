/** @format */

import React from 'react';
import Landing from './Landing';
//
// import { PolybaseProvider } from '@polybase/react';
// import { Polybase } from '@polybase/client';
// import { Auth } from '@polybase/auth';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateClub from './createClub';
import Logo from './Logo';
import JoinClubs from './joinClubs';
import FundClubs from './fundClubs';
import MyClubs from './myClubs';
//
// const auth = new Auth();
// const polybase = new Polybase();
export default function App() {
  return (
    // <CoffeeProvider>

    <Router>
      <Routes>
        <Route
          path="/"
          element={<Landing tokyo={Logo} />}
        />
        <Route
          path="/createClub"
          element={<Landing tokyo={CreateClub} />}
        />

        <Route
          path="/myClubs"
          element={<Landing tokyo={MyClubs} />}
        />
        <Route
          path="/joinClubs"
          element={<Landing tokyo={JoinClubs} />}
        />
        <Route
          path="/fundClubs"
          element={<Landing tokyo={FundClubs} />}
        />
        {/* <Route
            path="/feature"
            element={<Landing logo={Elite} />}
          />
          <Route
            path="/products"
            element={<Landing logo={Dashboard} />}
          />
          <Route
            path="/team"
            element={<Team />}
          />
          <Route
            path="/elite"
            element={<Elite />}
          />
          <Route
            path="/leaderboard"
            element={<Landing logo={LeaderBoard} />}
          />
          <Route
            path="/admin"
            element={<Admin />}
          />
          <Route
            path="/dashboard"
            element={<Landing logo={Dashboard} />}
          />
          <Route
            path="/myNFTs"
            element={<Landing logo={Cardd} />}
          /> */}
      </Routes>
    </Router>

    // {/* </CoffeeProvider> */}
    // <>
    //   <ConnectButton
    //     onClickFunc={
    //       !address
    //         ? connect
    //         : () => {
    //             setSelectedAccount(null);
    //             disconnect();
    //           }
    //     }
    //     title={!address ? 'Connect Wallet' : 'Disconnect Wallet'}
    //     isLoading={eoaLoading}
    //   />
    // </>
  );
}

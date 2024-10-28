import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';

function Page() {
  return (
    <div className="bg-black text-white min-h-screen rounded-2xl border border-white">
      <Header />
      <Profile />

    </div>
  );
}

export default Page;

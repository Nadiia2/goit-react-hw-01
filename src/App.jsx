// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import css from './App.module.css';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';
import userData from './userData.json';
import transactions from './transactions.json';
import Profile from './components/Profile/Profile';

export default function App() {
  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

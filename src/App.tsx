import React, { useState } from 'react'
import type { VoteType } from './types/votes';
import CafeInfo from './components/CafeInfo/CafeInfo'
import VoteOptions from './components/VoteOptions/VoteOptions';
import Notification from "./components/Notification/Notification";

import css from './App.module.css'
import VoteStats from './components/VoteStats/VoteStats';

function App() {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const totalVotes = Object.entries(votes).reduce((acc, currentValue) => acc + currentValue[1], 0);
  const canReset = totalVotes > 0;

  const positiveRate = totalVotes > 0 ? (votes.good / totalVotes) * 100 : 0;

  const handleVote = (type: VoteType):void => {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    })  
  }

  const resetVotes = (): void => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    })
  
  }

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={canReset}/>
        {totalVotes > 0 ? <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} /> : <Notification/>}
      </div>
    </>
  )
}

export default App

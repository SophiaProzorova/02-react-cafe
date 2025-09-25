import React from 'react';
import { Votes } from "../../types/votes";
import css from './VoteOptions.module.css';

interface VoteOptionsProps {
    onVote: (vote:Votes) => void,
    onReset: () => void,
    canReset?: boolean
};

const VoteOptions = ({onVote, onReset, canReset= true}: VoteOptionsProps) => {
  return (
    <div className={css.container}>
        <button className={css.button} onClick={()=> onVote(Votes.good)}>Good</button>
        <button className={css.button} onClick={()=> onVote(Votes.neutral)}>Neutral</button>
        <button className={css.button} onClick={()=> onVote(Votes.bad)}>Bad</button>
        {canReset && <button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset</button>}
    </div>

  )
}

export default VoteOptions;
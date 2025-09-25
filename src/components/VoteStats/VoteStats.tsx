import styles from "./VoteStats.module.css";

interface VoteStatsProps {
    votes: {
        [key: string]: number,
    }, 
    totalVotes: number, 
    positiveRate: number
}

const VoteStats = ({votes, totalVotes, positiveRate}: VoteStatsProps) => {
    const voteEntries = Object.entries(votes);

    return(
        <div className={styles.container}>
            {voteEntries.map(([voteType, count])=>(
                <p className={styles.stat} key={voteType}>{voteType}: <strong>{count}</strong></p>
            ))}
            <p className={styles.stat}>Total: <strong>{totalVotes}</strong></p>
            <p className={styles.stat}>Positive: <strong>{positiveRate}%</strong></p>
        </div>
    );
};

export default VoteStats;
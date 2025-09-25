export const enum Votes {
    good = 'good',
    neutral = 'neutral',
    bad = 'bad'
};

export type VoteType = Votes.good | Votes.bad | Votes.neutral;
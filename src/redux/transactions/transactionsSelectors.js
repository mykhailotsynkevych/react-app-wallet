export const selectTransactions = state => state.transactions.transactions;
export const selectHasTransactions = state => Boolean(state.transactions.transactions.length);
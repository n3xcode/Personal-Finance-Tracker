import React from 'react';

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div className="mt-4">
      <h4>Transactions</h4>
      <ul className="list-group">
        {transactions.map((tx) => (
          <li
            key={tx.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              tx.amount < 0 ? 'list-group-item-danger' : 'list-group-item-success'
            }`}
          >
            <div>
              {tx.description} — <strong>{tx.amount} USD</strong>
            </div>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => deleteTransaction(tx.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import TransactionList from '../components/TransactionList';
import TransactionForm from '../components/TransactionForm';

const Dashboard = () => {
    const [transactions, setTransactions] = useState([
        { id: 1, description: 'Groceries', amount: -50 },
        { id: 2, description: 'Salary', amount: 1500 },
        { id: 3, description: 'Electricity Bill', amount: -120 },
    ]);

    const addTransaction = (transaction) => {
        setTransactions((prev) => [
            ...prev,
            { id: prev.length + 1, ...transaction },
        ]);
    };

    const deleteTransaction = (id) => {
        setTransactions((prev) => prev.filter((tx) => tx.id !== id));
    };

    const income = transactions
        .filter((tx) => tx.amount > 0)
        .reduce((acc, tx) => acc + tx.amount, 0);

    const expenses = transactions
        .filter((tx) => tx.amount < 0)
        .reduce((acc, tx) => acc + tx.amount, 0);

    const balance = income + expenses;

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <h4 className="card-title">Financial Summary</h4>
                        <p className="card-text">
                            <strong>Balance:</strong> {balance} USD
                        </p>
                        <p className="card-text text-success">
                            <strong>Income:</strong> {income} USD
                        </p>
                        <p className="card-text text-danger">
                            <strong>Expenses:</strong> {expenses} USD
                        </p>
                    </div>
                </div>

                <h2>Dashboard</h2>
                <TransactionForm addTransaction={addTransaction} />
                <TransactionList
                    transactions={transactions}
                    deleteTransaction={deleteTransaction}
                />
            </div>
        </>
    );

};

export default Dashboard;

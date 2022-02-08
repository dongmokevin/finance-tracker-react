import React, { useState } from "react";

import AddCategory from "./AddCategory";
import AddTransaction from "./AddTransactionComponent";
import Chart from "./Chart";
import Header from "./Header";
import TransactionTables from "./TransactionTable";

function Main() {
  const [showCategory, setShowCategory] = useState(true);
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  if (showCategory) {
    return (
      <AddCategory
        setShowCategory={setShowCategory}
        setCategories={setCategories}
        categories={categories}
      />
    );
  }

  if (showAddTransaction) {
    return (
      <AddTransaction
        categories={categories}
        setTransactions={setTransactions}
        setShowAddTransaction={setShowAddTransaction}
      />
    );
  }

  //   function to delete a number
  const removeTransaction = (index) => {
    const newTransactions = transactions.filter(
      (transaction, idx) => idx !== index
    );
    setTransactions(newTransactions);
  };

  const filterTransactions = () => {
    return transactions
      .filter((transaction) =>
        activeCategory ? transaction.category.name === activeCategory : true
      )
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
  };

  return (
    <div className="container">
      <div className="row">
        <Header
          categories={categories}
          setShowCategory={setShowCategory}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <TransactionTables
          transactions={transactions}
          removeTransaction={removeTransaction}
          setShowAddTransaction={setShowAddTransaction}
          filterTransactions={filterTransactions}
        />
        {/* <Chart transactions={filterTransactions(transactions)} /> */}
      </div>
    </div>
  );
}
export default Main;

import format from "date-fns/format";

function TransactionTables({
  setShowAddTransaction,
  transactions,
  removeTransaction,
  filterTransactions,
}) {
  const filteredTransactions = filterTransactions();
  return (
    <div>
      <table className="table table-striped border">
        <thead className="bg-primary">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="p-4 bg-blue-200 text-center">
            <td colSpan="4">
              <button
                className="btn btn-success"
                onClick={() => setShowAddTransaction(true)}
              >
                Add new transaction
              </button>
            </td>
          </tr>
          {filteredTransactions.map((transaction, index) => {
            return (
              <tr className="p-4" key={index}>
                <td>{format(transaction.date, "MMM d yyyy")}</td>
                <td>${transaction.amount}</td>
                <td>{transaction.category.name}</td>
                <td>
                  <button
                    onClick={() => removeTransaction(index)}
                    className="btn btn-danger"
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTables;

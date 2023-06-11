const Transaction = () => (
  <div>
    {this.state.transActions.length === 0
      ? " Еще нет транзакций!"
      : JSON.stringify(this.state.transActions)}

    {this.state.transActions.map((transaction) => (
      // т.к. это просто элемент списка,то key не требуется
      // <div key={transaction.id}>
      <div>
        Lable : {transaction.lable}
        <p> Value : {transaction.value}</p>
        <p> Value : {transaction.id}</p>
        <br></br>
      </div>
    ))}
  </div>
);

export default Transaction;

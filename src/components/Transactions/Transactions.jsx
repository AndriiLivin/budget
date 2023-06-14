// import Pro/pTypes from "prop-types";
import Transaction from "../Transaction/Transaction";

const Transactions = ({ transactions =[] }) => (
  <>
    {transactions.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction} />
      // {/* <p> ID : {transaction.id}</p> */}
    ))}
  </>
);

// Transactions.propTypes = {
//   transactions: PropTypes.array
// };

// // задание пропсов по умолчанию
// Transactions.defaultProps = {
//   transactions:[] ,
// };

export default Transactions;

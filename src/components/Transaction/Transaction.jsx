import PropTypes from "prop-types";
import "./style.css";

const Transaction = ({ transaction }) => (
  // т.к. это просто элемент списка,то key не требуется
  // <div key={transaction.id}>
  <div className="transaction">
    {/* Lable : {props.transaction.lable}
    <p> Value : {props.transaction.value}</p> */}
    Lable : {transaction.lable}
    <p> Value : {transaction.value}</p>
    <br></br>
  </div>
);

Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
};

Transaction.defaultProps = {
  transaction: {
    label: "",
    value: "",
  },
};

export default Transaction;

import PropTypes from "prop-types";
import { WrapperTransaction } from "./stylesTransaction";

// import "./style.css";
// import styled from "styled-components";
const Transaction = ({ transaction }) => (
  // т.к. это просто элемент списка,то key не требуется
  // <div key={transaction.id}>

  <WrapperTransaction value={transaction.value}>
    {/* Lable : {props.transaction.lable}
    <p> Value : {props.transaction.value}</p> */}
    Lable : {transaction.lable}
    <p> Value : {transaction.value}</p>
    <br></br>
  </WrapperTransaction>
);



Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

Transaction.defaultProps = {
  transaction: {
    label: "",
    value: 0,
  },
};

export default Transaction;

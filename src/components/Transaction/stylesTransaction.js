import styledTransaction from "styled-components";
// раскрашиваем бэкграунд в зависимости от знака транзакции

export const WrapperTransaction = styledTransaction.div`
  background: ${(props) => (props.value < 0 ? "red" : "green")};
  border: 2px solid blueviolet;
  border-radius: 13px; 
  padding: 5px;
  margin-bottom: 3px;
`;

// задается имя кот будет показано при выводе в Dev Tool
WrapperTransaction.displayName = " WrapperTransaction";

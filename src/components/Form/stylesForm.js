import styled from "styled-components";

export const WrapperTransaction = styled.div`
  background: ${(props) => (props.value < 0 ? "red" : "green")};
  border: 2px solid blueviolet;
  border-radius: 13px; 
  padding: 5px;
  margin-bottom: 3px;
`;
// задается имя кот будет показано при выводе в Dev Tool
WrapperTransaction.displayName = " WrapperTransaction";

export const WrapperInput = styled.input`
  border: 1px solid #dbdbdb;
  height: 40px;
  min-width: 80px;
  border-radius: 3px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 3px;
  outline: none;
`;
WrapperInput.displayName = "WrapperInput";

export const WrapperRow = styled.div`
  display: flex;
  align-items: center;
`;
WrapperRow.displayName = "WrapperRow";

export const WrapperButton = styled.button`
  border: 1px solid #dbdbdb;
  height: 40px;
  border-radius: 3px;
  padding: 0 21px;
  box-size: border-box;
  background: blueviolet;
  color: rgba(0, 0, 0, 0.87);
  font=size: 18px;
  margin-left: 10px;
  outline: none;
  width: 120px;

  &:hover {
    cursor: pointer;
  }
`;
WrapperButton.displayName = "WrapperButton";


export const WrapperComment = styled.textarea`
  border: 1px solid #dbdbdb;
  line-height:1.5;
  height: 30px;
  min-height: 30px;
  border-radius: 3px;
  padding: 5px;
  box-size: border-box;
  margin: 0px;
  outline: none;
  width: 138px;
  min-width: 170px;
`;

WrapperComment.displayName = "Comment";

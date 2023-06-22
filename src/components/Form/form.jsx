import { Component } from "react";
import PropTypes from "prop-types";

import {
  WrapperButton,
  WrapperRow,
  WrapperInput,
  WrapperComment,
} from "./stylesForm";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      balance: "",
      date: "",
      comment: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state, this.props);
    this.props.onChange(this.state.balance);
    this.setState({
      balance: "",
      date: "",
      comment: "",
    });
  };

  onChangeDigital = (e) => {
    // const value = e.target.value;
    // деструктуризация
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <WrapperRow>
          <WrapperInput
            name="balance"
            onChange={this.onChangeDigital}
            value={this.state.balance}
            type="number"
            placeholder="Укажите нужную Сумму"
          />
          <WrapperInput
            name="date"
            onChange={this.onChangeDigital}
            value={this.state.date}
            type="date"
            placeholder="Укажите нужную Дату"
          />
        </WrapperRow>

        <WrapperRow>
          <WrapperComment
            name="comment"
            onChange={this.onChangeDigital}
            value={this.state.comment}
            placeholder="Добавьте коментарий"
          />
          <br></br>
          <WrapperButton> Сохранить значение</WrapperButton>
        </WrapperRow>
      </form>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
};
export default Form;

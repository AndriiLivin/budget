import { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state, this.props);
    this.props.onChange(this.state.value);
    this.setState({
      value: "",
    });
  };

  onChangeDigital = (e) => {
    // const value = e.target.value;
    // деструктуризация
    const { value } = e.target;

    this.setState({
      value,
    });
    console.log(this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="balance"
          onChange={this.onChangeDigital}
          value={this.state.value}
          type="number"
          placeholder="Укажите нужную Сумму"
        ></input>
        <button> Сохранить значение</button>
      </form>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
};
export default Form;

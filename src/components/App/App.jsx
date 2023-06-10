// import React from "react";
import { Component } from "react";

import Balance from "../Balance/Balance";

// функциональная компонента т.к. есть
// const App = function () {
// она же stateFull компонента

// меняем ее на классовую компоненту
// class App extends React.Component {

class App extends Component {
  // у классовой компоненты можно использовать наследование от родительской Component
  // для этого используется метод constructor() и super()
  constructor() {
    super();
    this.state = {
      balance: 100,
    };
    // стандартный метод привязки функции к объекту создания
    this.onIncrease = this.onIncrease.bind(this);
  }
  // компоненты жизненого цикла
  //
  // этот при создании компонента может давать запрос на бэкэнд
  // автоматически вызывается при отрисовке в DOM компоненты
  componentDidMount() {
    console.log("componentDidMount");
    // this.timerID = setInterval(() => this.tick(), 1000);
  }

  // // // при выходе подчищаем данные и память
  //   // отправляет аналитику
  //   // используется очень редко
  componentWillUnmount() {
      console.log("componentWillUnmount");
      // clearInterval(this.timerID);
    }

  // // типа увеличивает время на секунду
  //   tick() {
  //     this.setState({
  //       date: Date.now(),
  //     });
  //   }

  onIncrease() {
    this.setState({ balance: this.state.balance + 10 });
  }

  onDecrease = () => {
    this.setState({ balance: this.state.balance - 1 });
  };

  // у классовой компоненты единственный метод render
  render() {
   

    return (
      <div>
        <Balance balance={this.state.balance}>Мой красивый БАЛАНС =</Balance>

        {/* <Balance balance={this.state.balance} >
        <Balance balance={this.state.balance} >
          Мои сбержения = 
        </Balance> */}
        <br></br>
        <br></br>
        <button onClick={this.onIncrease}>Прибавить 10 гривень</button>
        <br></br>
        <br></br>
        <button onClick={this.onDecrease}>Отнять 1 гривеню</button>
      </div>
    );
  }
}

export default App;

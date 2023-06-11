// import React from "react";
import { Component } from "react";

import Balance from "../Balance/Balance";

// функциональная компонента т.к. есть
// const App = function () {
// она же stateFull компонента

// меняем ее на классовую компоненту
// class App extends React.Component {

// let id = 0;

class App extends Component {
  // у классовой компоненты можно использовать наследование от родительской Component
  // для этого используется метод constructor() и super()
  constructor() {
    console.log("constructor");
    super();
    console.log("super");
    this.state = {
      balance: 0,
      transActions: [],
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

  shouldComponentUpdate(nextProps, nextState) {
    // nextProps, nextState сюда передаются новые значения
    //  и метод принимает решение о небходимости перерисовки
    console.log(this.state);
    // debugger;
    console.log("shouldComponentUpdate");
    // компонент рендерится т.к. он изменился
    // return true;

    // компонент не не требует перерисовки
    return nextState.balance < 120;
  }

  // // типа увеличивает время на секунду
  //   tick() {
  //     this.setState({
  //       date: Date.now(),
  //     });
  //   }

  onIncrease() {
    this.setState((state) => ({
      balance: state.balance + 1,
      transActions: [
        {
          lable: "increase",
          value: 1,
          id: state.transActions.length,
        },
        ...state.transActions,
      ],
    }));
  }

  onDecrease = () => {
    this.setState((state) => ({
      balance: state.balance - 1,
      transActions: [
        {
          lable: "decrease",
          value: -1,
          id: state.transActions.length,
        },
        ...state.transActions,
      ],
    }));
  };

  // у классовой компоненты единственный метод render
  render() {
    console.log("render");

    return (
      <div>
        <Balance balance={this.state.balance}>Мой красивый БАЛАНС =</Balance>

        {/* <Balance balance={this.state.balance} >
        <Balance balance={this.state.balance} >
          Мои сбержения = 
        </Balance> */}
        <br></br>
        <br></br>
        <button onClick={this.onIncrease}>Прибавить 1 гривеню</button>
        <br></br>
        <br></br>
        <button onClick={this.onDecrease}>Отнять 1 гривеню</button>
        <hr></hr>
        {this.state.transActions.length === 0
          ? " Еще нет транзакций!"
          : JSON.stringify(this.state.transActions)}

        {this.state.transActions.map((transaction) => (
          <div key={transaction.id}>
            Lable : {transaction.lable}
            <p> Value : {transaction.value}</p>
            <p> Value : {transaction.id}</p>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

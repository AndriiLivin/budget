// import React from "react";
import React, { Component, Fragment } from "react";

import Balance from "../Balance/Balance";
// import Transaction from "../Transaction/Transaction";
import Transactions from "../Transactions/Transactions";
import Form from "../Form/form";

import { WrapperHome } from "./stylesHome";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

// функциональная компонента т.к. есть
// const App = function () {
// она же stateFull компонента

// меняем ее на классовую компоненту
// class App extends React.Component {

// let id = 0;
const grandStyle = {
  // color: "white",
  backgroundColor: "grey",
};

class Home extends Component {
  // у классовой компоненты можно использовать наследование от родительской Component
  // для этого используется метод constructor() и super()
  constructor() {
    console.log("constructor");
    super();
    console.log("super");
    this.state = {
      balance: 0,
      transactions: [],
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

    // debugger;
    console.log("shouldComponentUpdate");
    // компонент рендерится т.к. он изменился
    // return true;

    // компонент не не требует перерисовки
    return true;
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
      transactions: [
        {
          lable: "increase",
          value: 1,
          id: state.transactions.length,
        },
        ...state.transactions,
      ],
    }));
  }

  onDecrease = () => {
    this.setState((state) => ({
      balance: state.balance - 1,
      transactions: [
        {
          lable: "decrease",
          value: -1,
          id: state.transactions.length,
        },
        ...state.transactions,
      ],
    }));
  };

  onChange = (value) => {
    this.setState((state) => ({
      balance: state.balance + Number(value),
      transactions: [
        {
          lable: "change",
          value: +value,
          id: state.transactions.length,
        },
        ...state.transactions,
      ],
    }));
  };

  // у классовой компоненты единственный метод render
  render() {
    console.log("render");

    return (
      <ErrorBoundary>
        {/* // наиболее популярная форма обертки */}
        <WrapperHome>
          {/* // React.Fragment используется для избавления от лишних оберток div в
        компонентах */}
          <React.Fragment>
            <Fragment>
              <div style={grandStyle}>
                <Balance balance={this.state.balance}>
                  Мой красивый БАЛАНС =
                </Balance>

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

                <Form onChange={this.onChange} />
               
                <hr></hr>

                {this.state.transactions.length === 0
                  ? " Еще нет транзакций!"
                  : JSON.stringify(this.state.transactions)}

                <Transactions transactions={this.state.transactions} />
              </div>
            </Fragment>
          </React.Fragment>
        </WrapperHome>
      </ErrorBoundary>
    );
  }
}

export default Home;

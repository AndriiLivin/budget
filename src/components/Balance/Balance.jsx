const Balance = ({ balance, children }) => {
  // children зарезервировано под текст в родительской компоненте

  // return <div>{props.balace}</div>
  // получаем баланс напрямую
  return (
    <div>
      --{children}
      {balance}
      {balance === 0 ?"Баланс нулевой": balance <0 ?"Зашли в минус":' Мы в плюсах!'}--
      <br></br>
      <br></br>
      {/* аналогичная запись */}
      {!balance && "Есть первая сотня"}--
    </div>
  );
};
export default Balance;

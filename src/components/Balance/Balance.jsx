const Balance = ({ balance, children }) => {
  // children зарезервировано под текст в родительской компоненте

  // return <div>{props.balace}</div>
  // получаем баланс напрямую
  return (
    <>
      --{children}
      Дополнительный текст 
      {balance}
      {balance === 0 ?"Баланс нулевой": balance <0 ?"Зашли в минус":' Мы в плюсах!'}--
      <br></br>
      <br></br>
      {/* аналогичная запись */}
      {!balance && "Есть первая сотня"}--
    </>
  );
};
export default Balance;

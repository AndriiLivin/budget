const Balance = ({ balance, children }) => {
  // children зарезервировано под текст в родительской компоненте

  // return <div>{props.balace}</div>
  // получаем баланс напрямую
  return (
    <div>
      --{children}
      {balance}--
    </div>
  );
};
export default Balance;

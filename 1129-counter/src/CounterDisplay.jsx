// 숫자를 화면에 표시하는 역할만 담당하는 자식 컴포넌트
// eslint-disable-next-line react/prop-types
function CounterDisplay({ conuter, names }) {
  return (
    <>
      <p>{conuter}</p>
      <p>{names}</p>
    </>
  );
}

export default CounterDisplay;

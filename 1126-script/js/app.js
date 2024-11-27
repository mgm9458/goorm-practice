// 빈 객체를 생성
// 객체는 key : value로 형성된다!
// {키 : 값} 으로 형성된 쌍이 프로퍼티이다
const cart = {};

const menu = document.querySelector("#menu");
// HTML 중에 menu라는 아이디를 menu라는 변수에 할당
const cartDisplay = document.querySelector("#cart");
// HTML 중에 cart라는 아이디를 cartDisplay라는 변수에 할당
const totalDisplay = document.querySelector("#total");
// HTML 중에 total이라는 아이디를 totalDisplay라는 변수에 할당

// 메뉴에 클릭 이벤트를 줄건데 아래와 같은 코드로 진행하고 싶어
menu.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    // 너가 클릭한 태그네임이 버튼이랑 같다면 = 클릭한 게 button 태그가 맞다면
    // 버튼 세개가 담겨있는 메뉴를 클릭했는데,
    // 니가 클릭한 그 위치(타겟)가 버튼이면 통과

    const name = event.target.getAttribute("data-name");
    // name이라는 변수는 button 속성에 있는 data-name (Coffee, Tea, Cake) 셋 중에 하나
    // = 그 타겟의 속성(data-name)좀 떼와, name에 할당해

    const price = parseInt(event.target.getAttribute("data-price"));
    // price라는 변수는 button 속성에 있는 data-price (3000, 2500, 4000) 셋 중에 하나
    // = 그 타겟의 속성(data-price)좀 떼와, price에 할당해

    // 장바구니에 추가하거나 수량 증가 삼항연산자 버전
    // cart[name] = cart[name] ? { price, count: cart[name].count + 1 } : { price, count: 1 };

    // 객체 접근법: 1. 점표기법(객체명.키이름) 2. 대괄호표기법(객체명[키이름])
    // 예시) cart.coffee   cart[coffee]

    // 장바구니에 추가하거나 수량 증가 if문 버전
    if (cart[name]) {
      cart[name].count++;
    }
    // 상단에 cart 변수에 담아 빈 객체를 만들었는데 객체에 data-name을 갖고 있다면 count에 1을 추가해
    //ex. 카트에 커피가 있다면 커피 count에 1을 추가해
    // = 위에 선언된 cart라는 객체에 접근을 할거야(초기값은 텅)
    // = 카트 현상황이 뭔지 모르겠으나, 내가 버튼을 눌러서 카트에 같은상품이 있으면 갯수를 늘려주고 없으면 1개라고 표기해줘
    else {
      cart[name] = { price, count: 1 };
    }
    // 내가 클릭한 name이 객체에 담겨있지 않다면 클릭한 요소의 정보를 객체에 담아줘
    // Coffee : {price : 3000, count : 1}
    // {price, count : 1}인 이유는 price에서 price : price이기 때문에 생략한 것
    updateCart();
    // updateCart라는 함수를 실행해줘 = 외부에 선언된 함수콜링
    console.log(cart);
    // 카트라는 값을 콘솔에 보여줘
  }
});
// event는 내가 지정하는 것이라 따로 정해진 규칙이 없음

// 장바구니와 총액 업데이트
function updateCart() {
  cartDisplay.innerHTML = ""; // 변수 cartDisplay의 자식 태그구성을 공백으로 초기화
  let total = 0; // 총 금액은 0이다

  // for in 구문,  객체 안에서만 노는 반복문
  // 번외편) for of 구문, 배열 안에서만 노는 반복문
  // cart라는 객체 안에서만 놀건데, 각 덩어리(메뉴)를 name이라는 변수로 부를게
  for (const name in cart) {
    const { price, count } = cart[name];
    // 구조 분해 할당을 함, 오른쪽의 값을 왼쪽의 구성으로 해체쇼
    // 값이 두개가 들어있는 상태라서 price와 count에 각각 할당
    total += price * count;
    // 계산해서, total에 누적할당해줘

    // 쌩 div만들어서 item이라고 할게
    const item = document.createElement("div");
    // 그 item에 글씨만 넣어줘.textContent
    item.textContent = `${name} x ${count} (${(
      price * count
    ).toLocaleString()}원)`;
    // .toLocaleString() 라는 메서드는 문화권에 대응해서 우리나라 3자리수 콤마를 넣으라는 함수
    cartDisplay.appendChild(item);
    // .appendChild(item) 미리만들어 둔 cartDisplay에 item을 자식으로 추가해줘
  }
  totalDisplay.textContent = total.toLocaleString();
  // 미리만들어둔 totalDisplay에 세자리콤마 금액을 글씨만 똑 떼어 넣어줘
}

// 장바구니 초기화
// 키 : 값
const cartItems = {};

const cartDisplay = document.getElementById("cartItems");
// cartDisplay라는 변수에 id가 cartItems를 찾아서 할당
const totalAmountDisplay = document.getElementById("totalAmount");
// totalAmountDisplay라는 변수에 id가 tatalAmount를 찾아서 할당

// 메뉴 버튼 이벤트 설정
document.querySelectorAll("section.menu > article").forEach((menuItem) => {
  // class가 menu인 section 안에 article을 찾아서 가져옴
  // 가져온 article을 menuItem에 담아서 forEach로 하나씩 꺼내서 아래의 작업들을 반복

  // menuItem에 클릭 이벤트를 추가할거야
  menuItem.addEventListener("click", () => {
    const name = menuItem.getAttribute("data-name");
    // menuItem 안에 data-name 속성값을 찾아서 그 값의 문자열을 반환하여 name이라는 변수에 할당
    const price = parseInt(menuItem.getAttribute("data-price"));
    // menuItem 안에 data-price 속성값을 찾아서 그 값의 문자열을 반환하여 price이라는 변수에 할당

    // 장바구니에 아이템 추가 또는 갯수 증가
    if (cartItems[name]) {
      // cartItems는 name이라는 변수 안에 있는 값을 담는 객체이고 그 값이 무엇인지는 모르지만 클릭했을 때 cartItems의 name에 접근해서 그 값이 있다면
      cartItems[name].count++;
      // cartItems 내부의 count 속성(프로퍼티)값을 1 증가시켜
    } else {
      cartItems[name] = { price, count: 1 };
      // 그렇지 않다면 = 카트에 클릭한 요소가 없다면
      // count: 1은 새로 추가하고 개수는 1로 설정
      // price와 count를 객체로 만들어, 새로운 메뉴 정보를 저장

      // cartItems[name] = {price, count}
      // name의 data-name을 key로 사용하고, price의 data-price와 count : 1을 값으로 저장하는 객체임
    }

    // UI 업데이트
    updateCart(); // 외부 함수 콜링
  });
});

// 장바구니 업데이트 함수
function updateCart() {
  cartDisplay.innerHTML = ""; // UI 초기화
  // cartDisplay의 자식 태그 구성을 초기화 해줘
  let total = 0; // 총액 계산 초기화

  for (const name in cartItems) {
    const { price, count } = cartItems[name];
    total += price * count;
    // const name in cartItems에서 name은 변수이고 cartItems는 객체명임
    // 구조 분해 할당을 함, 오른쪽의 값을 왼쪽의 구성으로 해체
    // 값이 두개가 들어있는 상태라서 price와 count에 각각 할당
    // 계산해서 total에 누적할당 해줘

    // 아이템 UI 요소 생성
    const itemElement = document.createElement("div");
    // 쌩 div 태그 만들어서 itemElement에 할당
    itemElement.classList.add("cartItem");
    // 대상.classList.add('클래스명');
    // itemElement에 새로 만든 div 태그에 클래스 네임을 cartItem이라고 추가할게
    // = <div class="cartItem"></div>
    // css에는 다 있어야 함, 프디는 모든 화면을 만들어야 하므로 그게 연결되는 css 리소스도 생각해 둬야한다.

    // 이름 및 수량 표시
    const itemNameAndCount = document.createElement("span");
    // 쌩 span 만들어서 itemNameAndCount에 할당
    itemNameAndCount.textContent = `${name} x ${count}`;
    // itemNameAndCount이라는 변수에 저장된 span 태그의 텍스트 내용을 name x count라고 설정해
    // 새로 생성된 태그 안에 텍스트를 넣는 과정이라고 보면 됨

    // 개별 총액 표시
    const itemPrice = document.createElement("span");
    itemPrice.textContent = `${(price * count).toLocaleString()}원`;
    // ex. 새로 생성한 span 태그의 텍스트 내용을 price * count를 계산하고 toLocaleString()으로 숫자 형식을 적용한 문자열로 반환하고 원이라는 글자를 붙여줘

    // 수량 감소 버튼
    const decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener("click", () => {
      if (cartItems[name].count > 1) {
        // name이라는 변수를 담은 cartItems라는 객체의 count가 1보다 크다면
        cartItems[name].count--; // 수량 1씩 감소
      } else {
        delete cartItems[name]; // 그렇지 않고 수량이 1이면 삭제
        // delete는 예약어, 객체에서 해당 키에 대한 프로퍼티 제거
      }
      updateCart(); // UI 갱신
    });

    // 수량 증가 버튼
    const increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    increaseButton.addEventListener("click", () => {
      cartItems[name].count++; // 수량 증가
      updateCart(); // UI 갱신
    });

    // 제거 버튼
    const removeButton = document.createElement("button");
    removeButton.textContent = "삭제";
    removeButton.addEventListener("click", () => {
      delete cartItems[name]; // 아이템 삭제, delete라는 예약어는 객체에서 프로퍼티(키:값의 쌍)을 삭제하는 기능
      updateCart(); // UI 갱신
    });

    // 요소 구성
    // [+] [메뉴이름과 갯수] [-] [해당메뉴의 총금액] [삭제]의 UI 구성으로 제작
    itemElement.appendChild(increaseButton);
    itemElement.appendChild(itemNameAndCount);
    itemElement.appendChild(decreaseButton);
    itemElement.appendChild(itemPrice);
    itemElement.appendChild(removeButton);

    // 요소를 부모에 추가
    cartDisplay.appendChild(itemElement);
  }

  // 총액 업데이트
  totalAmountDisplay.textContent = total.toLocaleString();
}

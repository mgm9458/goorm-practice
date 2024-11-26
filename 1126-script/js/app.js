const cart = {};

// document.getElementByld()라는 메서드를 document.querySelector 대신 사용할 수 있음 엘리멘트는 #없이도 주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고 엘리멘트 객체를 반환하기 때문 id는 문서 내에서 유일하기 때문에 특정 요소를 빠르게 찾을 때 유용함
const menu = document.querySelector("#menu");
const cartDisplay = document.querySelector("#cart");
const totalDisplay = document.querySelector("#total");

menu.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    // 너가 클릭한 태그네임이 버튼이랑 같다면 {}안에 있는 코드를 실행할게
    const name = event.target.getAttribute("data-name");
    const price = parseInt(event.target.getAttribute("data-price"));
    if (cart[name]) {
      cart[name].count++;
    } else {
      cart[name] = { price, count: 1 };
    }
    updateCart();
    console.log(cart);
  }
});
//event는 내가 지정하는 것이라 따로 정해진 규칙이 없음
function updateCart() {
  cartDisplay.innerHTML = "";
  let total = 0;
  for (const name in cart) {
    const { price, count } = cart[name];
    total += price * count;

    const item = document.createElement("div");
    item.textContent = `${name} x ${count} (${(
      price * count
    ).toLocaleString()}원)`;
    cartDisplay.appendChild(item);
  }
  totalDisplay.textContent = total.toLocaleString();
}

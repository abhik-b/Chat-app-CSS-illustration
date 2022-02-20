const price1 = document.getElementById("price-1");
const price2 = document.getElementById("price-2");
const chatInput = document.getElementById("chat-input");
const chatForm = document.getElementById("chat-form");
let t2 = gsap.timeline({ defaults: { ease: "power1.inOut", duration: 0.5 } });

price1.addEventListener("click", () => {
  addMessage("30 minute walk for $29 sounds great to me");
  document
    .querySelectorAll(".msg-5")
    .forEach((msg) => (msg.style.display = "none"));
});
price2.addEventListener("click", () => {
  addMessage("1 hour walk for $49 sounds great to me");
  document
    .querySelectorAll(".msg-5")
    .forEach((msg) => (msg.style.display = "none"));
});
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addMessage(chatInput.value);
});

function addMessage(message) {
  const chatMessage = document.createElement("div");
  chatMessage.classList.add("chat-message");
  chatMessage.classList.add("outgoing-message");
  chatMessage.innerText = message;
  document.querySelector(".chat-messages").appendChild(chatMessage);
  document.querySelector(".chat-messages").scrollTop +=
    chatMessage.getBoundingClientRect().height + 10;
  t2.from(chatMessage, { x: 30, opacity: 0 });
  chatInput.value = "";
}

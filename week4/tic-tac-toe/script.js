let turn = "X";

function play(event) {
  const tag = whenClick(event);
  const id = document.querySelector(`#${tag}`);
  const p = document.createElement("p");
  p.textContent = `${turn}`;
  id.appendChild(p);
  id.removeEventListener("click", play);
  turn = toggleTurn(turn);
}

function whenClick(event) {
  const tagId = event.target.id;
  return tagId;
}

function toggleTurn(turn) {
  if (turn === "X") {
    return "O";
  } else {
    return "X";
  }
}

for (let i = 1; i < 10; i++) {
  const id = document.querySelector(`#cell${i}`);
  id.addEventListener("click", play);
}

function remove(event) {
  const tag = whenClick(event);
  const id = document.querySelector(`#${tag}`);
  id.removeEventListener("click", remove);
}

function reset() {
  location.reload();
}

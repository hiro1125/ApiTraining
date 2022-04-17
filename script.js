// DOM
const button = document.getElementById("submit");
const lists = document.getElementById("lists");

// 関数 (名前を取得)
function addList(users) {
  const list = document.createElement("li");
  list.innerText = `ユーザ名:${users.name}  /  Eメール:${users.email}`;
  // console.log(users.name);
  lists.appendChild(list);
}

async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log("1つめ", users);
  return users;
}

async function listUser() {
  const users = await getUser();
  console.log("2つめ", users);
  users.forEach(addList);
}
// イベント
button.addEventListener("click", listUser);
// window.addEventListener("load", listUser);

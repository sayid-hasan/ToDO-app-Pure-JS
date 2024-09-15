let inputTask = document.querySelector(".search");
let addBtn = document.querySelector(".btn");
let listContainer = document.querySelector(".list__container");
let error = document.querySelector(".error");
function showTask() {
  if (inputTask.value == "") {
    alert("please add a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputTask.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = " &#x274C;";
    li.appendChild(span);
  }
  saveData();
  inputTask.value = "";
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});
addBtn.addEventListener("click", () => {
  showTask();
});
inputTask.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    showTask();
  }
});
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();

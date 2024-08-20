const list = document.querySelector("#todo-list ul");
const form = document.forms["add-task"];
const checkbox = document.getElementById("done");
const searchBox = document.querySelector("header input");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = form.querySelector("input");
  const value = input.value;

  if (!value) {
    alert("You should write something");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = value;
  span.className = "name";

  const img = document.createElement("img");
  img.width = "30";
  img.setAttribute("height", "30");
  img.height = "30";
  img.src = "https://img.icons8.com/dotty/80/delete.png";
  img.alt = "delete";

  li.appendChild(span);
  li.appendChild(img);

  list.appendChild(li);

  input.value = "";

  span.classList.toggle("active");
});

checkbox.addEventListener("change", (e) => {
  const lis = document.querySelectorAll("ul li");

  if (e.target.checked) {
    lis.forEach((el) => {
      el.classList.add("done");
    });
  } else {
    lis.forEach((el) => {
      el.classList.remove("done");
    });
  }
});

searchBox.addEventListener("keyup", (e) => {
  const value = e.target.value;
  const lis = document.querySelectorAll("ul li");

  lis.forEach((li) => {
    const span = li.querySelector("span");
    const text = span.textContent.toLowerCase();

    if (text.indexOf(value.toLowerCase()) === -1) {
      li.style.display = "none";
    } else {
      li.style.display = "flex";
    }
  });
});

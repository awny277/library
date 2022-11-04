let name = document.getElementById("name");
let author = document.getElementById("author");
let description = document.getElementById("description");
let image = document.getElementById("image");
name.textContent = localStorage.getItem("name");
description.textContent = `Description : ${localStorage.getItem(
  "description"
)}`;
image.src = localStorage.getItem("img");
image.alt = localStorage.getItem("name");
author.textContent = `author : ${localStorage.getItem("author")}`;

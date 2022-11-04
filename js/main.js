//  get data from DataBase
async function GetData_From_DataBase() {
  // GetData_From_DataBase
  let responsse = await fetch(
    "https://6351a0c99d64d7c71304d214.mockapi.io/Books"
  );
  let data = await responsse.json();
  // console.log(data);
  // Handel Data To Html and css
  let final = await data.map((ele) => {
    let container = document.getElementById("container");
    // create div to add Car Details
    let carDiv = document.createElement("div");
    carDiv.setAttribute("class", "BookDiv");
    carDiv.setAttribute("id", ele.id);
    // create h2 to put car name on it
    let name = document.createElement("h2");
    name.setAttribute("class", "name");
    name.textContent = ele.name;
    // create h5 to put car author on it
    let author = document.createElement("h5");
    author.setAttribute("class", "author");
    author.textContent = `${ele.author} SAR`;
    // create p to put car description on it
    let description = document.createElement("p");
    name.setAttribute("class", "description");
    description.textContent = ele.description;
    // create image to put car img on it
    let image = document.createElement("img");
    image.setAttribute("class", "image");
    image.src = ele.img;
    image.alt = ele.name;
    // create button to Delete car
    let DeleteBtn = document.createElement("button");
    DeleteBtn.setAttribute("class", "buttonStyle");
    DeleteBtn.textContent = `show`;
    // Add All elemnet in CarDive in Html
    carDiv.appendChild(image);
    carDiv.appendChild(name);
    carDiv.appendChild(author);
    carDiv.appendChild(description);
    carDiv.appendChild(DeleteBtn);
    container.appendChild(carDiv);

    // Delete car from DataBase by Car Id
    DeleteBtn.addEventListener("click", async function (e) {
      e.preventDefault();
      localStorage.setItem("name", ele.name);
      localStorage.setItem("description", ele.description);
      localStorage.setItem("img", ele.img);
      localStorage.setItem("author", ele.author);
      localStorage.setItem("id", ele.id);
      window.location.href = "./book.html";
    });
  });
}

window.onload = GetData_From_DataBase();

async function validation() {
  let user = document.getElementById("user").value;
  let description = document.getElementById("discription").value;
  let img = document.getElementById("image").value;
  let author = document.getElementById("author").value;
  if (
    user.length === 0 ||
    description.length === 0 ||
    img.length === 0 ||
    author.length === 0
  ) {
    alert("please add all infromation about your book");
  } else {
    const data = {
      name: user,
      description,
      author,
      img,
    };
    console.log(data);
    // send data to api
    const response = await fetch(
      "https://6351a0c99d64d7c71304d214.mockapi.io/Books",
      {
        method: "POST", // !Important  Add To DataBase
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        redentials: "same-origin",
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      }
    );
    return response.json();
  }
}

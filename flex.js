const formEl = document.getElementById("form");

const userArray = JSON.parse(localStorage.getItem("users")) || [];

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submitted");

  // const inputEl1 = document.getElementById("name").value;
  // const inputEl2 = document.getElementById("city").value;
  // const inputEl3 = document.getElementById("imgUrl").value;
  // const inputEl4 = document.getElementById("occupation").value;

  // const obj = {
  //   name: inputEl1,
  //   city: inputEl2,
  //   imgUrl: inputEl3,
  //   occupation: inputEl4,
  // };

  const inputs = document.querySelectorAll("input");

  let obj = {};
  for (let items of inputs) {
    obj[items.name] = items.value;
  }

  userArray.push(obj);

  localStorage.setItem("users", JSON.stringify(userArray));

  displayCards(userArray);
  //logic
});

const divEl = document.getElementById("card-container");

function displayCards(userArray) {
  divEl.innerHTML = "";
  for (let items of userArray) {
    divEl.innerHTML += `
    <div class="d-flex col-3 card-style">
        <img
          src="${items.imgUrl}"
          class="w-50"
        />
        <div class="p-3 content">
          <p class="m-0"><b>Name:</b> ${items.name}</p>
          <p class="m-0"><b>City:</b> ${items.city}</p>
          <p><b>Occupation:</b> ${items.occupation}</p>
        </div>
      </div>
    `;
  }
}

displayCards(userArray);

//JSON - JavaScript Object Notation

// let obj = {
//   name: "Aditya",
//   age: 25,
// };

// let obj2 = {
//   name: "Aditya",
//   age: 25,
// };

//CRUD - Craete, Read, Update, Delete

// localStorage.setItem("name", JSON.stringify([1, 2, 3, 4])); //Create
// localStorage.setItem("name", JSON.stringify([1, 2, 3, 4, 5])); //Update
// console.log(JSON.parse(localStorage.getItem("name"))); //Read
// localStorage.removeItem("name");
// localStorage.clear();

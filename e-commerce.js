const loader = document.getElementById("loader");

async function apiCall() {
  try {
    // loader.textContent = "Loading....";
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    displayCards(data);
    localStorage.setItem("products", JSON.stringify(data));
  } catch (err) {
    console.log("Eror", err);
    // loader.textContent = "Error";
  } finally {
    console.log("From finally");
    // loader.textContent = "";
  }
}

const cardContainerDiv = document.getElementById("cards");

if (localStorage.getItem("products")) {
  const data = JSON.parse(localStorage.getItem("products"));
  displayCards(data);
} else {
  apiCall();
}

function displayCards(array) {
  cardContainerDiv.innerHTML = "";
  for (let items of array) {
    cardContainerDiv.innerHTML += `
    <div class="card" style="width: 18rem">
        <img
          src="${items.image}"
          class="card-img-top p-3"
          alt="e-com-image"
          height="300"
        />
        <div class="card-body">
          <h5 class="card-title"><b>${items.title}</b></h5>
          <p class="card-text">
            ${items.description.slice(0, 40)}
          </p>
          <p class="m-0"><b>Price: </b>${items.price}</p>
          <p class="m-0"><b>Rating: </b>${items.rating.rate}(${
      items.rating.count
    })</p>
          <a href="#" class="btn btn-success my-2">Buy Now</a>
        </div>
    </div>`;
  }
}

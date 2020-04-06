let jackets = [
  { name: "Andie", price: "$399" },
  { name: "Campus", price: "$399" },
  { name: "Cinder", price: "$399" },
  { name: "Covert", price: "$399" },
  { name: "Dunmore", price: "$399" },
  { name: "Flicker", price: "$399" },
  { name: "Flint", price: "$399" },
  { name: "Frontier", price: "$399" },
  { name: "Gala", price: "$120" },
  { name: "Greed Jacket", price: "$399" },
  { name: "Greenlight", price: "$399" },
  { name: "Haze Varsity", price: "$399" },
  { name: "Juana", price: "$399" },
  { name: "LA", price: "$399" },
  { name: "Lexington", price: "$399" },
  { name: "Maverick", price: "$399" },
  { name: "Nicky", price: "$399" },
  { name: "Restricted Pole Cat", price: "$399" },
  { name: "Sunset", price: "$399" },
  { name: "Tuscany", price: "$399" },
  { name: "Tuscany Pink", price: "$399" },
  { name: "Victoria", price: "$399" },
];

// Adding the HTML code to display the jackets:
/* <a href="#"
    ><div class="product-card">
      <img src="/images/jackets/Greed_Jacket.png" alt="Greed Jacket" />
      <h4 class="name">Greed Jacket</h4>
      <h5 class="price">From $170</h5>
    </div></a
  > */

let productsContainer = document.querySelector(".our-products-container");

jackets.forEach((jacket) => {
  let a = document.createElement("a");
  a.setAttribute("href", "#");

  let productCard = document.createElement("div");
  productCard.setAttribute("class", "product-card");

  let img = document.createElement("img");
  img.setAttribute(
    "src",
    "./images/jackets/" + jacket.name.toLowerCase().replace(/ /g, "_") + ".png"
  );

  let name = document.createElement("h4");
  name.setAttribute("class", "name");
  name.appendChild(document.createTextNode(jacket.name));

  let price = document.createElement("h5");
  price.setAttribute("class", "price");
  price.appendChild(document.createTextNode(jacket.price));

  productCard.appendChild(img);
  productCard.appendChild(name);
  productCard.appendChild(price);
  a.appendChild(productCard);
  console.log(a);
  productsContainer.appendChild(a);
});

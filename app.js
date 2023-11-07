const cartContainer = document.getElementById("cart--container");
let cartTotal = document.getElementById("cart--total");
let totalCostOfItemInCart;

let cartItem = [
  {
    productID: "1",
    productImage:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/7073402/1.jpg?7505",
    productTitle: "Samsung-A10",
    productPrice: 9000,
    productQuatity: 1,
    like: false,
  },

  {
    productID: "2",
    productImage:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/6704752/1.jpg?2823",
    productTitle: "Oraimo 1000mah ear piece",
    productPrice: 1900,
    productQuatity: 1,
    like: false,
  },
  {
    productID: "3",
    productImage:
      "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/generic_300x240.jpg",
    productTitle: "Laptop",
    productPrice: 2000,
    productQuatity: 1,
    like: false,
  },
  {
    productID: "4",
    productImage:
      "https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/earphones_300x240.png",
    productTitle: "Oraimo Earpod",
    productPrice: 5000,
    productQuatity: 1,
    like: false,
  },
];

// a function to display our cart items
function displayCartItems() {
  const currencyformatter = new Intl.NumberFormat("en-US");
  //step 1 map over the product params
  cartContainer.innerHTML = cartItem
    .map((item) => {
      return `<div id="single--product">
        <!----- product Image ------->
        <img
          src="${item.productImage}"
          class="product--image"
        />
        <!---      --->

        <div class="product--information">
          <h3 class="product--title">${item.productTitle}</h3>
          <p class="product--amount">&#8358; ${currencyformatter.format(
            item.productPrice
          )}</p>
          <!----- product quatity  -->
          <div>
            <button class="decrease--btn"  onclick=decreaseQuantity('${
              item.productID
            }')>-</button>
            <span>${item.productQuatity}</span>
            <button class="increase--btn" onclick=increaseQuantity('${
              item.productID
            }')>+</button>
          </div>
          <div>
            <button class="remove--item" onclick=removeItemFromCart('${
              item.productID
            }')>Remove</button>

            <button onclick=updateProductLikeness('${
              item.productID
            }') class="like--btn">
            ${
              item.like === true
                ? `<i class="fa-solid fa-thumbs-up" style="color: #ff0000;"></i>`
                : `<i class="fa-regular fa-thumbs-up" style="color: #ff0000;"></i>`
            } </button>
            </div>\
    
        </div>
      </div>`;
    })
    .join("");
}

displayCartItems();

// a funtion to increase the quatity of a particular item
function increaseQuantity(id) {
  cartItem.forEach((item) => {
    if (item.productID === id) {
      item.productQuatity++;
    }
  });
  displayCartItems();
  calculateCartTotal();
}
function decreaseQuantity(id) {
  cartItem.forEach((item) => {
    if (item.productID === id) {
      if (item.productQuatity === 1) {
        item.productQuatity == 1;
      } else {
        item.productQuatity--;
      }
    }
  });
  displayCartItems();
  calculateCartTotal();
}

function removeItemFromCart(id) {
  cartItem = cartItem.filter((item) => item.productID !== id);
  displayCartItems();
  calculateCartTotal();
  return cartItem;
}
function calculateCartTotal() {
  totalCostOfItemInCart = cartItem.reduce((total, value) => {
    return total + value.productQuatity * value.productPrice;
  }, 0);
  cartTotal.textContent = totalCostOfItemInCart;
}
calculateCartTotal();
//a function to check if a customer likes a product

function updateProductLikeness(id) {
  console.log(id);
  cartItem.forEach((item) => {
    if (item.productID === id && item.like === false) {
      item.like = true;
    } else if (item.productID === id && item.like === true) {
      item.like = false;
    }
  });
  displayCartItems();
}

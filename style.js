let menuEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let menuHamIcon = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");
let menuCart = document.querySelector(".navbar-shopping-cart");
let aside = document.querySelector(".product-detail");
let cardsContainer = document.querySelector(".cards-container");
let productDetailContainer = document.querySelector(".product-detail-second");
let productDetailClose = document.querySelector(".product-detail-close");


menuEmail.addEventListener(`click`,toggleDesktopMenu);
menuHamIcon.addEventListener(`click`,toggleMobileMenu);
menuCart.addEventListener(`click`,toggleAsaid);
productDetailClose.addEventListener(`click`,ClosedProductDetailAside);

function toggleDesktopMenu () {
    mobileMenu.classList.add("inactive");
    aside.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
};

 function toggleMobileMenu () {
    aside.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
};

function toggleAsaid () {
    mobileMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
    aside.classList.toggle("inactive");
};

function openProductDetailAside() {
    desktopMenu.classList.add("inactive");
    aside.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");

};
function ClosedProductDetailAside() {
    productDetailContainer.classList.add("inactive")
}

const productList = [];
productList.push({
    name: 'Power Adapter',
    price: "$120",
    image: 'https://images.pexels.com/photos/14438774/pexels-photo-14438774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Magsafe',
    price: "$100",
    image: 'https://images.pexels.com/photos/7742585/pexels-photo-7742585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Airpods',
    price: "$80",
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
productList.push({
    name: 'PowerBank',
    price: "$60",
    image: 'https://images.pexels.com/photos/11031423/pexels-photo-11031423.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'E-book',
    price: "$85",
    image: 'https://images.pexels.com/photos/3806168/pexels-photo-3806168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Apple Pencil',
    price: "$40",
    image: 'https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

function renderAside (arr){
    for (const product of productList){
    const productCard = document.createElement('div')
    productCard.classList.add ('product-card');
    productCard.addEventListener("click",openProductDetailAside);

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add ('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const productImgInfo = document.createElement('img');
    productImgInfo.setAttribute("src","./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgInfo);

    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoFigure,productInfoDiv);

    productCard.append(productImg,productInfo);
    cardsContainer.appendChild(productCard);
}  
}

renderAside (productList)


/*  
const renderProducts = [];

renderProducts.push({
    name: 'Power Adapter',
    price: "$120",
    image: 'https://images.pexels.com/photos/14438774/pexels-photo-14438774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem autem, suscipit qui ipsa eligendi."
});
renderProducts.push({
    name: 'Magsafe',
    price: "$100",
    image: 'https://images.pexels.com/photos/7742585/pexels-photo-7742585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem autem, suscipit qui ipsa eligendi."
});
renderProducts.push({
    name: 'Airpods',
    price: "$80",
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem autem, suscipit qui ipsa eligendi."
});
renderProducts.push({
    name: 'PowerBank',
    price: "$60",
    image: 'https://images.pexels.com/photos/11031423/pexels-photo-11031423.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem autem, suscipit qui ipsa eligendi."
});
renderProducts.push({
    name: 'E-book',
    price: "$85",
    image: 'https://images.pexels.com/photos/3806168/pexels-photo-3806168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem autem, suscipit qui ipsa eligendi."
});
renderProducts.push({
    name: 'Apple Pencil',
    price: "$40",
    image: 'https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem autem, suscipit qui ipsa eligendi."
});
<div class="product-detail-close">
      <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="https://images.pexels.com/photos/14438774/pexels-photo-14438774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike">
    <div class="product-info-second">
      <p>$120</p>
      <p>Power adapter</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem autem, suscipit qui ipsa eligendi.</p>
      <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div>

 


for (render of renderProducts){
    const productDetail = document.createElement("div");
    productDetail.classList.add ("product-detail-close");

    const renderClose = document.createElement('img');
    renderClose.setAttribute("src","./icons/icon_close.png");

    const productInfoSecond = document.createElement("div");
    productInfoSecond.classList.add ("product-info-second");

    const productPriceSecond = document.createElement('p');
    productPriceSecond.innerText = render.price;
    const productNameSecond = document.createElement('p');
    productNameSecond.innerText = render.name;
    const productDesSecond = document.createElement('p');
    productDesSecond.innerText = render.description;

    const buttonRender = document.createElement("button");
    buttonRender.classList.add ("primary-button", "add-to-cart-button");
    const renderCart = document.createElement('img');
    renderCart.setAttribute("src","./icons/bt_add_to_cart.svg");

    buttonRender.appendChild(renderCart);
    productInfoSecond.append(productPriceSecond,productNameSecond,productDesSecond);
    productDetail.appendChild(renderClose);

    productDetailContainer.appendChild(productDetail);
}

   */ 
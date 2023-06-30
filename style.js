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
    name: 'Cargador',
    price: 120,
    image: 'https://images.pexels.com/photos/14438774/pexels-photo-14438774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Magsafe',
    price: 100,
    image: 'https://images.pexels.com/photos/7742585/pexels-photo-7742585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Airpods',
    price: 80,
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1600',
});
productList.push({
    name: 'PowerBank',
    price: 60,
    image: 'https://images.pexels.com/photos/11031423/pexels-photo-11031423.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'E-book',
    price: 80,
    image: 'https://images.pexels.com/photos/3806168/pexels-photo-3806168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Apple Pencil',
    price: 80,
    image: 'https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});


for (product of productList){
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
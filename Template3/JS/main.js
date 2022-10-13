    var makeOrder = document.querySelectorAll("[title]");
    function viewMenu() {
    for(var i=0; i<=makeOrder.length; i++){
        makeOrder[i].setAttribute("href",'menu.html');
    }
}

// var allProducts = document.querySelectorAll(".card-body .product");
// var addBtn = document.querySelectorAll(".add");
// var yourOrder = document.querySelector(".your-order");
// var totalPrice = document.querySelector(".Price");
// totalPrice = 0;

// // allProducts.forEach(function (item) {
// //     for(var j=0; i<=addBtn.length; j++){
// //     addBtn[j].onclick = function addToCart() {
// //         yourOrder.innerHTML = item.textContent;
// // }
// //     }
// // });


// addBtn.forEach(function (add){
// //     for(var j=0; j<=allProducts.length; j++){
// //         var order = allProducts[j].textContent + " ";
// // }
//         add.onclick = function (){
//             yourOrder.innerHTML += allProducts.innerText + " ";
//         }
        
    
// });
var addBtn = document.querySelectorAll(".addBtn");
var allItems = document.querySelectorAll(".card-title");
var content = document.querySelector(".content");
var prices = document.querySelectorAll(".price");
var Tprice = document.querySelector('.Tprice');
var totalPrice = 0;
var showTPrice = document.querySelector(".showPrice");


addBtn.forEach(btn => {
        btn.onclick = function () {
        content.innerHTML +=  btn.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent + " " + btn.previousElementSibling.previousElementSibling.textContent + `<br>`;
        
        totalPrice += parseInt(btn.previousElementSibling.previousElementSibling.textContent);
        // console.log(typeof totalPrice)
        Tprice.innerHTML = totalPrice;
        Tprice.style.fontSize = "30px";
        if (totalPrice >=100) {
            Tprice.style.color = "red";
        }else 
            Tprice.style.color = "green";
            }
    });

    function showPrice() {
        Tprice.style.display = "inline-block";
    }
showTPrice.addEventListener( "click" , showPrice);
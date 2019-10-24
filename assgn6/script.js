
function removeCartItem(){
    var x = document.getElementsByClassName("delete-btn");
    remove.x;
}

function priceFunction(){
    var x = document.getElementById("qt").value;
    var price = document.getElementById("number").innerHTML;
    document.getElementById("number").innerHTML = `${parseInt(x)*2.5}$`;

}

function shoppingcartItemPrice(){
    var x = document.getElementById("cart-item-quantity").value;
    var itemprice = document.getElementById("total-price").innerHTML;
    document.getElementById("total-price").innerHTML = `${parseInt(x)*2.5}$`;
}

function glazingPrice(){
    var x = document.getElementsByClassName("glazing-type").value;
    var y = document.getElementById("cart-item-quantity").value;
    var galzingprice = document.getElementById("total-price").innerHTML;
    document.getElementById("total-item").innerHTML = `${parseInt(x)*parseInt(y)}$`
}
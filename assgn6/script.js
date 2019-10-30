var cart=[];

// var x = document.getElementById("cartcount");
// console.log(x);
// var y = x+1;
// console.log(y);


function addedToCart(){
    
    var x = document.getElementById("cartcount");
    document.getElementById("cartcount").innerHTML = x+1;
    document.getElementById("addtocart").innerHTML = "Proceed to Check Out";
    var name = document.getElementById("buntitle");
    localStorage.setItem("bunname", name);

    cart.push(name);
    console.log(cart);
    alert("Your tasty item has been added to your shopping cart!");
}




function removeCartItem(){
    var x = document.getElementsByClassName("delete-btn");
    remove.x;
}


function priceFunction(){
    var x = document.getElementById("qt").value;
    // var price = document.getElementById("number").innerHTML;
    document.getElementById("number").innerHTML = `${parseInt(x)*2.5}$`;

}

function priceFunction2(){
    var x = document.getElementById("glazing").value;
    var y = document.getElementById("qt").value;
    var z = document.getElementById("number").value;
    // var price = document.getElementById("number").innerHTML;
    document.getElementById("number").innerHTML = `${parseInt(x)*parseInt(y)+parseInt(z)}$`;
}

function shoppingcartItemPrice(){
    var x = document.getElementById("cart-item-quantity").value;
    var itemprice = document.getElementById("total-price").innerHTML;
    document.getElementById("total-price").innerHTML = `${parseInt(x)*7}$`;
}

function glazingPrice(){
    var x = document.getElementsByClassName("glazing-type").value;
    var y = document.getElementById("cart-item-quantity").value;
    var galzingprice = document.getElementById("total-price").innerHTML;
    document.getElementById("total-item").innerHTML = `${parseInt(x)*parseInt(y)}$`
}
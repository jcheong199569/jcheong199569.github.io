console.log('javascript is so hard wtf');

var removeItemButton = document.getElementsByClassName('remove-button')
function priceFunction(){
    var x = document.getElementById("qt").value;
    var price = document.getElementById("number").innerHTML;
    document.getElementById("number").innerHTML = `${parseInt(x)*4.5}$`

}

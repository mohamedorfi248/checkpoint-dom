//delete item from the card 
var removeCartItemButton =document.getElementsByClassName("fas fa-trash-alt");
console.log(removeCartItemButton);
for (var i =0;i<removeCartItemButton.length;i++){
    var button =removeCartItemButton[i];
    button.addEventListener("click",function(event){
        var buttonclicked = event.target
        buttonclicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    })
}
//heart color


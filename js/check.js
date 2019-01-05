/*this file is for the shopping carte in the protien and aquipement pages*/
var proteinItem =document.querySelectorAll('.protein-item');
var equipementItem =document.querySelectorAll('.equipement-item');
var image=document.querySelectorAll('.image');
var price=document.querySelectorAll('.price');
const addCartButtons=document.querySelectorAll('[data-action="Add_to_cart"]');
var plus=document.querySelectorAll('.plus');
var minus=document.querySelectorAll('.minus');
var qt=document.querySelectorAll('.qt');
var cartDom=document.querySelector('.cart');
var close=document.querySelector('.close');
var cartItems=document.querySelectorAll('.cart-item');
var total=document.querySelectorAll('.total');
var cartPrice=document.querySelectorAll('.cart-price');



// Add Item to Cart

//const addCartButtons=document.querySelectorAll('[data-action="Add_to_cart"]');
let cart =[];
addCartButtons.forEach(function(addCartButton){
addCartButton.addEventListener('click',function(){
	const productDom=addCartButton.parentNode.parentNode;
	const product={
		image : productDom.querySelector('.image').getAttribute('src'),
		price : productDom.querySelector('.price').innerText,
		name  : productDom.querySelector('.name').innerText,
		quantity: 1,
	};
	
	const isInCart=cart.filter(cartItem => (cartItem.name === product.name)).length > 0

	if(isInCart === false){ // checking if Item added more than one
		cartDom.insertAdjacentHTML('beforeend', `
			<div class="cart-item">
				<div class="img-item">
					<img src="${product.image}" alt="" class="cart-img">
				</div>
				<div class="item-price">
					<span></span>
					<span class="cart-price">${product.price}</span>
					<span></span>
				</div>
				<div class="item-qt">
					<span class="minus">-</span>
					<span class="qt">${product.quantity}</span>
					<span class="plus">+</span>
				</div>
				<div class="item-total">
					<span class="name">${product.name}:</span>
					<span class="total">your Total</span>
					<button class="delete" data-action="Delete_item>&times;</button>
				</div>
				
			</div>
		`);
	cart.push(product);
	addCartButton.innerText = 'In Cart';
	addCartButton.disabled = true;
	addCartButton.style.backgroundColor='grey'
	console.log(product.image)

const cartItemsDom =document.querySelectorAll(".cart-item");
	//Increase quantity
	cartItemsDom.forEach(function(cartItemDom){
		if(cartItemDom.querySelector('.cart-img').getAttribute('src') === product.image){
			
					cartItemDom.querySelector('.plus').addEventListener('click',function(){
			
				cart.forEach(function(cartItem){
				if(cartItem.name === product.name){
					cartItemDom.querySelector('.qt').innerText= ++cartItem.quantity
					cartItemDom.querySelector('.total').textContent=(parseFloat(cartItemDom.querySelector('.cart-price').textContent) * cartItemDom.querySelector('.qt').textContent).toFixed(2)+"$"
				}
				})
			
		})
				}


			

	
	})

		//Decrese Quantity
	cartItemsDom.forEach(function(cartItemDom){
		if(cartItemDom.querySelector('.cart-img').getAttribute('src') === product.image){
		cartItemDom.querySelector('.minus').addEventListener('click',function(){
			cart.forEach(function(cartItem){
				if(cartItem.name === product.name){
					if(cartItem.quantity>1){
						cartItemDom.querySelector('.qt').innerText= --cartItem.quantity
						cartItemDom.querySelector('.total').textContent=(parseFloat(cartItemDom.querySelector('.cart-price').textContent) * cartItemDom.querySelector('.qt').textContent).toFixed(2)+"$"
					}
					else{
						cartItemDOM.classList.add('none');
						addToCartButtonDOM.innerText = 'Add To Cart';
					}
					if(cartItem.quantity===1){
						cartItemDom.querySelector('.minus').style.backgroundColor='red';
					}
					
				}
			})
			
		})
	}
	})





	}

	

});
});





// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.addEventListener('click',function() {
	let d= document.getElementById('myModal').style.display;
    if(d=="none")
	modal.style.display = "block";
	else
	modal.style.display = "none";
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
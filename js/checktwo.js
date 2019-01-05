/*this file is for the chopping carte at the sportwears.html*/
function panieritmes(){ /*to show and hide shopping card*/
    let display= document.getElementById("shopping-cart").style.display;
    if(display=="none")
    document.getElementById("shopping-cart").style.display="block";
    else
    document.getElementById("shopping-cart").style.display="none";
}

let array=[];
let q=0;
let save=[];
let w=0;
const addCartButtons=document.querySelectorAll('[data-action="Add_to_cart"]');


function addtocarte(i){ /*add products to the shopping card */
    let productDom =document.getElementById("button"+i).parentNode.parentNode;
  let  product={
    image : productDom.querySelector('.imgradious').getAttribute('src'),
    price : productDom.querySelector('#price'+i).innerText,
    quantity: 1,
    };
  
   document.getElementById("button"+i.toString()).style.background="gray";
var   r= document.getElementById("imageresource"+i.toString()).getAttribute('src');
var   p= document.getElementById("price"+i.toString()).innerHTML;
var cartDom=document.getElementById('shopping-cart');
cartDom.insertAdjacentHTML('beforeend', `<div id="postioncarte">
 <img id="addeditemimage" src="${r}">
<div id="addeditemprice">${p}</div>
<div class="calcule">
    <input type="submit" class="w3-btn w3-circle" id="addition" onclick="add()" value="+">
    <span class="Qte" id="quantity" >1</span>
    <input type="submit"class="w3-btn w3-circle"  id="soustraction" onclick="soustraction()" value="-">
</div>
<div><h6 id="item-price" class="price">${p}</h6>
</div></div><hr>`);
array.push(product);
document.getElementById("button"+i.toString()).innerText='In Cart';
document.getElementById("button"+i.toString()).disabled=true;




let cartItemsDom =document.querySelectorAll("#postioncarte");

//Increase Element
cartItemsDom.forEach(function(cartItemDom){
   if(cartItemDom.querySelector('#addeditemimage').getAttribute('src')===product.image){
    cartItemDom.querySelector("#addition").addEventListener('click',function(){
       array.forEach(function(cartItem){
           if(cartItem.image === product.image){
            cartItemDom.querySelector('#quantity').innerText= ++cartItem.quantity
            cartItemDom.querySelector('#item-price').textContent=(parseFloat(cartItemDom.querySelector('#addeditemprice').textContent) * cartItemDom.querySelector('#quantity').textContent).toFixed(2)+"$"
          
           }
       })

   })
          
    }
    


})

//Decrease Element 

cartItemsDom.forEach(function(cartItemDom){
    if(cartItemDom.querySelector('#addeditemimage').getAttribute('src')===product.image){
     cartItemDom.querySelector("#soustraction").addEventListener('click',function(){
        array.forEach(function(cartItem){
            if(cartItem.image === product.image){
                if(cartItem.quantity>1){
                    cartItemDom.querySelector('#quantity').innerText= --cartItem.quantity
                    cartItemDom.querySelector('#item-price').textContent=(parseFloat(cartItemDom.querySelector('#addeditemprice').textContent) * cartItemDom.querySelector('#quantity').textContent).toFixed(2)+"$"
               
                }
               
            }
        })
 
    })
           
     }
     
 
 
 })



}


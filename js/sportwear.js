var k = 0; 			
var images = [];
var time = 3000;
images[0] = "images/12354475395d78dbbbf3f2e9444bb7f0.jpg";
images[1] = "images/2d996640066f6898ab618261d8027416.jpg";

var ii = 0; 			
var words= [];
words[0] = "Discount";
words[1] = "-30%";

var iii = 0; 			
var words2= [];
words2[0] = "Discount";
words2[1] = "-40%";
function changeImg(){ // function responsible for changing the images
  // in the slider and the discount animated text inside few of products boxes
  //and animation while loading the page
  setTimeout('document.getElementById("preloader").style.display="none";', 1000);
  document.imagesslider.style.width="100%";
  document.imagesslider.style.height="300px";
	document.imagesslider.src = images[k];
	if(k < images.length - 1){
	  k++; 
	} else { 
		k = 0;
  }
  
  document.getElementById("discount1").innerHTML = words[ii];
  document.getElementById("discount2").innerHTML = words[ii];
	if(ii < words.length - 1){
	  ii++; 
	} else { 
		ii = 0;
    }


    document.getElementById("discount8").innerHTML = words2[ii];
    document.getElementById("discount9").innerHTML = words2[ii];
  document.getElementById("discount10").innerHTML = words2[ii];
	if(iii < words2.length - 1){
	  iii++; 
	} else { 
		iii = 0;
    }
  
	setTimeout("changeImg()", time);
}
window.onload=changeImg;
/**************************************************************************/
let i=1;
function vis(){ //responsible on load more products
let r=document.getElementById('loadMore').innerHTML;
   $('.boxmore'+i).slideDown("slow");
   i++;
   if(i>2)
     {document.getElementById('loadMore').innerHTML = "<i class=\"fa fa-spinner fa-spin\"></i>"+"Load Less Items";}
    if (r==="<i class=\"fa fa-spinner fa-spin\"></i>"+"Load Less Items") {
    $('.boxmore2').slideUp("slow");
    document.getElementById('loadMore').innerHTML = "<i class=\"fa fa-spinner fa-spin\"></i>"+"Load More Items";
    i=2;
  }
}
/********************** */
function changeColor(i)
{  //responsible on like button
   var icon = document.getElementById('heart'+i);
   if(icon.style.color != "red")
   icon.style.color = "red";
   else 
   icon.style.color="rgb(212, 209, 209)";        
}
/****************************************/
function ccc(i){ //responsible on products ppopups 
$("#pop"+i.toString()).on("click", function() {
  let title= document.getElementById("title"+i.toString()).innerHTML;
  let titlemodel= document.getElementById("titleofitem");
  let discription= document.getElementById("description"+i.toString()).innerHTML;
  let discriptionmodel= document.getElementById("itemdiscription");
  $('#imagepreview').attr('src', $('#imageresource'+i.toString()).attr('src'));
  titlemodel.innerHTML= title;
  discriptionmodel.innerHTML= discription;
  $('#imagemodal').modal('show');});}
/******************************************/
function choose(k){ //responsible for products filter

  if(k=='all')
  {
    $('.boxmore').show();
    $('.boxmore1').show();
    $('.boxmore2').show();
    document.getElementById('loadMore').style.display= "none"; 
  }
  else {
    $('.boxmore').show();
    $('.boxmore1').show();
    $('.boxmore2').show();
  let catg=k.toString();
  let v= document.getElementsByClassName("grid-box");
  let vv= document.getElementsByClassName("grid-container-one");
  document.getElementById('loadMore').style.display= "none"; 
  vv[0].style.padding= "20px 0px 0px 0px"; 
  vv[1].style.padding= "10px 0px 0px 0px";
  vv[2].style.padding= "10px 0px 0px 0px"; 
  vv[3].style.padding= "10px 0px 0px 0px";
  vv[4].style.padding= "10px 0px 0px 0px";
 for (i = 0; i < v.length; i++) {
  let val=v[i].getAttribute("value");
   if(val!=catg)

    v[i].style.display="none";
  }
  

}

}
/******************************* */
/******************************* */
//at 300px position the button appear
// When the user clicks on the button, scroll to the top of the document
$(window).scroll(function(){ 
  if ($(this).scrollTop() > 300) { // 300px from top
      $('.top').fadeIn();
  } else {
      $('.top').fadeOut();
  }
});
/** responsible on scrolling to the top button */

function tothetop(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
}
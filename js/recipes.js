
let i=1;
function vis(){  //responsible on load more recipes
let r=document.getElementById('loadMore').innerHTML;
 //if (r==="<i class=\"fa fa-spinner fa-spin\"></i>"+"Load More Items"){ 
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
/*************************************************************************** */
function changeColor(i)
{   //responsible on like button
   var icon = document.getElementById('heart'+i);
   if(icon.style.color != "red")
   icon.style.color = "red";
   else 
   icon.style.color="rgb(212, 209, 209)";          
}
/************************************************ */
function ccc(i){ //responsible on recipes ppopups 
  $("#pop"+i.toString()).on("click", function() {
    let title= document.getElementById("title"+i.toString()).innerHTML;
    let titlemodel= document.getElementById("titleofitem");
    let discription= document.getElementById("description"+i.toString()).innerHTML;
    let discriptionmodel= document.getElementById("itemdiscription");
    $('#imagepreview').attr('src', $('#imageresource'+i.toString()).attr('src'));
    titlemodel.innerHTML= title;
    discriptionmodel.innerHTML= discription;
    $('#imagemodal').modal('show');});}

/****************************************************/  
  function choose(k){ //responsible for products filter
    if(k=='all')
    {
      $('.boxmore').show(); //to resolve the load more button problem
      $('.boxmore1').show();
      $('.boxmore2').show();
      document.getElementById('loadMore').style.display= "none"; //delet load more button
    }
    else {
    $('.boxmore').show();//to resolve the load more button problem
    $('.boxmore1').show();
    $('.boxmore2').show();
    let catg=k.toString();
    let v= document.getElementsByClassName("grid-box");
    let vv= document.getElementsByClassName("grid-container-one");
    document.getElementById('loadMore').style.display= "none"; //delet load more button
    vv[0].style.padding= "20px 0px 0px 0px"; 
    vv[1].style.padding= "10px 0px 0px 0px";
    vv[2].style.padding= "10px 0px 0px 0px"; 
    vv[3].style.padding= "10px 0px 0px 0px";
    vv[4].style.padding= "10px 0px 0px 0px";
   for (i = 0; i < v.length; i++) {
    let val=v[i].getAttribute("value");
     if(val!=catg)
      v[i].style.display="none";
      
      document.getElementById('photos').style.padding= "0px 0px 0px 0px";
    }
  }
  }
/*********************************************** */
function show(){ //show animation while loading the page
setTimeout('document.getElementById("preloader").style.display="none";', 1000);
}
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
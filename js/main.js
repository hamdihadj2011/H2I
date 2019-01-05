//For Protein Items
var $btns = $('.btnn').click(function() {
  if (this.id == 'all') {
    $('.protein-content > div').fadeIn(1000);
  } else {
    var $el = $('.' + this.id).fadeIn(1000);
    $('.protein-content > div').not($el).hide(1000);
  }})

// For Equipement items

var $btns1 = $('.btnn1').click(function() {
  if (this.id == 'all') {
    $('.equipement-content > div').fadeIn(1000);
  } else {
    var $el = $('.' + this.id).fadeIn(1000);
    $('.equipement-content > div').not($el).hide(1000);
  }})
  /*****animat the top button */
$(window).scroll(function(){
		if ($(this).scrollTop() > 300) { // 300px from top
			$('.top').fadeIn();
		} else {
			$('.top').fadeOut();
		}
	});
// When the user clicks on the button, scroll to the top of the document
//Click event to scroll to top
	$('.top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
/**load a page trick */
function showanim(){
  setTimeout('document.getElementById("preloader").style.display="none";', 1000);
  }
  /**like the product  */
  function changeColor(i)
{
   var icon = document.getElementById('heart'+i);
   if(icon.style.color != "red")
   icon.style.color = "red";
   else 
   icon.style.color="rgb(212, 209, 209)";          
}
/*load less **/
function vis(){
let r=document.getElementById('loadless').innerHTML;

    $('.boxmore').slideUp("slow");
    
}
/***********/

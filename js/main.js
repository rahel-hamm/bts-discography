                            // TESTING//




//document.getElementById("demo").innerHTML="First No: = " + one + "<br />Second No: = " + two +
 //" <br / >" + " The product of " + one + " x " + two + " is = " + multiply +
 //"<br />" + two + " plus " + one + " is = " + add;


//alert(  " The product of " + one + " x " + two + " is  " + multiply)
//var lob= "";
//for ( var i = 0; i < 10; i++) {
	//lob += "Das war super!";

//}
//document.getElementById("demo").innerHTML= lob;



//var age= 30;
//if( age<30){
	//document.getElementById("demo2").innerHTML= " ur in ur 20s";
//}
//else if(age==30){
	//document.getElementById("demo2").innerHTML= "u just started ur 30s!!";
//}


// HAMBURGER NAV //


function toggleClass() {

	var mainMenu = document.querySelector(".mainMenu");

	mainMenu.classList.toggle("toggleCls");

} ;


function sideToggleClass() {

	var sideMenu = document.querySelector(".sideMenu");

	sideMenu.classList.toggle("sideToggleCls");
} ;





///////////////////////////// OBJECTS /////////////////////////////

/*const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let month = d.getMonth() + 1;
let day_num = d.getDate();
let year =  d.getFullYear();
let day = days[d.getDay()];
document.getElementById("demo").innerHTML = day_num + "/" + month + "/" + year;
document.getElementById("day").innerHTML = "Today is " + day;
*/



///////////////////////////// ARRAY /////////////////////////////

 /*var wochentag=["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag","Samstag"];
document.getElementById("weekday").innerHTML= wochentag;
*/

//////////////////////////////////////////////////////// /////////////////////////////



// ///////////////////////////Formulare //v///////////////////////////



////////////////////////////////////////////////////
// Bildwechsel // ver1
function tauschen(id, quelle){

	document.getElementById("imgLeft").src = quelle ;

} ;

///////////////////////////// /////////////////////////////


// Read More //

/*var readMoreBtn = document.querySelector('.read-more-btn');
var text = document.querySelector('.text');

readMoreBtn.addEventListener('click', function(){

	text.classList.toggle('show-more');
	if(readMoreBtn.innerText === 'Read More'){
		readMoreBtn.innerText = 'Read Less';}
else{
	readMoreBtn.innerText = 'Read More';
}


});*/

/* METHOD 1
function hideText() {
  const moreText = document.querySelector(".moreText").classList;
  moreText.toggle("toggleText");


}

/* METHOD 2
  const toggleText = document.querySelector(".Text");
  

function toggle(){

  if(toggleText.style.display === 'none'){

      toggleText.style.display = 'inline';

  }else{

      toggleText.style.display = 'none';

  }
}
*/



const text = document.querySelector('.textItem');
const toggle = document.querySelector('.toggle');


text.addEventListener('click', function(){
  if(toggle.style.display === 'none'){
      toggle.classList.toggle('.toggleShow');    
      

  }else{

      toggle.classList.toggle('.toggleHide');    
      

  }
});
  


  

  


 // ======================Lyric pop up with JQuery===============================  //


	 $(function () {

 	$('.more').hide();
 	$('.img').on("click", function(){
 		$(this).next().slideToggle();
})
 	$('.more').css('cursor', 'pointer');

});

$(function (){
	$('.modal-bg' ).hide();
  $('.modal' ).hide();
	$('.parentNode #modal-btn').on("click", function(){
		$('.modal-bg' ).show();
    $('.modal' ).show();

	})
	$('.modal-close').on("click" ,function(){
		$('.modal-bg' ).hide();
    $('.modal' ).hide();
	})

});


// ======================Pop up (Alternative method)===============================  //
/*const modalBtn =document.querySelector('#modal-btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function(){
modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function(){
modalBg.classList.remove('bg-active');

}); */



 //var parentElement = document.querySelector('.parent');
 //var modalBg = document.querySelector('.modal-bg');

 //parentElement.addEventListener('click' ,doSomething);

 //function doSomething(e){
 //	if (e.target !== e.currentTarget){
 //		var clickedItem = e.target.id;
 //		modalBg.classList.add('bg-active');
 //	}
 //}

 //============================= Search Bar===================================//


function openPage(){

var searchBar= document.getElementById('search_bar').value;

 if (searchBar === "performance"){
 	window.open("comeback.php", "_self");
 }

 if (searchBar === "home"){
 	window.open("index.php", "_self");
 }
}

//============================= TO DO ===================================//

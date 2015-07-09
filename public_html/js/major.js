var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);


///////////////////////////
//bad code repeats itself//
///////////////////////////////////////////////////////////
//var simon = document.getElementbyId("simon");
//var simonPic= document.getElementById("simon-pic");
//
//simon.addEventListener("click",fuction() {
//	if (simonPic.className == "hide) {
//		simonPic.className = "";
//	else
//		simonPic.className="hide";		
//	}
//});
//
//var bruce = document.getElementbyId("bruce");
//var brucePic= document.getElementById("bruce-pic");
//
//bruce.addEventListener("click",fuction() {
//	if (brucePic.className == "hide) {
//		brucePic.className = "";
//	else
//		brucePic.className="hide";		
//	}
//});
//
//var ben = document.getElementbyId("ben");
//var benPic= document.getElementById("ben-pic");
//
//ben.addEventListener("click",fuction() {
//	if (benPic.className == "hide) {
//		benPic.className = "";
//	else
//		benPic.className="hide";		
//	}
//});
////////////////////////////////////////////////////////////
var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");
simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink(){
	var allImages = document.querySelectorAll("img");
	var picId = this.attributes["data-img"].value;
	console.log(picId);
	var pic = document.getElementById(picId);

	for(var i=0; i < allImages.length; i++){
	if(allImages[i] === pic && pic.className === "hide"){
			pic.className = "show";
		}
		else{
			allImages[i].className = "hide";	
		}	
	}


 //	for(var i=0; i < allImages.length; i++){
 //		allImages[i].className = "hide";
 //	}
 //	if (pic.className === "hide"){
 //		pic.className = "show";
 //	}
 //	else{
 //		pic.className = "hide";
 //	}



}

function add() {
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	addSum.innerHTML = "Your sum is: " + (one+two);
}



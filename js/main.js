// var header = document.getElementsByClassName("navbar-custom")
setInterval(alternateComputer, 10000);



const nav = document.querySelector('.navbar-custom')
const getOffset = () => {
if(window.pageYOffset > 50){
    nav.style.backgroundColor = 'rgba(33, 37, 41, 0.5)';
    nav.style.transition = 'background 0.5s ease-out';
}
if (window.pageYOffset < 50) {
    nav.style.backgroundColor = 'rgba(33, 37, 41, 1)';
}
}
window.addEventListener('scroll', getOffset)


// email button copy function
function email(x) {
	let email_var = "nikhilprem25@gmail.com";
	navigator.clipboard.writeText(email_var);

	// Alert the copied text
	alert("Copied the text: " + email_var);
}

// alternate computer image 
function alternateComputer() {
	var grayimage = "./images/laptopGS.png";
	var current = "file:///C:/Users/npremdinu2/Desktop/developing/website/n0obed.github.io-main/images/laptopGS.png"; // DELETE IT
	var colorimage = "./images/laptop.png";
	var imageID = document.getElementById("laptopImage");
	console.log(imageID.src);
	if (current == imageID.src) {
	//console.log(imageID.src);
	imageID.src = colorimage;
	} else {imageID.src = grayimage;}
}

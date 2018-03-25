function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
}

function openPopupWithSize(){
    searchPic = new Image(100,100);
    searchPic.src = "../img/pom.png";
	$("#pic").attr("src", searchPic.src);
}

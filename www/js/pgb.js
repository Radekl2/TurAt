function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
}

function openPopupWithSize(pngUrl){
    // clean-up before, if we have to deal with some more images
    $('#pic img').attr('src', "");
    // set various parameters
   // var xhr = new XMLHttpRequest();
   // xhr.open("GET", pngUrl, true);
    // just get only what is strictly necessary
   // xhr.setRequestHeader("range', 'bytes=0-23");
   // xhr.overrideMimeType("text\/plain; charset=x-user-defined"); 
   // xhr.onprogress = function(e){
        // read the few bytes needed to get width & height of the png
     //   var data = e.currentTarget.response;
        // offset are: 16 & 20 - see PNG specifications
     //   var w = readByte(data, 19) | (readByte(data, 18) << 8) | (readByte(data, 17) << 16) | (readByte(data, 16) << 24);
     //   var h = readByte(data, 23) | (readByte(data, 22) << 8) | (readByte(data, 21) << 16) | (readByte(data, 20) << 24);
        // set size of the container, will be reset by the framework as needed
     //   $('#image-popup-popup').css("width", w+"px");
     //   $('#image-popup-popup').css("height", h+"px");
        // assign image src like you did it in your example
        $('#pic img').attr('src', pngUrl);
        // finally, open the popup - JQM is allowed now to reposition correctly
        $('#pic').popup("open", {"positionTo": "window"});
   // };
   // xhr.send(null);
}

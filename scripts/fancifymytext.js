function biggerFunc(){
    // alert("Hello, world!");
    document.getElementById("userText").style.fontSize = "4em";

}

function fancyFunc(){
    document.getElementById("userText").style.fontFamily = "Brush Script MT";
    document.getElementById("userText").style.fontWeight = "Bold";
    document.getElementById("userText").style.color= "blue";
    document.getElementById("userText").style.textDecoration = "underline";
}

function boringFunc(){
    document.getElementById("userText").style.fontFamily = "";
    document.getElementById("userText").style.fontWeight = "";
    document.getElementById("userText").style.color= "";
    document.getElementById("userText").style.textDecoration = "";
}

function mooFunc(){
    document.getElementById("userText").style.textTransform = "uppercase";
    var str = document.getElementById("userText").value;
    var parts = str.split(".");
    str = parts.join(" moo.");
    document.getElementById("userText").value = str;

}


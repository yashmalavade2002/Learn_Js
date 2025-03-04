document.getElementById("img").src="of.png";
document.getElementById("text").innerHTML="OFF";
function bttnon(){
    document.getElementById("img").src="on.png";
    document.getElementById("text").innerHTML="ON";
    document.getElementById("on").style.backgroundColor = "rgb(245, 188, 0)";
    document.getElementById("off").style.backgroundColor = "white";
    document.getElementById("on").style.color = "white";
    document.getElementById("off").style.color = "black";
}
function bttnoff(){
    document.getElementById("img").src="of.png";
    document.getElementById("text").innerHTML="OFF";
    document.getElementById("on").style.backgroundColor = "white";
    document.getElementById("off").style.backgroundColor = "rgb(245, 188, 0)";
    document.getElementById("off").style.color = "white";
    document.getElementById("on").style.color = "black";
}
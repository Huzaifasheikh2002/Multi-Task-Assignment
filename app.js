function changeBG() {
var userBG = prompt("enter background color");
var button1 =document.getElementById("button1");
button1.style.backgroundColor=userBG
}
function changeText(){
var userText=prompt("enter text color");
var button1=document.getElementById("button1");
button1.style.color=userText
}
function myImg1(){
    var myImage=document.getElementById("myImage")
    var btn1 = document.getElementById("btn1")
    myImage.src = "./img/me.jpg"
}
function myImg2(){
    var myImage=document.getElementById("myImage")
    myImage.style.width= "300px"
}
function myImg3() {
    var myImg = document.getElementById("myImage")
    myImg.style.width = "100px"
}

function myImg4() {
    var myImg = document.getElementById("myImage")
    myImg.style.display = "none"
}

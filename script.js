var position=0;
var images=["https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
    "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
    "https://b.zmtcdn.com/data/pictures/chains/7/90237/1adb116d088669540c89150836d668f9.jpg?fit=around|960:500&crop=960:500;*,*",
    "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D",
    "https://media.gettyimages.com/id/184946701/photo/pizza.jpg?s=612x612&w=gi&k=20&c=4iMEO-I-_0tSb7f35CMFWN4N3Xdqf99sadSJyD-4dZk="
]
var imageSlider = document.querySelector(".slider-image");
const onRightArrowClick = ()=>{

var span = document.getElementsByClassName(`${position}`)[0];  
span.style.backgroundColor="white";
if(position+1>4){
    position=0;
}else{
    position=position+1
}
imageSlider.src = images[position]
var span = document.getElementsByClassName(`${position}`)[0];  
span.style.backgroundColor="black";
span.style.border="1px solid white" 
}
const onLeftArrowClick = ()=>{
    var span = document.getElementsByClassName(`${position}`)[0];  
span.style.backgroundColor="white";
    if(position-1 < 0){
        position=4;
    }else{
        position=position-1
    }
    imageSlider.src = images[position]
    var span = document.getElementsByClassName(`${position}`)[0];  
span.style.backgroundColor="black";
span.style.border="1px solid white" 
}
document.addEventListener("DOMContentLoaded",()=>{
    var span = document.getElementsByClassName("0")[0];
    span.style.backgroundColor="black";
    span.style.border="1px solid white"  
})
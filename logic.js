let countText = document.getElementById("count-el")
let count = 0;
let count_save = true;
let previsiousText = document.getElementById("save")

function add(){

    console.log("The add button was clicked");
    count++;  
    countText.innerText=count;
    
    
}

function left(){
    console.log("the left button was clicked");
    count --; 
    if(count <0){
        count=0;
    }
    countText.innerText=count;
    
}

function save(){
    if(count_save){
        previsiousText.innerText = previsiousText.innerText + "Previous entries: " + count + " - "
        count_save = false
    }
    else{
        previsiousText.innerText = previsiousText.innerText + count + " - " 
    }
    count=0;
    countText.innerText=count;
}
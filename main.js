let currentId=0;

var pop0 = new Audio("media/popping/" + 0 + ".mp3");
var pop1 = new Audio("media/popping/" + 1 + ".mp3");
var pop2 = new Audio("media/popping/" + 2 + ".mp3");
const popArray = [pop0,pop1,pop2];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function makePopcorn(){
    let currentRandomX = getRandomInt(window.innerWidth);
    let currentRandomY = getRandomInt(window.innerHeight);
    let currentRotation = getRandomInt(360);

    function imageHandler(imageElement){
        imageElement.style.top = currentRandomY + "px";
        imageElement.style.left = currentRandomX + "px";
        imageElement.style.rotate = currentRotation + "deg";
        document.body.appendChild(imageElement);
    }

    function pop(){
        let popped = document.createElement("img");
            popped.classList.add("popped");
            popped.src = "media/popped/" + currentId + ".png";
            imageHandler(popped);

            currentId>2?currentId=0:currentId++

            var popping = eval("pop"+ Math.floor(Math.random()*popArray.length));
                popping.play();

    }

    let unpopped = document.createElement("img");
        unpopped.classList.add("unpopped");
        unpopped.src = "media/unpopped/1.png";
        imageHandler(unpopped);

        unpopped.addEventListener("click",()=>{
            document.body.removeChild(unpopped);
            pop();
        })
}

setInterval(function(){
    makePopcorn();
},1000)

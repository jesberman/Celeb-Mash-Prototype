var celebArray = [
    {
        name: "Tom Hanks",
        picture: "assets/images/tomHanks.jpg"

    },
    {
        name: "Benedict Cumberbatch",
        picture: "assets/images/benedictCumberbatch.jpg"
    },
    {
        name: "Charlize Theron",
        picture: "assets/images/charlizeTheron.jpg"
    },
    {
        name: "Evangeline Lilly",
        picture: "assets/images/evangelineLilly.jpg"
    },
    {
        name: "Katee Sackhoff",
        picture: "assets/images/kateeSackhoff.jpg"
    },
    {
        name: "Robert Downey Jr.",
        picture: "assets/images/robertDowneyJr.jpg"
    },
    {
        name: "Rose Leslie",
        picture: "assets/images/roseLeslie.jpg"
    },
    {
        name: "Denzel Washington",
        picture: "assets/images/denzelWashington.jpg"
    },
];

var celebArrayLength = celebArray.length;
var initialPicValue1 = Math.floor((Math.random() * celebArrayLength));
var initialPicValue2 = Math.floor((Math.random() * celebArrayLength));

function loadPics () {
    if(initialPicValue1 === initialPicValue2 && initialPicValue2 === 7){
        initialPicValue2 -= 1;
    }
    if (initialPicValue1 === initialPicValue2){
        initialPicValue2 += 1;
    }
    if(initialPicValue1 === initialPicValue2 && initialPicValue1 === 0){
        initialPicValue2 += 1;
    }
    $("#picture1").css("background-image","url(" + celebArray[initialPicValue1].picture + ")");
    $("#picture2").css("background-image","url(" + celebArray[initialPicValue2].picture + ")");
    console.log("Initial Array:");
    console.log(celebArray);
}

loadPics();

function pressButton1 () {
    console.log("Initial Pic 2 Value");
    console.log(initialPicValue2);
    console.log("Celeb Being Removed");
    console.log(celebArray[initialPicValue2].picture);
    celebArray.splice(initialPicValue2,1);

    celebArrayLength = celebArray.length;
    initialPicValue1 = Math.floor((Math.random() * celebArrayLength));
    initialPicValue2 = Math.floor((Math.random() * celebArrayLength));

    if(initialPicValue1 === initialPicValue2 && initialPicValue2 === celebArrayLength){
        initialPicValue2 -= 1;
    }
    if (initialPicValue1 === initialPicValue2){
        initialPicValue2 += 1;
    }
    if(initialPicValue1 === initialPicValue2 && initialPicValue1 === 0){
        initialPicValue2 += 1;
    }
    if (celebArrayLength === 1){
        return alert("Congrats! Your Favorite Celeb is " + celebArray[0].name);
    }
    console.log("Celeb To Be Removed:")
    console.log(celebArray[initialPicValue2].picture);
    $("#picture1").css("background-image","url(" + celebArray[initialPicValue1].picture + ")");
    $("#picture2").css("background-image","url(" + celebArray[initialPicValue2].picture + ")");

    console.log("Array After Button Press:");
    console.log(celebArray);

}

function pressButton2 () {
    console.log("Initial Pic 1 Value");
    console.log(initialPicValue1);
    console.log("Celeb Being Removed");
    console.log(celebArray[initialPicValue1].picture);
    celebArray.splice(initialPicValue1,1);

    celebArrayLength = celebArray.length;
    initialPicValue1 = Math.floor((Math.random() * celebArrayLength));
    initialPicValue2 = Math.floor((Math.random() * celebArrayLength));

    if(initialPicValue1 === initialPicValue2 && initialPicValue2 === celebArrayLength){
        initialPicValue2 -= 1;
    }
    if (initialPicValue1 === initialPicValue2){
        initialPicValue2 += 1;
    }
    if(initialPicValue1 === initialPicValue2 && initialPicValue1 === 0){
        initialPicValue2 += 1;
    }
    if (celebArrayLength === 1){
        return alert("Congrats! Your Favorite Celeb is " + celebArray[0].name);
    }
    console.log("Celeb To Be Removed:")
    console.log(celebArray[initialPicValue1].picture);
    $("#picture1").css("background-image","url(" + celebArray[initialPicValue1].picture + ")");
    $("#picture2").css("background-image","url(" + celebArray[initialPicValue2].picture + ")");

    console.log("Array After Button Press:");
    console.log(celebArray);
}
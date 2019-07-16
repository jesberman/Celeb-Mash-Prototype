var celebArray = [
    {
        name: "Tom Hanks",
        picture: "assets/images/tomHanks.jpg",
        clicks: 0,
        score: Math.random()
    },
    {
        name: "Benedict Cumberbatch",
        picture: "assets/images/benedictCumberbatch.jpg",
        clicks: 0,
        score: Math.random()
    },
    {
        name: "Charlize Theron",
        picture: "assets/images/charlizeTheron.jpg",
        clicks: 0,
        score: Math.random()
    },
    {
        name: "Evangeline Lilly",
        picture: "assets/images/evangelineLilly.jpg",
        clicks: 0,
        score: Math.random()
    },
    {
        name: "Katee Sackhoff",
        picture: "assets/images/kateeSackhoff.jpg",
        clicks: 0,
        score: Math.random()
    },
    {
        name: "Robert Downey Jr.",
        picture: "assets/images/robertDowneyJr.jpg",
        clicks: 0,
        score: Math.random()
    },
    {
        name: "Rose Leslie",
        picture: "assets/images/roseLeslie.jpg",
        clicks: 0,
        score: Math.random()
    },
    {
        name: "Denzel Washington",
        picture: "assets/images/denzelWashington.jpg",
        clicks: 0,
        score: Math.random()
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

    // console.log("Array Before Button Press:");
    // console.log(celebArray);
    console.log("Initial Pic 2 Value");
    console.log(initialPicValue2);
    console.log("Celeb Being Removed");
    console.log(celebArray[initialPicValue2].picture);
    // alert("Button 1 Pressed");
    // var valLeft = initialPicValue1;
    // var valRight = initialPicValue2;
    celebArray.splice(initialPicValue2,1);
    // console.log(valRight);

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
    // console.log("Array Before Button Press:");
    // console.log(celebArray);
    console.log("Initial Pic 1 Value");
    console.log(initialPicValue1);
    console.log("Celeb Being Removed");
    console.log(celebArray[initialPicValue1].picture);
    // alert("Button 1 Pressed");
    // var valLeft = initialPicValue1;
    // var valRight = initialPicValue2;
    celebArray.splice(initialPicValue1,1);
    // console.log(valRight);

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


// function test () {
//     document.getElementById("test").innerHTML = celebArray[0].score;
//     document.getElementById("test2").innerHTML = celebArray[2].score;
// }

// test();

// function sortCelebs(){
//     celebArray.sort(function(a,b){
//         return a.score - b.score;
//     })
// }

// sortCelebs();

// function loadImage() {
//     $("#button1").click(function(){
//         $("picture1").addClass("intro");
//       });
// }
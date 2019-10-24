//variables for the text boxes
var textBoxZero = $("#textBoxZero")
var textBoxOne = $("#textBoxOne")
var textBoxTwo = $("#textBoxTwo")
var textBoxThree = $("#textBoxThree")
var textBoxFour = $("#textBoxFour")
var textBoxFive = $("#textBoxFive")
var textBoxSix = $("#textBoxSix")
var textBoxSeven = $("#textBoxSeven")
var textBoxEight = $("#textBoxEight")

//variable for the lock images
var lockImageZero = $("#lock-image-zero")
var lockImageOne = $("#lock-image-one")
var lockImageTwo = $("#lock-image-two")
var lockImageThree = $("#lock-image-three")
var lockImageFour = $("#lock-image-four")
var lockImageFive = $("#lock-image-five")
var lockImageSix = $("#lock-image-six")
var lockImageSeven = $("#lock-image-seven")
var lockImageEight = $("#lock-image-eight")

var userContent = $(".user-content")

var currentTime = $("#currentTime")
var $lockButton = $(".lock-image")

//Getting the current time and day
var now = moment().format("dddd, MMMM Do YYYY, h:mm a");
currentTime.text(now)
var timeStamp = moment().format("H")
timeStamp = parseInt(timeStamp)
console.log(timeStamp)

window.onload = onLoadGrabText()




//Puts text in the box and and stores it to local storage
$lockButton.on("click", function () {
    var index = $(event.target).data('index')

    var textBoxStorage = {
        textZero: textBoxZero.text(),
        textOne: textBoxOne.text(),
        textTwo: textBoxTwo.text(),
        textThree: textBoxThree.text(),
        textFour: textBoxFour.text(),
        textFive: textBoxFive.text(),
        textSix: textBoxSix.text(),
        textSeven: textBoxSeven.text(),
        textEight: textBoxEight.text()
    }
    if (index === 0 && textBoxZero.text()) {
        localStorage.setItem("textBoxZero", JSON.stringify(textBoxStorage.textZero))
        $(this).attr("src", "assets/padlock.png")
    } else if (index === 1 && textBoxOne.text()) {
        localStorage.setItem("textBoxOne", JSON.stringify(textBoxStorage.textOne))
        $(this).attr("src", "assets/padlock.png")
    } else if (index === 2 && textBoxTwo.text()) {
        localStorage.setItem("textBoxTwo", JSON.stringify(textBoxStorage.textTwo))
        $(this).attr("src", "assets/padlock.png")
    } else if (index === 3 && textBoxThree.text()) {
        localStorage.setItem("textBoxThree", JSON.stringify(textBoxStorage.textThree))
        $(this).attr("src", "assets/padlock.png")
    } else if (index === 4 && textBoxFour.text()) {
        localStorage.setItem("textBoxFour", JSON.stringify(textBoxStorage.textFour))
        $(this).attr("src", "assets/padlock.png")
    } else if (index === 5 && textBoxFive.text()) {
        localStorage.setItem("textBoxFive", JSON.stringify(textBoxStorage.textFive))
        $(this).attr("src", "assets/padlock.png")
    } else if (index === 6 && textBoxSix.text()) {
        localStorage.setItem("textBoxSix", JSON.stringify(textBoxStorage.textSix))
        $(this).attr("src", "assets/padlock.png")
    } else if (index === 7 && textBoxSeven.text()) {
        localStorage.setItem("textBoxSeven", JSON.stringify(textBoxStorage.textSeven))
        $(this).attr("src", "assets/padlock.png")
    } else if (index === 8 && textBoxEight.text()) {
        localStorage.setItem("textBoxEight", JSON.stringify(textBoxStorage.textEight))
        $(this).attr("src", "assets/padlock.png")
    }
})

//puts text in the box on load and changes the lock image
function onLoadGrabText() {
    textBoxZero.text(JSON.parse(localStorage.getItem("textBoxZero")))
    textBoxOne.text(JSON.parse(localStorage.getItem("textBoxOne")))
    textBoxTwo.text(JSON.parse(localStorage.getItem("textBoxTwo")))
    textBoxThree.text(JSON.parse(localStorage.getItem("textBoxThree")))
    textBoxFour.text(JSON.parse(localStorage.getItem("textBoxFour")))
    textBoxFive.text(JSON.parse(localStorage.getItem("textBoxFive")))
    textBoxSix.text(JSON.parse(localStorage.getItem("textBoxSix")))
    textBoxSeven.text(JSON.parse(localStorage.getItem("textBoxSeven")))
    textBoxEight.text(JSON.parse(localStorage.getItem("textBoxEight")))

    if (textBoxZero.text()) {
        lockImageZero.attr("src", "assets/padlock.png")
    }
    if (textBoxOne.text()) {
        lockImageOne.attr("src", "assets/padlock.png")
    }
    if (textBoxTwo.text()) {
        lockImageTwo.attr("src", "assets/padlock.png")
    }
    if (textBoxThree.text()) {
        lockImageThree.attr("src", "assets/padlock.png")
    }
    if (textBoxFour.text()) {
        lockImageFour.attr("src", "assets/padlock.png")
    }
    if (textBoxFive.text()) {
        lockImageFive.attr("src", "assets/padlock.png")
    }
    if (textBoxSix.text()) {
        lockImageSix.attr("src", "assets/padlock.png")
    }
    if (textBoxSeven.text()) {
        lockImageSeven.attr("src", "assets/padlock.png")
    }
    if (textBoxEight.text()) {
        lockImageEight.attr("src", "assets/padlock.png")
    }

}


//Changes the color of the box based on the time of the day
if (timeStamp < 9 || timeStamp > 17) {
    userContent.css("background-color", "var(--third)")

} else if (timeStamp === 9) {
    textBoxZero.css("background-color", "var(--fourth)")

} else if (timeStamp === 10) {
    textBoxZero.css("background-color", "var(--secondary)")
    textBoxOne.css("background-color", "var(--fourth)")

} else if (timeStamp === 11) {
    textBoxZero.css("background-color", "var(--secondary)")
    textBoxOne.css("background-color", "var(--secondary)")
    textBoxTwo.css("background-color", "var(--fourth)")

} else if (timeStamp === 12) {
    textBoxZero.css("background-color", "var(--secondary)")
    textBoxOne.css("background-color", "var(--secondary)")
    textBoxTwo.css("background-color", "var(--secondary)")
    textBoxThree.css("background-color", "var(--fourth)")

} else if (timeStamp === 13) {
    textBoxZero.css("background-color", "var(--secondary)")
    textBoxOne.css("background-color", "var(--secondary)")
    textBoxTwo.css("background-color", "var(--secondary)")
    textBoxThree.css("background-color", "var(--secondary)")
    textBoxFour.css("background-color", "var(--fourth)")

} else if (timeStamp === 14) {
    textBoxZero.css("background-color", "var(--secondary)")
    textBoxOne.css("background-color", "var(--secondary)")
    textBoxTwo.css("background-color", "var(--secondary)")
    textBoxThree.css("background-color", "var(--secondary)")
    textBoxFour.css("background-color", "var(--secondary)")
    textBoxFive.css("background-color", "var(--fourth)")

} else if (timeStamp === 15) {
    textBoxZero.css("background-color", "var(--secondary)")
    textBoxOne.css("background-color", "var(--secondary)")
    textBoxTwo.css("background-color", "var(--secondary)")
    textBoxThree.css("background-color", "var(--secondary)")
    textBoxFour.css("background-color", "var(--secondary)")
    textBoxFive.css("background-color", "var(--secondary)")
    textBoxSix.css("background-color", "var(--fourth)")

} else if (timeStamp === 16) {
    textBoxZero.css("background-color", "var(--secondary)")
    textBoxOne.css("background-color", "var(--secondary)")
    textBoxTwo.css("background-color", "var(--secondary)")
    textBoxThree.css("background-color", "var(--secondary)")
    textBoxFour.css("background-color", "var(--secondary)")
    textBoxFive.css("background-color", "var(--secondary)")
    textBoxSix.css("background-color", "var(--secondary)")
    textBoxSeven.css("background-color", "var(--fourth)")

} else if (timeStamp === 16) {
    textBoxZero.css("background-color", "var(--secondary)")
    textBoxOne.css("background-color", "var(--secondary)")
    textBoxTwo.css("background-color", "var(--secondary)")
    textBoxThree.css("background-color", "var(--secondary)")
    textBoxFour.css("background-color", "var(--secondary)")
    textBoxFive.css("background-color", "var(--secondary)")
    textBoxSix.css("background-color", "var(--secondary)")
    textBoxSeven.css("background-color", "var(--secondary)")
    textBoxEight.css("background-color", "var(--fourth)")
}


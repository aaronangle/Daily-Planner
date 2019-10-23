
var textBoxZero = $("#textBoxZero")
var textBoxOne = $("#textBoxOne")
var textBoxTwo = $("#textBoxTwo")
var textBoxThree = $("#textBoxThree")
var textBoxFour = $("#textBoxFour")
var textBoxFive = $("#textBoxFive")
var textBoxSix = $("#textBoxSix")
var textBoxSeven = $("#textBoxSeven")
var textBoxEight = $("#textBoxEight")

var lockImageZero = $("#lock-image-zero")
var lockImageOne = $("#lock-image-one")
var lockImageTwo = $("#lock-image-two")
var lockImageThree = $("#lock-image-three")
var lockImageFour = $("#lock-image-four")
var lockImageFive = $("#lock-image-five")
var lockImageSix = $("#lock-image-six")
var lockImageSeven = $("#lock-image-seven")
var lockImageEight = $("#lock-image-eight")

var currentTime = $("#currentTime")
var $lockButton = $(".lock-image")

var now = moment().format("dddd, MMMM Do YYYY, h:mm a");
currentTime.text(now)

window.onload = onLoadGrabText()


$lockButton.on("click", function () {
    var index = $(event.target).data('index')

    if (index === 0 && textBoxZero.text()) {
        var zero = textBoxZero.text()
        localStorage.setItem("textBoxZero", JSON.stringify(zero))
        $(this).attr("src", "assets/padlock.png")
        console.log("click")
    } else if (index === 1 && textBoxOne.text()) {
        var one = textBoxOne.text()
        localStorage.setItem("textBoxOne", JSON.stringify(one))
        $(this).attr("src", "assets/padlock.png")
    } else if (index === 2 && textBoxTwo.text()) {
        var two = textBoxTwo.text()
        localStorage.setItem("textBoxTwo", JSON.stringify(two))
        $(this).attr("src", "assets/padlock.png")
    } else if (index === 3 && textBoxThree.text()) {
        var three = textBoxThree.text()
        localStorage.setItem("textBoxThree", JSON.stringify(three))
        $(this).attr("src", "assets/padlock.png")
    } else if (index === 4 && textBoxFour.text()) {
        var four = textBoxFour.text()
        localStorage.setItem("textBoxFour", JSON.stringify(four))
        $(this).attr("src", "assets/padlock.png")
    } else if (index === 5 && textBoxFive.text()) {
        var five = textBoxFive.text()
        localStorage.setItem("textBoxFive", JSON.stringify(five))
        $(this).attr("src", "assets/padlock.png")
    } else if (index === 6 && textBoxSix.text()) {
        var six = textBoxSix.text()
        localStorage.setItem("textBoxSix", JSON.stringify(six))
        $(this).attr("src", "assets/padlock.png")
    } else if (index === 7 && textBoxSeven.text()) {
        var seven = textBoxSeven.text()
        localStorage.setItem("textBoxSeven", JSON.stringify(seven))
        $(this).attr("src", "assets/padlock.png")
    } else if (index === 8 && textBoxEight.text()) {
        var eight = textBoxEight.text()
        localStorage.setItem("textBoxEight", JSON.stringify(eight))
        $(this).attr("src", "assets/padlock.png")
    }
})

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


// var textHolderObj = {
//     text1: JSON.stringify(inputArray[0]),
//     text2: inputArray[1]
// }

// $lockButton2.on("click", function () {
//     inputArray2 = []
//     inputArray2.push($userInputRow2.text())
//     localStorage.setItem("inputArray2", JSON.stringify(inputArray2))
//     $lockButton1.attr("src", "assets/padlock.png")
// })
// $lockButton2.on("click", function () {
//     inputArray2 = []
//     inputArray2.push($userInputRow2.text())
//     localStorage.setItem("inputArray2", JSON.stringify(inputArray2))
//     $lockButton1.attr("src", "assets/padlock.png")
// })
// $lockButton2.on("click", function () {
//     inputArray2 = []
//     inputArray2.push($userInputRow2.text())
//     localStorage.setItem("inputArray2", JSON.stringify(inputArray2))
//     $lockButton1.attr("src", "assets/padlock.png")
// })
// $lockButton2.on("click", function () {
//     inputArray2 = []
//     inputArray2.push($userInputRow2.text())
//     localStorage.setItem("inputArray2", JSON.stringify(inputArray2))
//     $lockButton1.attr("src", "assets/padlock.png")
// })
// $lockButton2.on("click", function () {
//     inputArray2 = []
//     inputArray2.push($userInputRow2.text())
//     localStorage.setItem("inputArray2", JSON.stringify(inputArray2))
//     $lockButton1.attr("src", "assets/padlock.png")
// })
// $lockButton2.on("click", function () {
//     inputArray2 = []
//     inputArray2.push($userInputRow2.text())
//     localStorage.setItem("inputArray2", JSON.stringify(inputArray2))
//     $lockButton1.attr("src", "assets/padlock.png")
// })
// $lockButton2.on("click", function () {
//     inputArray2 = []
//     inputArray2.push($userInputRow2.text())
//     localStorage.setItem("inputArray2", JSON.stringify(inputArray2))
//     $lockButton1.attr("src", "assets/padlock.png")
// })
// $lockButton2.on("click", function () {
//     inputArray2 = []
//     inputArray2.push($userInputRow2.text())
//     localStorage.setItem("inputArray2", JSON.stringify(inputArray2))
//     $lockButton1.attr("src", "assets/padlock.png")
// })

// function onload() {
//     $userInputRow1.text(JSON.parse(localStorage.getItem("inputArray1")))
//     if ($userInputRow1.text !== "") {
//         $lockButton1.attr("src", "assets/padlock.png")
//     }

//     $userInputRow2.text(JSON.parse(localStorage.getItem("inputArray2")))
//     if ($userInputRow2.text !== "") {
//         $lockButton2.attr("src", "assets/padlock.png")
//     }

//     $userInputRow3.text(JSON.parse(localStorage.getItem("inputArray3")))
//     if ($userInputRow3.text !== "") {
//         $lockButton3.attr("src", "assets/padlock.png")
//     }

//     $userInputRow4.text(JSON.parse(localStorage.getItem("inputArray4")))
//     if ($userInputRow4.text !== "") {
//         $lockButton4.attr("src", "assets/padlock.png")
//     }

//     $userInputRow5.text(JSON.parse(localStorage.getItem("inputArray5")))
//     if ($userInputRow5.text !== "") {
//         $lockButton5.attr("src", "assets/padlock.png")
//     }

//     $userInputRow6.text(JSON.parse(localStorage.getItem("inputArray6")))
//     if ($userInputRow6.text !== "") {
//         $lockButton6.attr("src", "assets/padlock.png")
//     }

//     $userInputRow7.text(JSON.parse(localStorage.getItem("inputArray7")))
//     if ($userInputRow7.text !== "") {
//         $lockButton7.attr("src", "assets/padlock.png")
//     }

//     $userInputRow8.text(JSON.parse(localStorage.getItem("inputArray8")))
//     if ($userInputRow8.text !== "") {
//         $lockButton8.attr("src", "assets/padlock.png")
//     }

//     $userInputRow9.text(JSON.parse(localStorage.getItem("inputArray9")))
//     if ($userInputRow9.text !== "") {
//         $lockButton9.attr("src", "assets/padlock.png")
//     }
// }



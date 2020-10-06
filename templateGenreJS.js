let displayedVideo = document.querySelector("#displayedVideo");

let firstVideo =  document.querySelector("#firstVideoToDisplay");
let secondVideo =  document.querySelector("#secondVideoToDisplay");
let thirdVideo =  document.querySelector("#thirdVideoToDisplay");

let urlFirst = "https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG";
let urlSecond = "https://www.youtube.com/embed/6yCIDkFI7ew";
let urlThird = "https://www.youtube.com/embed/N0zOkMBk7ik";

function showFirstVideo()
{
    displayedVideo.src = urlFirst;
    firstVideo.style.fontWeight = "bold";
    secondVideo.style.fontWeight = "normal";
    thirdVideo.style.fontWeight = "normal";
}

firstVideo.addEventListener("click", showFirstVideo);

function showSecondVideo()
{
    displayedVideo.src = urlSecond;
    firstVideo.style.fontWeight = "normal";
    secondVideo.style.fontWeight = "bold";
    thirdVideo.style.fontWeight = "normal";
}

secondVideo.addEventListener("click", showSecondVideo);

function showThirdVideo()
{
    displayedVideo.src = urlThird;
    firstVideo.style.fontWeight = "normal";
    secondVideo.style.fontWeight = "normal";
    thirdVideo.style.fontWeight = "bold";
}

thirdVideo.addEventListener("click", showThirdVideo);
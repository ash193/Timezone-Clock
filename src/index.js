let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM     Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

let njElement = document.querySelector("#new-jersey");
let njDateElement = njElement.querySelector(".date");
let njTimeElement = njElement.querySelector(".time");
let njTime = moment().tz("Europe/Paris");

njElement.innerHTML = njTime.format("MMMM Do YYYY");
njElement.innerHTML = njTime.format("h:mm:ss [<small>]A[</small>]");

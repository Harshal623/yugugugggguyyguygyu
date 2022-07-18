var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    if (Content=="selfie"){
        speak();
    }
    if(Content=="mirror"){
        lalala();
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    setTimeout(function () {
        img_id = "selfie1"
        takesnapshot()
        speak_data = "taking your selfie in 5 seconds"
        var utter = new SpeechSynthesisUtterance(speak_data)
        synth.speak(utterThis)
        save()
    }, 5000);
    setTimeout(function () {
        img_id = "selfie2"
        takesnapshot()
        speak_data = "taking your selfie in 5 seconds"
        var utter = new SpeechSynthesisUtterance(speak_data)
        synth.speak(utterThis)
        save()
    }, 10000);
    setTimeout(function () {
        img_id = "selfie3"
        takesnapshot()
        speak_data = "taking your selfie in 5 seconds"
        var utter = new SpeechSynthesisUtterance(speak_data)
        synth.speak(utterThis)
        save()
    }, 15000);

}
function lalala(){
    Webcam.attach(camera);
}
function takesnapshot() {
    console.log(img_id)

    Webcam.snap(function (Data_url) {
        if (img_id == "selfie1") {
            document.getElementById("result1").innerHTML = "<img id = 'img_id' src = '" + Data_url + "'>"
        };
        if (img_id == "selfie2") {
            document.getElementById("result2").innerHTML = "<img id = 'img_id' src = '" + Data_url + "'>"
        };
        if (img_id == "selfie3") {
            document.getElementById("result3").innerHTML = "<img id = 'img_id' src = '" + Data_url + "'>"
        };

    });
}
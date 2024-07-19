var SpeechRecognition = window.webkitSpeechRecognition;

 var recognition = new SpeechRecognition();


function start()
{
document.getElementById("textbox").innerHTML = "";
    
    recognition.start();
}


recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    

    document.getElementById("textbox").innerHTML =  Content;
   speak();

   console.log(Content);
}

function speak(){
    var synth = window.speachSynthesis;

    speak_data = document.getElementById("textbox").value;
   

    var utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camara);
}


WebCam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camara = document.getElementById("camera");

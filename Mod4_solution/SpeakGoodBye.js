(function(window) {
    var byeSpeaker = new Object();
    var speakGoodBye = "Good Bye";
    byeSpeaker.speak = function speak(name) {
        console.log(speakGoodBye + " " + name);
    };

    window.byeSpeaker = byeSpeaker;
    
})(window);
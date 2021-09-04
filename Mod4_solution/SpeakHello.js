(function(window) {
    var helloSpeaker = new Object();
    var speakHello = "Hello";
    helloSpeaker.speak = function (name) {
        console.log(speakHello + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);
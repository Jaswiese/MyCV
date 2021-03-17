$(document).ready(function(){






/* typewriter - introduction */

/* typewrite library called
variable typeApp initialised using the element wiht the ID typing-welcome
library function called by parsing in the typeApp variable and selecting the loop option
the typewriter function is then called usign the "typeString library function with the starting string
- the animation is then paused for 2500 miliseconds and then 13 characters is deleted. 
-Another typestring is called where after it is paused forma further 2500 miliseconds and 13 characters is removed
-paused for 2500 miliseconds and then the loop is restarted. */


var typeApp = document.getElementById('typing-welcome');

var typewriter = new Typewriter(typeApp, {
    loop: true
});

typewriter.typeString('"Hello, I am Jasper a developer."')
    .pauseFor(2500)
    .deleteChars(13)
    .typeString(' an analyst."')
    .pauseFor(2500)
    .deleteChars(13)
    .typeString('an innovator."')
    .pauseFor(2500)
    .start();

});
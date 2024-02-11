function openNewPage(directedpage) {
    window.open(directedpage, '_self');
  }
// Function to load Howler.js asynchronously
function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  script.onload = callback;
  document.body.appendChild(script);
}

// Load Howler.js and start playing music when it's loaded
loadScript("https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js", function() {
  var sound = new Howl({
      src: ['Harry-Potter-Theme.mp3'], // Replace with the path to your audio file
      autoplay: true, // Autoplay the audio
      loop: true, // Loop the audio
      volume: 0.5 // Adjust volume as needed
  });
});
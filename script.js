var button1 = document.getElementById("no");
var button2 = document.getElementById("maybe");
var button3 = document.getElementById("yes");

button1.addEventListener("click", function() {
    var randomX = Math.floor(Math.random() * (window.innerWidth - this.offsetWidth));
    var randomY = Math.floor(Math.random() * (window.innerHeight - this.offsetHeight));
    this.style.position = "absolute";
    this.style.transition = "all 0.5s ease"; // Add smooth transition
    this.style.left = randomX + "px";
    this.style.top = randomY + "px";
    this.disabled = true; // Disable the button after the first click
    this.addEventListener("mouseover", function() {
        var hoverX = Math.floor(Math.random() * (window.innerWidth - this.offsetWidth));
        var hoverY = Math.floor(Math.random() * (window.innerHeight - this.offsetHeight));
        this.style.left = hoverX + "px";
        this.style.top = hoverY + "px";
    });
});
button2.addEventListener("click", function() {
    var randomX = Math.floor(Math.random() * (window.innerWidth - this.offsetWidth));
    var randomY = Math.floor(Math.random() * (window.innerHeight - this.offsetHeight));
    this.style.position = "absolute";
    this.style.transition = "all 0.5s ease"; // Add smooth transition
    this.style.left = randomX + "px";
    this.style.top = randomY + "px";
    this.disabled = true; // Disable the button after the first click
    this.addEventListener("mouseover", function() {
        var hoverX = Math.floor(Math.random() * (window.innerWidth - this.offsetWidth));
        var hoverY = Math.floor(Math.random() * (window.innerHeight - this.offsetHeight));
        this.style.left = hoverX + "px";
        this.style.top = hoverY + "px";
    });
});
button3.addEventListener("click", function() {
    window.location.href = "video.html"; // Redirect to a new page
});


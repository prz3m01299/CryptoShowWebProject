
console.log("index.js");
function update() {

    // alert('Hello');
}

window.addEventListener("load", (e) => {
    update();
    console.log("Page loaded");
    setInterval(update, 1000);
})

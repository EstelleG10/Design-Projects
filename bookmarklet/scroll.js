//  examples of bookmarklets

// document.querySelectorAll("a").forEach(link => {
//     link.style.filter = "blur(5px)";
//     link.style.fontSize = "100px";

// })


// window.addEventListener("wheel", (event) => {
//     event.preventDefault
//     window.scrollBy({ 
//         top: event.deltaY * 0.05,
//         behavior: "smooth",
//      });
// }, {passive: false});


document.querySelectorAll("p").forEach(p => {
    p.style.backgroundColor = "black";
    p.style.color = "black";
    p.addEventListener("click", (event) => {
        p.style.backgroundColor = "white"
        p.style.color = "black";
    });
});
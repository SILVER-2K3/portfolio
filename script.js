//<--Setup and start animation! -->

var typed = new Typed("#element", {
  strings: ["Python", "Java", "DBMS", "Ethical hacking", "Full stack"],
  typeSpeed: 60,
  loop: true,
});

var typed = new Typed("#secondary", {
  strings: ["Sahil Balchandani"],
  typeSpeed: 40,
});

//<-- custom cursor-->

let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};


document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

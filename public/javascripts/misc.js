document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("#loader").style.visibility = "visible";
        document.querySelector("#loader-background").style.visibility = "visible";
    } else {
        setTimeout(() => {
            document.querySelector("#loader").style.display = "none";
            document.querySelector("#loader-background").style.display = "none";
        }, 500);
        
    }
};

function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    if (entry.isIntersecting == true) {
        entry.target.classList.add("AfterScroll");
    } else {
        entry.target.classList.remove("AfterScroll");
    }
  });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
  };

let observer = new IntersectionObserver(callbackFunc, options);

document.querySelectorAll("#LoadOnScroll").forEach(element => {
    observer.observe(element)
});

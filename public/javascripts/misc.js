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
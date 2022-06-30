//functions
cursor = () => {
    var cursor = document.getElementById("cursor");

    document.onmousemove = function(e) {
        cursor.style.left = (e.pageX - 40) + "px";
        cursor.style.top = (e.pageY - 40) + "px";
        cursor.style.display = "block";
    }
}









//calling the functions
cursor();
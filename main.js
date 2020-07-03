$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#bttop').fadeIn();
        } else {
            $('#bttop').fadeOut();
        }
    });

    $("#bttop").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
})

function grid() {
    var x = document.getElementsByClassName("blogPosts");
    var y = document.getElementsByClassName("postimg");
    x[0].style.gridTemplateColumns = "repeat(auto-fit, minmax(500px, 1fr))";
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = "";
    }

    var z = document.getElementsByClassName("post");
    for (var j = 0; j < z.length; j++) {
        z[j].style.border = "none";
        z[j].style.padding = "";
    }
}

function list() {
    var x = document.getElementsByClassName("blogPosts");
    var y = document.getElementsByClassName("postimg");
    x[0].style.gridTemplateColumns = "repeat(1, minmax(100%, 1fr))";
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }

    var z = document.getElementsByClassName("post");
    for (var j = 0; j < z.length; j++) {
        // z[j].style.borderRadius = "10px";
        z[j].style.borderLeftStyle = "solid";
        z[j].style.borderLeftColor = "white";
        z[j].style.padding = "10px";
        z[j].style.maxWidth = "100ch";
    }
}

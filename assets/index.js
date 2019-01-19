function ScrollToDiv (e) {
    var div = document.getElementsByClassName (e)[0];
    div.scrollIntoView ({behavior: "smooth"});
}
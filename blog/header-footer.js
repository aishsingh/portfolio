function resizeHeader() {
    // change format for mobile
    if ($(this).width() < 640) {
        document.getElementById("header-contacts").style.textAlign = "center";
        document.getElementById("header-logo").style.display = "none";
    }
    else {
        document.getElementById("header-contacts").style.textAlign = "right";
        document.getElementById("header-logo").style.display = "inline";
    }
}

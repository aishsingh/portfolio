// dim cards on mouse hover
$('.special.cards .image').dimmer({ on: 'hover' });

function resizePage() {
    // change format for mobile
    if ($(this).width() < 640) {
        document.getElementById("headercontacts").innerHTML = 
            "<a href='mailto:contact@aishsingh.io'><i class='at icon'></i></a> \
             <a href='http://github.com/aishsingh'><i class='github icon'></i></a> \
             <a href='http://bitbucket.com/aishsingh'><i class='bitbucket icon'></i></a> \
             <a href='http://stackoverflow.com/users/3270542/aish'><i class='stack overflow icon'></i></a>";

         $("#headercontacts").css("text-align", "center");
    }
    else {
        document.getElementById("headercontacts").innerHTML =
            "<a href='mailto:contact@aishsingh.io'><small>contact@aishsingh.io</small></a> \
             <br/> \
             <a href='http://github.com/aishsingh'><i class='github icon'></i></a> \
             <a href='http://bitbucket.com/aishsingh'><i class='bitbucket icon'></i></a> \
             <a href='http://stackoverflow.com/users/3270542/aish'><i class='stack overflow icon'></i></a>";

         $("#headercontacts").css("text-align", "right");
    }
}

function init() {
    resizePage();
}

window.onload = init;
window.onresize = resizePage;

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

    // dim cards on mouse hover
    $('.special.cards .image').dimmer({ on: 'hover' });

    // laod images then fade in
    $('#projectpreview').each(function(){
        $(this).attr('src', $(this).attr('data-delayedsrc')).load(function() {
            $('.ui.active.loader').prev().remove();
            $(this).prev().prev().fadeOut();
            $(this).prev().prev().prev().remove();  // this is a temp div used to expand the card
            $(this).fadeIn(1000);
        }); 
    });
}

window.onload = init;
window.onresize = resizePage;

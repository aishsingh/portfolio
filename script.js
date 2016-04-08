function resizePage() {
    // change format for mobile
    if ($(this).width() < 640) {
        document.getElementById("headercontacts").innerHTML = 
            "<a href='mailto:contact@aishsingh.com'><i class='at icon'></i></a> \
             <a href='http://twitter.com/aishsingh_'><i class='twitter icon'></i></a> \
             <a href='http://github.com/aishsingh'><i class='github icon'></i></a> \
             <a href='http://stackoverflow.com/users/3270542/aish'><i class='stack overflow icon'></i></a>";

         $("#headercontacts").css("text-align", "center");

         $('#awards').each(function(){
             $(this).html("<i class='trophy icon'></i> x1");
         });
    }
    else {
        document.getElementById("headercontacts").innerHTML =
            "<a href='mailto:contact@aishsingh.com'><small>contact@aishsingh.com</small></a> \
             <br/> \
             <a href='http://twitter.com/aishsingh_'><i class='twitter icon'></i></a> \
             <a href='http://github.com/aishsingh'><i class='github icon'></i></a> \
             <a href='http://stackoverflow.com/users/3270542/aish'><i class='stack overflow icon'></i></a>";

         $("#headercontacts").css("text-align", "right");

         $('#awards').each(function(){
             $(this).html("<i class='trophy icon'></i> " + "Victorian Government Data Challenge Winner");
         });
    }
}

function init() {
    resizePage();

    // dim cards on mouse hover
    $('.special.cards .image').dimmer({ on: 'hover' });

    // preload images then fade in
    $('img#tempexpand').each(function(){
        var preview = $(this).next().next().next();
        var loader = $(this).next();
        $(this).attr('src', preview.attr('data-delayedsrc')).load(function() {
            // preview.css('background', 'url('+ preview.attr('data-delayedsrc') + ') center center');
            preview.attr('src', preview.attr('data-delayedsrc'));
            loader.fadeOut();
            loader.remove();
            $(this).remove();
            preview.fadeIn(1000);
        });
    });
}

window.onload = init;
window.onresize = resizePage;

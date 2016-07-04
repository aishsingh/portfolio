function resizePage() {
    resizeHeader();

    Processing.getInstanceById('diagram-1').resize($("#post").width());
    Processing.getInstanceById('diagram-2').resize($("#post").width());
}

function init() {
    resizePage();

    // Show/Hide diagram details depending on where the mouse is
    document.getElementById('diagram-1').addEventListener("mouseout", function() {
        Processing.getInstanceById('diagram-1').mouseOut();
    }, false);
    document.getElementById('diagram-1').addEventListener("mouseover", function() {
        Processing.getInstanceById('diagram-1').mouseIn();
    }, false);

    document.getElementById('diagram-2').addEventListener("mouseout", function() {
        Processing.getInstanceById('diagram-2').mouseOut();
    }, false);
    document.getElementById('diagram-2').addEventListener("mouseover", function() {
        Processing.getInstanceById('diagram-2').mouseIn();
    }, false);


    $("#add-vert").click(function() {Processing.getInstanceById('diagram-2').addVert();});
    $("#remove-vert").click(function() {Processing.getInstanceById('diagram-2').removeVert();});
}

window.onload = init;
window.onresize = resizePage;

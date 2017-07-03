export function init() {
    alert("This works! :-)");
    exposeGlobally();
}

function exposeGlobally() {
    window.functionToExpose = functionToExpose;
}

function functionToExpose() {
    alert("exposed");
}

function testjQueryUIDialog() {
    $("#content").dialog({
        resizable: true,
        autoOpen: false,
        modal: true,
        width: 500,
        title: 'Application details',
        buttons: {
            Ok() {
                $(this).dialog("close");
            }
        },
        open(event, ui) {
            $(this).html("I am a dialog!");
        }
    }).dialog("open");
}
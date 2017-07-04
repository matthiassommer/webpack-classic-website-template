import "./styles.css";
const testTemplate = require("./test-template.hbs");

export function init() {
    testjQueryUIDialog();
    exposeGlobally();
    window.functionToExpose();
}

/**
 * Expose modules, variables, or methods for other librariees via the browser's window object.
 */
function exposeGlobally() {
    window.functionToExpose = functionToExpose;
}

function functionToExpose() {
    const template = testTemplate({ text: "Expose Handlebars template!" });
    alert($(template));
}

/**
 * Example how jQuery UI can be used.
 */
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
            $(this).html("<i class='fa fa-check'></i>" + "Congratulations! You're setup is successful :-)");
        }
    }).dialog("open");
}
/* ***** jQuery Funcions *****/

// CREATE AN HTML ELEMENT
function jqCreateHtmlElement(element){
            let button = $("<button>Button</button>");
            $(element).append(button);
        };

// REMOVE AN HTML ELEMENT
function jqRemoveHtmlElement(element){
    $(element).children(':first').remove();
};

// APPEND AN HTML ELEMENT
function jqAppendHtmlElement(element){
    $(element).append("<div class='new-element'>Another div appended!</div>");
};
// PREPEND AN HTML ELEMENT
function jqPrependHtmlElement(element){
    $(element).prepend("<p>Another div prepended!</p>");
};

// CREATE AND ADD AN HTML ELEMENT AFTER ANOTHER ELEMENT
function jqAddAfterHtmlElement(element){
    const p = $( '<p><b>Added after the target element!</b></p>' );
    $(element).children(':first').after(p);
};
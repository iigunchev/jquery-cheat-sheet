let cardsContent = [
    {
        id: 'fun-01',
        type: 'Functions',
        title: 'Create an HTML element',
        jsCode: `const btn = document.createElement("button");`,
        jqCode: `<code>const btn = $("&#60;button&#62; Button &#60;/button&#62;");</code>`,
        jsTest: function(element){
            jsCreateHtmlElement(element);
        },
        jqTest: function(element){
            jqCreateHtmlElement(element)
        },
        jsTestText: '',
        jqTestText: '',       
    },
    {
        id: 'fun-02',
        type: 'Functions',
        title: 'Remove an HTML element',
        jsCode: `
        <code>div.parentNode.removeChild(div);</code>
        <code>div.removeChild(div.lastChild);</code>       
        <code>div.remove();</code>`,
        jqCode: `<code>$( "div" ).remove();</code>
        <code>$( "div" ).remove( ":contains('Hit')" );</code>`,
        jsTest: function(element){
            jsRemoveHtmlElement(element);
        },
        jqTest: function(element){
            jqRemoveHtmlElement(element)
        },
        jsTestText: '<div>Hit the button to remove the element</div>',
        jqTestText: '<div>Hit the button to remove the element</div>',          
    },
    {
        id: 'fun-03',
        type: 'Functions',
        title: 'Append an HTML element',
        jsCode: '<code>div.appendChild(div);</code>',
        jqCode: '$( "div" ).append( "div" )',
        jsTest: function(element){
            jsAppendHtmlElement(element);
        },
        jqTest: function(element){
            jqAppendHtmlElement(element)
        },
        jsTestText: '<div class="test-div">This is a div</div>',
        jqTestText: '<div class="test-div">This is a div</div>',          
    },
    {
        id: 'fun-04',
        type: 'Functions',
        title: 'Prepend an HTML element',
        jsCode: '<code>parentNode.insertBefore(newChild, parentNode.firstChild);</code>',
        jqCode: `<code>$("div").prepend("&#60;p&#62;Another div prepended!&#60;/p&#62;");</code>
        <code>$("div").prepend($("#other-element"));</code>
        <code>$("div").prepend(variable);</code>`,
        jsTest: function(element){
            jsPrependHtmlElement(element);
        },
        jqTest: function(element){
            jqPrependHtmlElement(element)
        },
        jsTestText: '<div>This is a div</div>',
        jqTestText: '<div>This is a div</div>',          
    },
    {
        id: 'fun-05',
        type: 'Functions',
        title: 'Create and add an HTML element after another element',
        jsCode: `<code>const p = document.createElement('p');</code>
        <code>p.innerHTML = 'Added after the target element!';</code>
        <code>element.firstChild.insertAdjacentElement('afterend', p);</code>`,
        jqCode: `<code>const p = $( "&#60;p&#62;Added after the target element!&#60;/p&#62;" );</code>
        <code>$("div").children( ':first' ).after(p);</code>`,
        jsTest: function(element){
            jsAddAfterHtmlElement(element);
        },
        jqTest: function(element){
            jqAddAfterHtmlElement(element)
        },
        jsTestText: '<div>Add an element below.</div><div>Another div.</div>',
        jqTestText: '<div>Add an element below.</div><div>Another div.</div>',          
    },
];
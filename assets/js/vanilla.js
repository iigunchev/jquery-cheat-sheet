// import { jqCreateHtmlElement, jqRemoveHtmlElement, jqAppendHtmlElement, jqPrependHtmlElement } from '/assets/js/jquery.js';

const body = document.querySelector('body');
const cards = document.querySelectorAll('.card');
const allBtn = document.querySelector('#all-btn');
const functionsBtn = document.querySelector('#functions-btn');
const selectorsBtn = document.querySelector('#selectors-btn');
const eventsBtn = document.querySelector('#events-btn');
const buttons = document.querySelectorAll('button');
const comparisonContainer = document.querySelector('.comparison-container');
const blackBg = document.querySelector('.black-bg');

let cardObj = {};
const htmlElements =["a",
"abbr",
"acronym",
"address",
"applet",
"area",
"article",
"aside",
"audio",
"b",
"base",
"basefont",
"bdi",
"bdo",
"bgsound",
"big",
"blink",
"blockquote",
"body",
"br",
"button",
"canvas",
"caption",
"center",
"cite",
"code",
"col",
"colgroup",
"content",
"data",
"datalist",
"dd",
"decorator",
"del",
"details",
"dfn",
"dir",
"div",
"dl",
"dt",
"element",
"em",
"embed",
"fieldset",
"figcaption",
"figure",
"font",
"footer",
"form",
"frame",
"frameset",
"h1",
"h2",
"h3",
"h4",
"h5",
"h6",
"head",
"header",
"hgroup",
"hr",
"html",
"i",
"iframe",
"img",
"input",
"ins",
"isindex",
"kbd",
"keygen",
"label",
"legend",
"li",
"link",
"listing",
"main",
"map",
"mark",
"marquee",
"menu",
"menuitem",
"meta",
"meter",
"nav",
"nobr",
"noframes",
"noscript",
"object",
"ol",
"optgroup",
"option",
"output",
"p",
"param",
"plaintext",
"pre",
"progress",
"q",
"rp",
"rt",
"ruby",
"s",
"samp",
"script",
"section",
"select",
"shadow",
"small",
"source",
"spacer",
"span",
"strike",
"strong",
"style",
"sub",
"summary",
"sup",
"table",
"tbody",
"td",
"template",
"textarea",
"tfoot",
"th",
"thead",
"time",
"title",
"tr",
"track",
"tt",
"u",
"ul",
"var",
"video",
"wbr",
"xmp"];
const jsVariables = ['let', 'const', 'var'];
const jsMethods = ['createElement', 'removeChild', 'remove', 'appendChild', 'insertBefore', 'append', 'prepend', 'createElement', 'insertAdjacentElement', 'innerHTML', 'after'];
const jsSelectors = ['document', 'parentNode', 'firstChild', 'lastChild', 'children' ];
const jsOther = ['afterend', 'first', 'element', 'contains'];


cards.forEach(card => {
    card.addEventListener('click', () =>{
        const cardId = card.getAttribute('data-id');
        cardObj = cardsContent.filter(element => element.id === cardId);
        // card.classList.toggle('full-size');
        $('.black-bg').fadeIn(300);
        createComparison(body)
        $('.centered').fadeIn(200)
    })
})
// Buttons
function seeAllBtns() {
    cards.forEach(card => {
        card.style.display = 'block';
    });
}
allBtn.addEventListener('click', () =>{
    seeAllBtns();
})
functionsBtn.addEventListener('click', () =>{
    seeAllBtns();
    cards.forEach(card => {
        if (!card.innerText.includes('Functions')) {
            card.style.display = 'none';
        }
    })
})
selectorsBtn.addEventListener('click', () =>{
    seeAllBtns();
    cards.forEach(card => {
        if (!card.innerText.includes('Selectors')) {
            card.style.display = 'none';
        }
    })
})
eventsBtn.addEventListener('click', () =>{
    seeAllBtns();
    cards.forEach(card => {
        if (!card.innerText.includes('Events')) {
            card.style.display = 'none';
        }
    })
})

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        buttons.forEach(button => {
            button.classList.remove('clicked');
        })
        button.classList.add('clicked');
    })
})

// Add modal info
function createComparison(element){
    const infoContainer = document.createElement('div');
    const leftCol = document.createElement('div');
    const rightCol = document.createElement('div');
    infoContainer.classList.add('flex-column');
    infoContainer.classList.add('centered');
    leftCol.classList.add('info-card');
    rightCol.classList.add('info-card');
    infoContainer.appendChild(leftCol);
    infoContainer.appendChild(rightCol);
    const leftTitle = document.createElement('div');
    const rightTitle = document.createElement('div');
    leftTitle.classList.add('info-header');
    rightTitle.classList.add('info-header');
    leftTitle.innerHTML = '<img src="/assets/img/javascript-logo.png" alt="javascript logo" width=40"><h2>JavaScript</h2>';
    rightTitle.innerHTML = '<img src="/assets/img/jquery-logo.png" alt="jquery logo" width="40"><h2>jQuery</h2>';
    let leftCode = document.createElement('code');
    let rightCode = document.createElement('code');
    leftCode.classList.add('code-snippet');
    rightCode.classList.add('code-snippet');
    let jsSnippet = codeSnippetFormatter(cardObj[0].jsCode);
    let jqSnippet = codeSnippetFormatter(cardObj[0].jqCode);
    leftCode.innerHTML = jsSnippet;
    rightCode.innerHTML = jqSnippet;
    leftCol.appendChild(leftTitle);
    leftCol.appendChild(leftCode);
    rightCol.appendChild(rightTitle);
    rightCol.appendChild(rightCode);
    const jsTryBtn = document.createElement('button');
    const jqTryBtn = document.createElement('button');
    jsTryBtn.innerText = 'Try it yourself';
    jqTryBtn.innerText = 'Try it yourself';
    leftCol.appendChild(jsTryBtn);
    rightCol.appendChild(jqTryBtn);
    const leftTestArea = document.createElement('div');
    const rightTestArea = document.createElement('div');
    leftTestArea.classList.add('js-test-area');
    rightTestArea.classList.add('jq-test-area');
    leftTestArea.innerHTML = cardObj[0].jsTestText;;
    rightTestArea.innerHTML = cardObj[0].jqTestText;;
    leftCol.appendChild(leftTestArea);
    rightCol.appendChild(rightTestArea);
    jsTryBtn.onclick = () => {
        cardObj[0].jsTest(leftTestArea);
    }
    jqTryBtn.onclick = () => {
        cardObj[0].jqTest(rightTestArea);
    }
    const closeModal = document.createElement('div');
    closeModal.className = 'close-div';
    closeModal.innerHTML = `<span class='close'>Close</span>`;
    element.appendChild(infoContainer);
    $('.info-container').fadeIn('slow')
    infoContainer.insertAdjacentElement('afterbegin', closeModal);
    $('.close').on('click', ()=>{
        $('.centered').fadeOut(300);
        $('.black-bg').fadeOut(300)
    })
}

function codeSnippetFormatter(string) {
    const words = string.match(/\w+/g);
    let formattedCode = string;
    words.forEach(word => {
        // if (htmlElements.includes(word)) {
        //     formattedCode = formattedCode.replace(word, `<span style='color:#f39c12'>${word}</span>`);
        if (jsVariables.includes(word)) {
            formattedCode = formattedCode.replaceAll(word, `<span style='color:#702fa8'>${word}</span>`);
        } else if (jsMethods.includes(word)) {
            formattedCode = formattedCode.replaceAll(word, `<span style='color:#0e83cd'>${word}</span>`);
        } else if (jsSelectors.includes(word)) {
            formattedCode = formattedCode.replaceAll(word, `<span style='color:#f39c12'>${word}</span>`);
        } else if(jsOther.includes(word)) {
            formattedCode = formattedCode.replaceAll(word, `<span style='color:#64bb5d'>${word}</span>`)
        }
        // } else if(jQueryMethods.includes(word)){
        //     formattedCode = formattedCode.replace(word, `<span style='color:#16a085'>${word}</span>`);
        // }
    })
    return formattedCode;
}

/* ***** JavaScript Funcions *****/

// CREATE AN HTML ELEMENT
function jsCreateHtmlElement(element){
    let btn = document.createElement("button");
    btn.innerText = 'Button';
    element.appendChild(btn)
};

// REMOVE AN HTML ELEMENT
function jsRemoveHtmlElement(element){
    element.firstChild.remove();
};

// APPEND AN HTML ELEMENT
function jsAppendHtmlElement(element){
    const p = document.createElement('p');
    p.innerHTML = 'Another div appended!'
    element.firstChild.appendChild(p);
};

// PREPEND AN HTML ELEMENT
function jsPrependHtmlElement(element){
    const p = document.createElement('p');
    p.innerHTML = 'Another div prepended!'
    element.insertBefore(p, element.firstChild);
};

// CREATE AND ADD AN HTML ELEMENT AFTER ANOTHER ELEMENT
function jsAddAfterHtmlElement(element){
    const p = document.createElement('p');
    p.innerHTML = 'Added after the target element!';
    element.firstChild.insertAdjacentElement('afterend', p);
};


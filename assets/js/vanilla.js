const body = document.querySelector('body');
const cards = document.querySelectorAll('.card');
const allBtn = document.querySelector('#all-btn');
const functionsBtn = document.querySelector('#functions-btn');
const selectorsBtn = document.querySelector('#selectors-btn');
const eventsBtn = document.querySelector('#events-btn');
const buttons = document.querySelectorAll('button');
const comparisonContainer = document.querySelector('.comparison-container');
const blackBg = document.querySelector('.black-bg');
const addCard = document.querySelector('.addCard');

let cardObj = {};
const htmlElements =[
"article",
// "aside",
// "audio",
// "b",
// "base",
// "basefont",
// "bdi",
// "bdo",
// "bgsound",
// "big",
// "blink",
// "blockquote",
// "body",
// "br",
// "button",
// "canvas",
// "caption",
// "center",
// "cite",
// "code",
// "col",
// "colgroup",
// "content",
// "data",
// "datalist",
// "dd",
// "decorator",
// "del",
// "details",
// "dfn",
// "dir",
"div",
// "dl",
// "dt",
// "element",
// "em",
// "embed",
// "fieldset",
// "figcaption",
// "figure",
// "font",
// "footer",
// "form",
// "frame",
// "frameset",
"h1",
"h2",
"h3",
"h4",
"h5",
"h6",
// "head",
// "header",
// "hgroup",
// "hr",
// "html",
// "i",
// "iframe",
// "img",
// "input",
// "ins",
// "isindex",
// "kbd",
// "keygen",
// "label",
// "legend",
// "li",
// "link",
// "listing",
// "main",
// "map",
// "mark",
// "marquee",
// "menu",
// "menuitem",
// "meta",
// "meter",
// "nav",
// "nobr",
// "noframes",
// "noscript",
// "object",
// "ol",
// "optgroup",
// "option",
// "output",
// "p",
// "param",
// "plaintext",
// "pre",
// "progress",
// "q",
// "rp",
// "rt",
// "ruby",
// "s",
// "samp",
// "script",
// "section",
// "select",
// "shadow",
// "small",
// "source",
// "spacer",
// "span",
// "strike",
// "strong",
// "style",
// "sub",
// "summary",
// "sup",
// "table",
// "tbody",
// "td",
// "template",
// "textarea",
// "tfoot",
// "th",
// "thead",
// "time",
// "title",
// "tr",
// "track",
// "tt",
// "u",
// "ul",
// "var",
"video",
"wbr",
"xmp"];
const jsVariables = ['let', 'const', 'var'];
const jsMethods = ['createElement', 'removeChild', 'remove', 'appendChild', 'insertBefore', 'append', 'prepend', 'createElement', 'insertAdjacentElement', 'innerHTML', 'length', 'innerText', 'text', 'function'];
const jsSelectors = ['parentNode', 'children', 'querySelectorAll', 'classList', 'listItem', 'each'];
const jsOther = ['afterend', 'first', 'element', 'contains', 'firstChild', 'lastChild', 'document'];

initButtons();

// Buttons
function initButtons() {
    cards.forEach(card => {
        card.addEventListener('click', () =>{
            const cardId = card.getAttribute('data-id');
            cardObj = cardsContent.filter(element => element.id === cardId);
            // card.classList.toggle('full-size');
            $('.black-bg').fadeIn(300);
            createComparison(body)
            $('.centered').fadeIn(150)
            
        })
    })

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
}

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
    $(jsTryBtn).one('click', () => {
        cardObj[0].jsTest(leftTestArea);
    }); 
    $(jqTryBtn).one('click', () => {
        cardObj[0].jqTest(rightTestArea);
    }); 
    const closeModal = document.createElement('div');
    closeModal.className = 'close-div';
    closeModal.innerHTML = `<span class='close'>Close</span>`;
    element.appendChild(infoContainer);
    $('.info-container').fadeIn('slow')
    infoContainer.insertAdjacentElement('afterbegin', closeModal);
    $('.close').on('click', ()=>{
        $('.centered').fadeOut(200);
        $('.centered').remove();
        $('.black-bg').fadeOut(200)
    })
}

function codeSnippetFormatter(codeString) {
    const words = codeString.match(/\w+/g);
    // const tags = codeString.match(/<\/?[a-zA-Z0-9]+(>)/g);
    let formattedCode = codeString;

    // tags.forEach(tag => {
    //     console.log(tag)
    //     if (tag === '<code>' || tag === '</code>') return;
    //     formattedCode = formattedCode.replaceAll(tag, `<span style='color:#f39c12'>${tag}</span>`);
    // })
    
    words.forEach(word => {
        let color = ""
        // if (htmlElements.includes(word)) {
        //     formattedCode = formattedCode.replace(word, `<span style='color:#f39c12'>${word}</span>`);
        if (jsVariables.includes(word)) color = "#c0392b"
        else if (jsMethods.includes(word)) color = "#0e83cd"
        else if (jsSelectors.includes(word)) color = "#f39c12"
        else if(jsOther.includes(word)) color = "#64bb5d"
        else if(htmlElements.includes(word)) color = "#f39c12"
        
        if(color !== "") formattedCode = formattedCode.replaceAll(word, `<span style='color:${color}'>${word}</span>`);
    })
    return formattedCode;
}
let newItem;
const submitBtn = document.querySelector('#submit');
addCard.addEventListener('click', addCardModal);
submitBtn.addEventListener('click', () =>{
    // event.preventDefault();
    let newCard = new Object();
    newCard.id = 'fun-06';
    newCard.type = $('#type').val();
    newCard.title = $('#title').val();
    newCard.jsCode = $('#jsCode').val();
    newCard.jqCode = $('#jqCode').val();
    newCard.jsTest = $('#jsFunction').val();
    newCard.jqTest = $('#jqFunction').val();
    newCard.jsTestText = $('#js-Test-Area').val();
    newCard.jqTestText = $('#jq-Test-Area').val();
    localStorage.setItem('newItem', JSON.stringify(newCard));
    $('.card-form').css('display', 'none');
    $('.black-bg').fadeOut(150);
    createNewCardElement(JSON.parse(localStorage.getItem('newItem')))
})

function createNewCardElement(element) {
    let div = document.createElement('div');
    div.classList.add('card');
    div.setAttribute('data-id', element.id);
    let h2 = document.createElement('h2');
    h2.innerText = element.type;
    let h1 = document.createElement('h1');
    h1.innerText = element.title;
    div.appendChild(h2);
    div.appendChild(h1);
    document.querySelector('.grid-container').insertBefore(div, document.querySelector('.grid-container').firstChild);
    initButtons();

}

function addCardModal() {
    // const inputContainer = $( '<div class="input-container"></div>');
        $('.card-form').css('display', 'grid');
        $('.black-bg').fadeIn(300);

}

$('.search-icon').on('click', () => {
    let searchText = $('#search').val();
    cards.forEach(card => {
        if (!card.innerText.toLowerCase().includes(searchText)) {
            card.style.display = 'none';
        } 
    })
})
$('#search').on('keyup', function (e) {
    if (e.keyCode === 8){
        event.preventDefault();
        $('#search').val().slice(0, -1);
        $('.search-icon').click();
    } else {
        event.preventDefault();
        $('.search-icon').click();
    }
});

$('#cancel').on('click', () => {
    $('.card-form').css('display', 'none');
    $('.black-bg').fadeOut(150);
})


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
    p.classList.add('new-element')
    element.appendChild(p);
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

// ITERATE A COLLECTION OF ELEMENTS
function jsIterateCollectionOfElements(element){
    let listItem = document.querySelectorAll("ul li");
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].classList.add("crossed");
        }
}

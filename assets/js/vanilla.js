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

let cardsContent = [
    {
        id: 'fun-01',
        type: 'Functions',
        title: 'Create an HTML element',
        jsCode: 'const btn = document.createElement("button");',
        jqCode: 'const btn = $("&#60;button&#62; button &#60;/button&#62;");',
        jsTest: function(element){
            btn = document.createElement("button");
            btn.innerText = 'Button';
            element.appendChild(btn);
        },
        jqTest: function(element){
            let button = $("<button>Button</button>");
            $(element).append(button);
        },
    }
];

cards.forEach(card => {
    card.addEventListener('click', () =>{
        const cardId = card.getAttribute('data-id');
        cardObj = cardsContent.filter(element => element.id === cardId);
        // card.classList.toggle('full-size');
        blackBg.style.display = 'block';
        setTimeout(() => {
            createComparison(body)
        }, 250)
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
    // leftCol.classList.add('flex-column');
    leftCol.classList.add('info-card');
    // rightCol.classList.add('flex-column');
    rightCol.classList.add('info-card');
    infoContainer.appendChild(leftCol);
    infoContainer.appendChild(rightCol);
    const leftTitle = document.createElement('h2');
    const rightTitle = document.createElement('h2');
    leftTitle.classList.add('info-header');
    rightTitle.classList.add('info-header');
    leftTitle.innerHTML = '<img src="/assets/img/javascript-logo.png" alt="javascript logo" width=40"> JavaScript';
    rightTitle.innerHTML = '<img src="/assets/img/jquery-logo.png" alt="jquery logo" width="50"> Jquery';
    let leftCode = document.createElement('code');
    let rightCode = document.createElement('code');
    leftCode.classList.add('code-snippet');
    rightCode.classList.add('code-snippet');
    leftCode.innerHTML = cardObj[0].jsCode;
    rightCode.innerHTML = cardObj[0].jqCode;
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
    leftTestArea.classList.add('test-area');
    rightTestArea.classList.add('test-area');
    leftCol.appendChild(leftTestArea);
    rightCol.appendChild(rightTestArea);
    jsTryBtn.onclick = () => {
        cardObj[0].jsTest(leftTestArea);
    }
    jqTryBtn.onclick = () => {
        cardObj[0].jqTest(rightTestArea);
    }
    element.appendChild(infoContainer);
}


let main = [
    {
        title: 'Product Design Sprint',
        info: 'A five-day workshop that will help you answer crucial business questions'
    },
    {
        title: 'Scoping Session',
        info: 'A workshop aimed at shaping your business idea, answering questions regarding project planning'
    },
    {
        title: `UX <br> Review`,
        info: 'An evaluation which will help you radically improve your product.'
    },
    {
        title: 'Code <br> Review',
        info: 'Do you know what one of the key secrets of success is what makes people successful in business'
    }
];

let mainBlocks = document.getElementById('main-blocks');
let mainBtn = document.querySelectorAll('blocks-btn')

for (let info of main) {
    let div = document.createElement('div');
    div.classList.add('blocks')
    div.innerHTML = `<div>
                        <h3 class='blocks-title'> ${info.title.toUpperCase()} </h3> 
                        <p class='blocks-info'>${info.info}</p> 
                    </div>
                    <a class='blocks-btn'>
<svg class="blocks-sign" version="1.1" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 494.148 494.148"
style="enable-background:new 0 0 494.148 494.148;" xml:space="preserve">
<g>
    <g>
        <path d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124
            c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884
            C432.632,229.572,422.964,213.288,405.284,201.188z"></path>
    </g>
</g>
</svg>
Read More</a>`
    mainBlocks.appendChild(div);
}
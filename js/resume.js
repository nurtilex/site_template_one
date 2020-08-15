// Resume 
    // Experiance

const resumeItems = document.querySelectorAll('.experiance .item');
const years = document.querySelectorAll('.storyline__year');
const circlesInner = document.querySelectorAll('.storyline__circle_inner');
const texts = document.querySelectorAll('.experiance .item p');

let itemMouseEnter = function(item, year, circleInner, text) {
    item.addEventListener('mouseenter', function() {
        year.classList.add('storyline__year_mouseenter');
        circleInner.style.visibility = 'visible';
        text.style.color = 'white';
        text.querySelector('span').style.color = 'white';
    })
}

let itemMouseLeave = function(item, year, circleInner, text) {
    item.addEventListener('mouseleave', function() {
        year.classList.remove('storyline__year_mouseenter');
        circleInner.style.visibility = 'hidden';
        text.style.color = 'rgba(168, 133, 144, 1)';
        text.querySelector('span').style.color = 'rgba(168, 133, 144, 1)';
    })
}
for (let i = 0; i < resumeItems.length; i++) {
    itemMouseEnter(resumeItems[i], years[i], circlesInner[i], texts[i])
}

for (let i = 0; i < resumeItems.length; i++) {
    itemMouseLeave(resumeItems[i], years[i], circlesInner[i], texts[i])
}


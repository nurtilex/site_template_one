const resumeItems = document.querySelectorAll('.experiance__item');
const years = document.querySelectorAll('.experiance__year');
const circlesInner = document.querySelectorAll('.experiance__circle-inner');
const texts = document.querySelectorAll('.experiance__about');

const itemMouseEnter = function(item, year, circleInner, text) {
    item.addEventListener('mouseenter', function() {
        year.classList.add('experiance__year--mouse-enter');
        circleInner.style.visibility = 'visible';
        text.style.color = 'white';
        text.querySelector('span').style.color = 'white';
    })
}

const itemMouseLeave = function(item, year, circleInner, text) {
    item.addEventListener('mouseleave', function() {
        year.classList.remove('experiance__year--mouse-enter');
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

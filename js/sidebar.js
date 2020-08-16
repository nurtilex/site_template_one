const burger = document.querySelector('.burger');
const lineOne = document.querySelector('.burger__line--one');
const lineTwo = document.querySelector('.burger__line--two');
const lineThree = document.querySelector('.burger__line--three');

const secondSidebar = document.querySelector('.sidebar-second');

const currPage = document.querySelector('.slider__page--current');


//moving on hover
burger.addEventListener('mouseenter', function () {
    lineOne.classList.add('burger__line--one_hover');
    lineTwo.classList.add('burger__line--two_hover');
});
burger.addEventListener('mouseleave', function () {
    lineOne.classList.remove('burger__line--one_hover');
    lineTwo.classList.remove('burger__line--two_hover');
});
// from burger to cross on click
burger.addEventListener('click', function () {
    const isCross = lineOne.classList.contains('burger__line--one_click');

    if (!isCross) {
        lineOne.classList.add('burger__line--one_click');
        lineTwo.classList.add('burger__line--two_click');
        lineThree.classList.add('burger__line--three_click');
        secondSidebar.classList.add('sidebar-second--shown');
        currPage.classList.add('slider__page--current--color_dark');

    } else {
        lineOne.classList.remove('burger__line--one_click');
        lineTwo.classList.remove('burger__line--two_click');
        lineThree.classList.remove('burger__line--three_click');
        secondSidebar.classList.remove('sidebar-second--shown');
        currPage.classList.remove('slider__page--current--color_dark');
    }
})

window.onscroll = function () {
    if (window.pageYOffset < 723) {
        currPage.innerHTML = '01'
    } else if (window.pageYOffset > 722 && window.pageYOffset < 1700) {
        currPage.innerHTML = '02'
    } else if (window.pageYOffset > 1700 && window.pageYOffset < 2500) {
        currPage.innerHTML = '03'
    } else if (window.pageYOffset > 2500 && window.pageYOffset < 3574) {
        currPage.innerHTML = '04'
    } else if (window.pageYOffset > 3574 && window.pageYOffset < 3930) {
        currPage.innerHTML = '05'
    } else {
        currPage.innerHTML = '06'
    }
}

const burger = document.querySelector('.burger');
const lineOne = document.querySelector('.line-one');
const lineTwo = document.querySelector('.line-two');
const lineThree = document.querySelector('.line-three');
const secondSidebar = document.querySelector('.second-sidebar');
const currPage = document.querySelector('.current-page');

//moving on hover
burger.addEventListener('mouseenter', function () {
    lineOne.classList.add('line-one-hover');
    lineTwo.classList.add('line-two-hover');
})
burger.addEventListener('mouseleave', function () {
    lineOne.classList.remove('line-one-hover');
    lineTwo.classList.remove('line-two-hover');
})
// from burger to cross on click
burger.addEventListener('click', function () {
    const isCross = lineOne.classList.contains('line-one-click') &&
        lineTwo.classList.contains('line-two-click') &&
        lineThree.classList.contains('line-three-click');

    if (!isCross) {
        lineOne.classList.add('line-one-click');
        lineTwo.classList.add('line-two-click');
        lineThree.classList.add('line-three-click');
        secondSidebar.classList.add('second-sidebar-show');
        currPage.classList.add('current-page-darker');

    } else {
        lineOne.classList.remove('line-one-click');
        lineTwo.classList.remove('line-two-click');
        lineThree.classList.remove('line-three-click');
        secondSidebar.classList.remove('second-sidebar-show');
        currPage.classList.remove('current-page-darker');
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
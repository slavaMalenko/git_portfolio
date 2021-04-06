// project filter start

const filterBox = document.querySelectorAll('.box');

document.querySelector('.portfolio_item_filter').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];

    filterBox.forEach(elem => {
        elem.classList.remove('increase');
        elem.classList.remove('hide');
        elem.classList.remove('enlarge');
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide');
        } else {
            elem.classList.add('enlarge');
        }
    });
});

document.querySelector('.portfolio_button').addEventListener('click', event => {
    if (event.target.tagName !== 'P') return false;

    let filterClass = event.target.dataset['f'];

    filterBox.forEach(elem => {
        elem.classList.add('increase');
    })
})

// project filter end






// site scrolling start

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};

// site scrolling end








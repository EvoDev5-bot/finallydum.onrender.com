const topBarHome = document.querySelector("#top-bar-home");
const topBarNow = document.querySelector("#top-bar-now");
const topBarAbout = document.querySelector("#top-bar-about");
const topBarPortfolio = document.querySelector("#top-bar-portfolio");

const topBarHomeImg = document.querySelector("#top-bar-home img");
const topBarNowImg = document.querySelector("#top-bar-now img");
const topBarAboutImg = document.querySelector("#top-bar-about img");
const topBarPortfolioImg = document.querySelector("#top-bar-portfolio img");



topBarNow.addEventListener("mouseover", function () {
    topBarNowImg.setAttribute('src', 'images/diary-icon-hover.png');
});
topBarNow.addEventListener("mouseout", function () {
    topBarNowImg.setAttribute('src', 'images/diary-icon.png');
});

topBarHome.addEventListener("mouseover", function () {
    topBarHomeImg.setAttribute('src', 'images/home-icon-hover.png');
});
topBarHome.addEventListener("mouseout", function () {
    topBarHomeImg.setAttribute('src', 'images/home-icon.png');
});

topBarPortfolio.addEventListener("mouseover", function () {
    topBarPortfolioImg.setAttribute('src', 'images/projects-icon-hover.png');
});
topBarPortfolio.addEventListener("mouseout", function () {
    topBarPortfolioImg.setAttribute('src', 'images/project-icon.png');
});


topBarHome.addEventListener('click', function () {
    window.open('index.html');
});

topBarNow.addEventListener('click', function () {
    window.open('now.html');
});

topBarAbout.addEventListener('click', function () {
    window.open('about.html');
});

topBarPortfolio.addEventListener('click', function () {
    window.open('portfolio.html');
});
(function () {
    let links = document.querySelectorAll('.content__links ul li a');

    links[0].addEventListener('click', () => {
        links[1].classList.remove('active')
        links[0].classList.add('active')
    })
    links[1].addEventListener('click', () => {
        links[0].classList.remove('active')
        links[1].classList.add('active')
    })
})();

(function () {
    let content = document.querySelector('.content');
    let login = document.querySelector('#login__block');
    let btn = document.querySelector(".btn__login")
    login.style = ` display: none;`;


    btn.addEventListener("click", () => {
        content.style = ` display: none;`;
        login.style = ` display: flex;`;

    })
})();


(function () {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('nav');
    let img = document.querySelector('.burger img');

    img.src = './Img/burger.svg'


    burger.addEventListener("click", () => {
        if (nav.style.top == `-110vh` || nav.style.top == `` || img.src == './Img/burger.svg') {
            nav.style = `top: 10vh`
            img.src = './Img/closelabel.png'
        } else {
            nav.style = `top: -110vh`
            img.src = './Img/burger.svg'
        }

    })
})();

(function () {
    let logout = document.querySelector('#logout__block');
    let btn = document.querySelector('.btn__logout');
    let = document.querySelector('.burger img');

    let bg__logout = document.querySelector('.bg__logout');



    logout.style = `  display: none`


    btn.addEventListener("click", () => {

        if (logout.style.display == 'none') {
            logout.style = `  display: flex`;

            bg__logout.style = ` animation: anim 1s; `;

            setTimeout(() => {
                bg__logout.style = `opacity: .2; `
            }, 1000);

        }

    })
    bg__logout.addEventListener("click", () => {
        logout.style = `  display: none`
    })
})()
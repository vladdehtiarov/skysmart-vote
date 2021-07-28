const filterForYear = document.querySelector('.filter-for-year');
const filterForType = document.querySelector('.filter-for-type');
const t = document.querySelectorAll('.type');
const f = document.querySelectorAll('.filter-for-type__btn');

f[0].addEventListener('click', (e) => {
    t[0].classList.add('type-active');
    t[1].classList.remove('type-active');
    t[2].classList.remove('type-active');
});

f[1].addEventListener('click', (e) => {
    t[1].classList.add('type-active');
    t[0].classList.remove('type-active');
    t[2].classList.remove('type-active');
});

f[2].addEventListener('click', (e) => {
    t[2].classList.add('type-active');
    t[1].classList.remove('type-active');
    t[0].classList.remove('type-active');
});

filterSwitch(filterForYear, 'filter-for-year__btn-active');
filterSwitch(filterForType, 'filter-for-type__btn-active');


function filterSwitch(wrapper, actionClass) {
    wrapper.addEventListener('click', e => {
        let target = e.target;
        for(let i = 0; i < wrapper.children.length; i++) {
            wrapper.children[i].classList.remove(actionClass);
        }
        target.classList.add(actionClass);
    });
}

// Popups

const popup = document.querySelectorAll('.popup');
const openForm = document.querySelectorAll('.open-form');
const openPicture = document.querySelectorAll('.open-picture');
const openStory = document.querySelectorAll('.open-story');
const form = document.querySelector('.popup-form');
const send = document.querySelector('.popup-send');
const picture = document.querySelector('.popup-picture');
const story = document.querySelector('.popup-story');
const allStory = document.querySelectorAll('.all-story');
const cardPicture = document.querySelectorAll('.card-picture');

//Show form popup
openForm.forEach(i => {
    i.addEventListener('click', () => {
        picture.classList.add('hide');
        story.classList.add('hide');
        form.classList.remove('hide');
    });
});

//Show picture popup
openPicture.forEach(i => {
    i.addEventListener('click', () => {
        picture.classList.remove('hide');
    });
});

cardPicture.forEach(i => {
    i.addEventListener('click', () => {
        picture.classList.remove('hide');
    });
});

//Show story popup
openStory.forEach(i => {
    i.addEventListener('click', () => {
        story.classList.remove('hide');
    });
});

allStory.forEach(i => {
    i.addEventListener('click', () => {
        story.classList.remove('hide');
    });
});

//Close popup
popup.forEach(i => {
    i.addEventListener('click', function(e) {
        if (e.target.className === 'overlay' || e.target.className === 'close-popup') {
            this.classList.add('hide');
        }
    });
});

//Validate popup form
let validateForm = function (element, options) {
    new window.JustValidate(element, {
        rules: options,
        // Start if valid
        submitHandler: function () {
            form.classList.add('hide');
            send.classList.remove('hide');
        }
    });
};

validateForm('.form',
    {
        email: {required:true, email: true},
        name: {required: true},
        phone: {required: true}
    });

// Phone mask

let selector = document.querySelector('.input-phone');

let im = new Inputmask("+7(999) 999-9999");

im.mask(selector);


// Viget
const btnSend = document.querySelectorAll('.btn-send');

btnSend.forEach(i => {
    i.addEventListener('click', function(e) {
        let v = this.children[1];
        e.preventDefault();
        v.classList.remove('hide');
        setTimeout(() => v.classList.add('hide') ,1500);
    });
});


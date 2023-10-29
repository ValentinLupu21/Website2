function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const scrollY = document.body.style.top;


const openModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.body.style.overflow = 'hidden';
    document.body.style.top = `-${window.scrollY}px`;
}

openModalBtn.addEventListener("click", openModal);

const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    document.body.style.overflow = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);  
    
}


closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


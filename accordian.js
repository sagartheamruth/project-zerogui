document.querySelectorAll('.accordian__button').forEach(button => {
    button.addEventListener('click', () => {
        
        // const accordianContent = button.nextElementSibling;

        button.classList.toggle('accordian__button--active');

        // if(button.classList.toggle('accordian__button--active')) {
        //     accordianContent.getElementsByClassName.maxHeight = accordianContent.scrollHeight + 'px';
        // } else {
        //     accordianContent.style.maxHeight = 0;
        // }
    });
});
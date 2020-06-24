{
    const linkItem = document.querySelector('.link');
    const burgerBtn = document.querySelector('.burgerIcons');
    const windowSize = window.Medias;

    burgerBtn.addEventListener('click', ()=> {
        toggle(linkItem, burgerBtn,'show-links');
    });

    document.querySelectorAll('.single-link')
        .forEach(link => 
            link.addEventListener('click', ()=> { 
                toggle(linkItem, burgerBtn,'show-links');
            }));

    function toggle(item, btn, action) {
        item.classList.toggle(action);
        btn.classList.toggle('toggle')
    }
}

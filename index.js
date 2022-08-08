let listItems = [...document.querySelectorAll('h1')];

let options = {
    rootMargin: '-10%',
    threshold: 0.0
}

function hide(entries){
    listItems.forEach(item => item.style.opacity = "0");
}
hide(listItems.entries);

let observer = new IntersectionObserver(makeVisible, options);

function makeVisible(entries){
    entries.forEach(entry => {
        console.log(entries);
        if(entry.isIntersecting){
            entry.target.classList.add('appearing');
        } 
    })
}

listItems.forEach(item => {
    observer.observe(item);
})
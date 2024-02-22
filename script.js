var imgs = document.querySelectorAll(".header-img img")
var prebtn = document.querySelector(".pre-btn")
var nextbtn = document.querySelector(".next-btn")

let n = 0;

function changebtn() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'
    }
    imgs[n].style.display = 'block';

}

changebtn();

prebtn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    }
    else {
        n = imgs.length - 1;
    }
    changebtn();
})

nextbtn.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++;
    }
    else {
        n = 0;
    }
    changebtn();
})

prebtn.addEventListener('click', (e) =>{

prebtn.style.border="3px solid aqua"

})



nextbtn.addEventListener('click', (e) =>{

    nextbtn.style.border="3px solid aqua"
    
    })
    








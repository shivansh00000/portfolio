let imgDivs = document.querySelectorAll('.links');

imgDivs.forEach((img, idx) => {
    img.addEventListener("mouseenter", () => {
        img.style.transform='translate3d(0 , -70px , 15px)';
        img.style.boxShadow='-3px -7px 15px white';
        if(idx<5){imgDivs[idx+1].style.transform='translate3d(0 , -22px, 10px)'};
        if(idx<4){imgDivs[idx+2].style.transform='translate3d(0 , -12px, 5px)'};
        if(idx<3){imgDivs[idx+3].style.transform='translate3d(0 , -5px, 3px)'};
    });
    img.addEventListener("mouseleave", () => {
        img.style.transform='translate3d(0 , 0 , 0)';
        img.style.boxShadow='5px 5px 15px grey';
        if(idx<5){imgDivs[idx+1].style.transform='translate3d(0 , 0 , 0)'};
        if(idx<4){imgDivs[idx+2].style.transform='translate3d(0 , 0, 0)'};
        if(idx<3){imgDivs[idx+3].style.transform='translate3d(0, 0, 0)'};
    });
    
})


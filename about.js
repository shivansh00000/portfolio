const text1="Hi, I'm Shivansh, a self-taught web development enthusiast about to start my college life.";
const text2="Even before formal education in tech, I've been learning by doing — experimenting with code, building small websites, and understanding how the internet works at a deeper level.";
const text3="I'm passionate about creative problem-solving, and I'm now focused on growing my skills in front-end development, JavaScript, and soon diving into data structures and backend technologies.";
const text4=" I'm building this portfolio not just to show what I've done, but to track how far I’ll go.";
let i = 0; let j=0; let k=0; let l=0;
function typeWriter() {
    if (i < text1.length) {
        document.querySelector('#js-para-1').innerHTML += text1.charAt(i);
        i++;
  }
    else if(j<text2.length) {
        document.querySelector('#js-para-2').innerHTML += text2.charAt(j);
        j++;
    }
    else if(k<text3.length) {
        document.querySelector('#js-para-3').innerHTML += text3.charAt(k);
        k++;
    }
    else if(l<text4.length) {
        document.querySelector('#js-para-4').innerHTML += text4.charAt(l);
        l++;
    }
    setTimeout(typeWriter, 55);
}

typeWriter();

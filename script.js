let sups = document.querySelector('img'),
    btn = document.getElementById('btn'),
    reset = document.getElementById('reset'),
    count = 0;

sups.style.width = '600px';
sups.style.position = 'absolute';
btn.style.position = 'fixed';
btn.style.top = '300px'
btn.style.display = 'block';
reset.style.position = 'fixed';
reset.style.top = '350px'
reset.style.left = '350px'
reset.style.display = 'none';

let flyInterval;
let flyAnimate = () => {
    
    flyInterval = requestAnimationFrame(flyAnimate);
    count++;
    if(count < 350){
        sups.style.left = count * 2 + 'px';
    } else if (count < 500) {
        sups.style.left = count * 2 + 'px';
    } else {
        cancelAnimationFrame(flyInterval);
    }
    console.log(count);
    if (count > 100) {
        reset.style.display = 'block';

    }
};
let animate = false;
btn.addEventListener('click', () => {
    if(animate){
        flyInterval = requestAnimationFrame(flyAnimate);
        animate = false
    } else {
        animate = true;
        cancelAnimationFrame(flyInterval);
    }
    
})


reset.addEventListener('click', () => {
    animate = true;
    cancelAnimationFrame(flyInterval);
    count = 0;
    sups.style.left = count;
    
})
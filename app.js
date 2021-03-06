const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningtoSelect = document.querySelector('#playto');

let p1score = 0;
let p2score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click',()=>{
    // alert('clicked');
    if(!isGameOver){
        p1score += 1;
        if(p1score===winningScore){
           isGameOver=true;
           p1Display.classList.add('has-text-success');
           p2Display.classList.add('has-text-danger');
           p1Button.disabled = true;
           p2Button.disabled = true;
        }
        p1Display.textContent = p1score;
    }
})

p2Button.addEventListener('click',()=>{
    // alert('clicked');
    if(!isGameOver){
        p2score += 1;
        if(p2score===winningScore){
           isGameOver=true;
           p2Display.classList.add('has-text-success');
           p1Display.classList.add('has-text-danger');
           p1Button.disabled = true;
           p2Button.disabled = true;
        }
        p2Display.textContent = p2score;
    }
})

winningtoSelect.addEventListener('change',function () {
    // alert(this.value);
    winningScore  = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset(){
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p2Display.classList.remove('has-text-success','has-text-danger');
    p1Display.classList.remove('has-text-success','has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}
let openModalBtn = document.querySelector('.registration-btn');
let modal = document.querySelector('.modal');
let xBtn = document.querySelector('.xbtn');

openModalBtn.addEventListener('click', () => {
    if(modal.style.display === 'block'){
        modal.style.display = 'none';
    }else{
        modal.style.display = 'block'
    }
});


xBtn.addEventListener('click', function(){
    console.log();
    modal.style.display = 'none';
})
const n = document.querySelector('h1');
const body = document.querySelector('body');

n.addEventListener('click', () =>{
    body.style.backgroundColor = 'black';
});

const color = () => {
    body.style.backgroundColor = 'black';

}

const button = document.querySelector('button');

button.addEventListener('click' , () => {
    if (body.style.backgroundColor == "white"){

        body.style.backgroundColor = "black"
    }else{
        body.style.backgroundColor = "white";
    }

})
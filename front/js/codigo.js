document.body.style.backgroundColor = 'rgb(39, 39, 39)'
'rgb(39, 39, 39)'

document.querySelector('h1').style.backgroundColor = 'rgb(19, 19, 19)'
'rgb(19, 19, 19)'

document.querySelector('h1').style.color = 'rgb(170, 170, 170)'
'rgb(170, 170, 170)'

document.querySelector('h1').style.borderColor = 'black'
'black'


let tamanho = document.querySelectorAll('.item').length
for(let i = 0; i<=tamanho;i++){
    document.querySelectorAll('.item')[i].style.backgroundColor = 'rgb(19, 19, 19)';
    document.querySelectorAll('.item')[i].style.borderColor = 'black';
    document.querySelectorAll('.item')[i].style.color = 'rgb(230, 230, 230)';
}




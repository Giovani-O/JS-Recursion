/*
    Exemplo básico de recursividade:

    A função irá chamar a si mesma até que não haja mais necessidade (num === 0) || (sum === value)
*/
const countdown = (num) => {
    if (num === 0){
        return;
    }
    console.log(num);
    countdown (num - 1);

}

countdown(50);

console.log("----------------");

/*
    A função abaixo utiliza recursividade para contar até um determinado número

    lembrando que, eu posso usar o parametro start para definir onde a conta começa
    caso eu não defina isso, o padrão é 0;
*/
function addUp(end, start = 0){
    console.log(start);
    if(start === end) {return}
    addUp(end, start + 1);
}

addUp(50, -10);
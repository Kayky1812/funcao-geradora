function * geradora1(){
    yield 'Valor 1';
    yield 'valor 2';
    yield 'valor 3';
}


//yield é como se fosse um return mas ele me retorna coisas 
//diferentes toda vez que chamo ele
const g1 = geradora1();
console.log(g1.next()) // se eu chamar o next a baixo, ele vai para o proximo valor
console.log(g1.next())

// for (let valor of g1){
//     console.log(valor)
// }

function* geradora3(){
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4(){
    yield*geradora3();
    yield 4;
    yield 5;
    yield 6;
}
const g4 = geradora4();

for (valor of g4){
    console.log(valor)
}
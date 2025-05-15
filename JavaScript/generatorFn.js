

function* generatorFn(){
    yield 1;
    yield 2;
    yield 3;
}

let gen=generatorFn()

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


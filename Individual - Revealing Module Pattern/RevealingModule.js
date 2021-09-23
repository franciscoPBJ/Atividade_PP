const francisco = (function (){
    const name = "Francisco Paulino";
    const address = "Cachoeira dos Índios";
    const introduce = function (){
        return 'My name is ${name}';
    };
    const report = function (){
        return 'I live in ${address}';
    };
    //'return' retorna publicamente os ponteiros das funções
    //e propriedades privadas
    return {
        introduce, report, name
    };
    
})();

console.log(francisco.introduce());
//retorna o nome do usuário

console.log(francisco.report());
//retorna o endereço

console.log(francisco.address);
//retorna indefined
let lista = [1,2,3,4,5,6,7];

let novalista = lista.map(function(item){
     return  item*5;
});
console.log(novalista);
//estou construindo uma nova lista,nela vai possuir os "itens" da lista antiga 
//mutliplicado 5

let novalista1 =lista.map(function(item,index){
    return item +=index;
});
console.log(novalista1);
//estou construindo uma nova lista,nela vou pegar o "item" da lista antiga é 
//somar coma sua posição "index";
//No map "item" corresponde aos items da lista que deseja mudar,
//No map "index" corresponde a posição da lista antiga que deseja mudar;

let novalista3 = lista.reduce(function(total, proximo){
    return total + proximo;
})
console.log(novalista3);
//Reduce objetivo e fazer com que seu array retorna apenas um valor.
//total  e o valor total é proximo e outro item.

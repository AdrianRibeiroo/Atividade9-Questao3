var num,soma=0;

let x = parseInt(prompt('Digite um número:'));
let y = parseInt(prompt('Digite um número:')); 

for(num=x; num<y; num++)
{
    if(num%2 != 0)
    {
        soma += num;
        num++;
    }  
}
alert(`A soma dos numeros impares entre ${x} e ${y} é ${soma}`);
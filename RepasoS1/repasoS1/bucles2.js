/**
Crear la siguiente figura:
    **             2
   ****            4
  ******           6
 ********          8
**********         10
 ********          8
  ******           6
   ****            4
    **             2
*/

let asterisk = '*';

for(let i = 2; i <= 10; i += 2){
    console.log(asterisk.repeat(i));   
}

for(let i = 8; i >=1; i-=2){
    console.log(asterisk.repeat(i));
}
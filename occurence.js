const readline = require('readline-sync')
const n=Number(readline.question());

let words=[];
for(let i=0;i<n;i++){
    words.push(readline.question());
}

let uniquewords=[];
let occurrence=[];
for(let i=0;i<n;i++){
    let word=words[i]
    let index=uniquewords.indexOf(word)
    if(index<0){
        uniquewords.push(word)
        occurrence.push(1)
    }
    else{
        occurrence[index]++
    }
}
console.log(uniquewords.length);
console.log(occurrence.join(' '));  
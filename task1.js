const readline = require('readline-sync')
const n=Number(readline.question());

let words=[];
for(let i=0;i<n;i++){
    words.push(readline.question());
}

let uniquewords=[];   //array which stores all the unique words
let occurrence=[];    //array which stores the occurrence of each word
for(let i=0;i<n;i++){
    let word=words[i]
    let index=uniquewords.indexOf(word)  //gets the index of the word from the array which contains the unique words
    if(index<0){        //if word is not present it adds to the array and also adds 1 to the occurrence array 
        uniquewords.push(word)
        occurrence.push(1)
    }
    else{            //if word is present it increases the occurrence by 1
        occurrence[index]++
    }
}
console.log(uniquewords.length);    //prints number of unique words
console.log(occurrence.join(' '));  //prints the occurrence of each word
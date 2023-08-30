const readline = require('readline-sync')
const n=Number(readline.question());

let words=[];
for(let i=0;i<n;i++){
    words.push(readline.question());
}

let wordCount=[]
for(let i=0;i<n;i++){
    let Word=words[i];
    let index= wordCount.findIndex(item =>item.word===Word)
    if(index<0){
        wordCount.push({word:Word,count:1})
    }
    else{
        wordCount[index].count++;
    }
}
console.log("Descending order: ")
wordCount.sort((a,b)=> b.count-a.count)
for(item of wordCount){
    console.log(item.word );
}
console.log("Most repeated  " +wordCount[0].word);
console.log("Least repeated  " +wordCount[wordCount.length-1].word);
console.log("sanidhya varshney")
console.log(__dirname)
console.log(__filename)

const value=require('./sum');
console.log(value.add.age);
console.log(value.add.name);
console.log(value.add.profession);

const arraysum=((array)=>{
    let sum=0;
    for(integer of array){
        sum+=integer;
    }
    return sum;
})
const array=[1,2,3,4,5,6];
console.log(arraysum(array))

//File System Module:-
//Asynchronous read
const fs=require('fs')
fs.readFile(__dirname+'/read.txt','utf-8',(err,res)=>{
    if(err) throw err;
    console.log(res.toString())
})

//Synchronous read:-

try{
    const data=fs.readFileSync(__dirname+'/read.txt','utf-8');
    console.log(data.toString())
}catch(e){
    console.log(e);
}

//Delete the file using unlink:-

fs.unlink(__dirname+'/read.txt',(err)=>{
    if(err){
        throw "Error:- "+err;
    }
    console.log("File Deleted Successfully!!!!");
})
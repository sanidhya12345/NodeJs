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
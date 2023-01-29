class Person{
    private firstName:string;
    private lastName:string;
    private age:20;
    public getFullName(firstName,lastName){
        return `Hello ${firstName} ${lastName}`
    }
}

const p=new Person;
console.log(p.getFullName("sanidhya","varshney"));
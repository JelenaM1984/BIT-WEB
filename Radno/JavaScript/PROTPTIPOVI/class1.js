class Person{
    constructor(name,surname){
        this.name=name;
        this.surname=surname;

    }
    getFullName(){
        return `${this.name} ${this.surname}`;

    }
}
// var osoba=new Person('Vladimir' , 'Lukic' );
// console.log(osoba.getFullName());
class Employee extends Person{
    constructor(name,surname,job,salary){
        super(name,surname);
        this.job=job;
        this.salary=salary;
    }
    getData(){
        return `${super.getFullName()} ${this.salary} ${this.job}`
    }

}
var zaposleni=new Employee('Vladimir' , 'Lukic', 'developer', '3000$');
console.log(zaposleni);
class Person{
    constructor(name,surname){
        this.name=name;
        this.surname=surname;
    }
    fullname(){
        return`${this.name} ${this.surname}`
    }
}

class Programer  extends Person{
 constructor(name,surname, favoriteLanguage){
    super(name,surname);
    this.favoriteLanguage=favoriteLanguage;
 }   
 getInfo(){
    return this.fullname() + "" + this.favoriteLanguage;
 }
}
var programmer=new Programer('Pera', 'Peric', 'JS');
console.log(programmer.getInfo());
class Tester extends Person{
    constructor(name,surname,favoriteTestingFramework){
    super (name,surname);
    this.favoriteTestingFramework=favoriteTestingFramework;
}
getInfo(){
    return super.getInfo() + '' + this.favoriteTestingFramework

}
}
var tester=new Tester('Pera','Peric', 'Selenium');
console.log(tester.getInfo());

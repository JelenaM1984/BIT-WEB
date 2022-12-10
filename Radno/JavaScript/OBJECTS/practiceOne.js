//Create an object that represents your favourite coffee.
var coffe = {
  name: "Jacobs",
  strength: "strong",
  flavour: "vanila",
  milk: "with milk",
  sugar: "No sugar",
};
console.log(coffe);
//Create an object that represents your favourite movie. Please include title, actors,
//irector, genre, popularity.
var muvie = {
  title: "Shooter",
  actors: "Mark Wahlberg, Michael Peña, Danny Glover",
  director: "A.J.Clover",
  genre: "Action & Adventure",
  popularity: "Popular",
};
console.log(muvie);
//Write a function that creates an object that represents a project.
function project() {
  return {
    description: "Objects",
    programingLanguage: "JavaScript",
    gitRepository: "JelenaM1984",
    IsOnDevelopment: true,
    getRepository: function () {
      return "asdf";
    },
  };
}

var project1 = project();
console.log(project1);
console.log(project1.getRepository());
console.log(project1.gitRepository);

//Write a function that creates an object that represents a culinary recipe.
//Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
//preparing time, preparing instruction.
function makeACake(){
var recipe={
    name:"Nesquick cake",
    typeOfCuisine:"Serbian",
    complexity:{
    one:1,
    two:2,
    three:3,
    four:4,
    five:5},
    listOfIngredients:{"water""dark" "chocolate", "chees", "eggs"};
}
}

class Dog{
    constructor(dogName,weight,color,breed){
    this.dogName=dogName;
    this.weight=weight;
    this.color=color;
    this.breed=breed;
}
}
let dog=new Dog("Jacky",30,"brown","labrador");
console.log(dog.dogName,"is a",dog.breed,"and weighs",dog.weight,"kg")

class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }

}
let person1=new Person("Milica","Stojadinovic");
let person2=new Person("Nemanja", "Savic");
console.log(person1.firstname,person2.lastname);


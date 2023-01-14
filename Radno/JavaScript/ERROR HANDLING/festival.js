'use strict';
(function(){
    console.log("Hi");
    //constructor function
    function Genre(name){
        this.name=name;
        this.getData=function(){
            var cutTheName=`${this.name[0].toUpperCase()},${this.name[this.name.length-1].toUpperCase()}`
            return cutTheName;
        };
  

    }
    function Muvie(title, genre, length){
        this.title=title;
        this.genre=new Genre(genre);
        this.length=length;
        this.getData=function(){
            newMovie=`${this.title},${this.length} "min", ${this.genre.getData()}`;
            return newMovie;
        };
    }
    function Program(date,listOfMouvies,total){
        this.date=new Date(date).toLocaleDateString('en-US');
        this.list=listOfMouvies;
        this.totalNumber=total;
    }
    function Festival(nameOfFestival,programList,allPrograms){
        this.nameOfFest=nameOfFestival;
        this.programList=programList;
        this.allPrograms=allPrograms
    };
    var name01=new Genre('Action');
    var name02=new Genre('Cartoon');
    var name03=new Genre('Drama');
 

})
()
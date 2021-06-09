// Link to the Homework: https://sfs-flex-1.herokuapp.com/frontend-fundamentals/week-4/day-1/labs/pizzarat/
// Class Hamster

class Hamster {
  constructor(name){
    this.owner = "";
    this.name = name;
    this.price = 15;
  }

  wheelRun(){
    console.log("squeak squeak")
  }

  eatFood(){
    console.log("nibble nibble")
  }

  getPrice(){
    return(this.price)
  }
}

// Class Person

class Person{
  constructor(name){
    this.name = name;
    this.age = 0;
    this.height =0;
    this.weight =0;
    this.mood =0;
    this.hamster =[];
    this.bankAccount =0;
  }

  getName(){
    return this.name
  }

  getAge(){
    return this.age
  }

  getWeight(){
    return this.weight
  }

  greet(){
  console.log(`Hello , Welcome ${this.name}`)
  }

  eat(){
    this.weight++
    this.mood++
  }

  exercise(){
    this.weight--
  }

  ageup(){
    this.age++
    this.height++
    this.weight++
    this.mood--
    this.bankAccount+=10
  }

  buyHamster(hamObj){
    this.hamster.push(hamObj)
    this.mood+=10
    this.bankAccount=this.bankAccount-hamObj.getPrice()
  }
}

// Create a Story with your Person class

const timmy = new Person('Timmy')
timmy.age = 5
for(let i=0;i<5;i++){
  timmy.eat()
  timmy.exercise()}
timmy.age = 9

const gus = new Hamster('Gus')
gus.owner ='Timmy'
timmy.buyHamster(gus)

for(let i=0;i<2;i++){
  timmy.eat()
  timmy.exercise()}

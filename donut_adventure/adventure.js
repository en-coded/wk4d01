// Link to the Homework: https://sfs-flex-1.herokuapp.com/frontend-fundamentals/week-4/day-1/labs/pizzarat/


// Link files to adventure.js

var imported = document.createElement('script');
imported.src = '/object.js';
document.head.appendChild(imported);

//created class hero
class Hero{
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10
    };
    this.catchPhrases = ["i\'m fresher than day old pizza",
 "you can\'t count my calories"];
  }
 talkSass(){
   console.log(this.catchPhrases[0])
 }
 announceHealth(){
   console.log(this.health)
 }
fight(obj){
   obj.health = obj.health - this.weapons.sprinkleSpray
   console.log(`${obj.name} got hit by ${Object.keys(this.weapons)[0]}, his health is now ${obj.health}`)
 }
}

//created class Enemy
class Enemy{
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    };
    this.catchPhrases = ["i\'m youtube famous",
    "i\'m more dangerous than an uncovered sewer"];
  }
 talkSmack(){
   console.log(this.catchPhrases[0])
 }
 announceHealth(){
   console.log(this.health)
 }
 fight(obj){
   obj.health = obj.health - this.weapons.pepperoniStars

   console.log(`${obj.name} got hit by ${this.weapons.pepperoniStars}, his health is now ${obj.health}`)
 }
}

const dougie = new Hero('Dougie')
const pizzaRat = new Enemy('Pizza Rat')

dougie.talkSass()
pizzaRat.talkSmack()
dougie.announceHealth()
pizzaRat.announceHealth()

pizzaRat.fight(dougie)
dougie.fight(pizzaRat)

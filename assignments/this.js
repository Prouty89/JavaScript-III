/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: When a function is contained in the global scope, THIS has value within the WINDOW object. Functions within the global scope are methods on the window object. 

* 2. Implicit Binding: "Left of the dot" will refer to THIS - An object is called followed by a method, seperate by a dot. Whatever precedes the dot will be THIS. 

* 3. New Binding: NEW as a keyword makes a standard function into a CONSTRUCTOR function, in which case THIS refers to a specific instance of an object created and returned by the CONSTRUCTOR function. 

* 4. Explicit Binding: Through .call and .apply methods you'll be able to pass the first arguent and explicitly set what THIS refers to. Call and Apply are the clearest case of what THIS points to. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function greetMe(name) {
//     console.log('Hello ' + name)
//     console.log(this)
// }

// greetMe('Blake')

//^^ will log "Hello Blake" in addition to everything global in JS. Will need to spend some more time on Window binding as two other examples I just get "window is not defined."

// Principle 2

//code example for Implicit Binding

let me = {
    name: 'Blake',
    age: 29,
    hobby: 'Running',
    sayHobby: function(){
        console.log(this.hobby)
    }
}

me.sayHobby()


// Principle 3

// code example for New Binding

function FamilyName(name) {
    this.intro = 'These are my family names: '
    this.name = name
    this.speak = function() {
        console.log(this.intro +this.name)
        //console.log(this)
    }
}

let momSide = new FamilyName ('Flynn')
let dadSide = new FamilyName ('Prouty')

momSide.speak()
dadSide.speak()



// Principle 4

// code example for Explicit Binding

let hobbies = function(act1, act2, act3) {
    console.log('My name is ' + this.name + ' and I like to ' + act1 +' , ' + act2 + ' , and ' + act3 + '. ')
}

let blake = {
    name: 'Blake',
    age: 29
}

let activities = ['Hike', 'Run', 'Read']

hobbies.apply(blake, activities)
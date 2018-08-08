function add (a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
}

console.log(addStatement(4, 7));


var addExpression = (a, b) => a + b;

console.log(addExpression(3, -2));

//we use arrow function for this binding 
// we we are creating a function that needs to use this keyword of its parent we will
// lose that binding 
names = ['anu', 'hell', 'heaven'];
var person = {
    name: "Anushil",
    greet: function () {
        names.forEach((name) => {
            console.log(this.name + ' say hi to ' + name);
        });
    }
}
person.greet();
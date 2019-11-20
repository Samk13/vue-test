new Vue({
  el: "#App",
  data: {
    name : 'Sam',
    age : 'age'
  },

  methods: {
      logName: function(){
        console.log(this.name);
        
      },
      logAge : function(){
        console.log(this.age);
        
      }

  }
});

const fruits = [
  "apple",
  "orange",
  "mango",
  "banana",
  "apple",
  "apple",
  "banana",
  "banana"
];
console.log(fruits);

const countMyFruits = fruits.reduce((countFruits, fruit) => {
  countFruits[fruit] = (countFruits[fruit] || 0) + 1;
  return countFruits;
}, {});


console.log(countMyFruits);

var startTime = performance.now();
let z = "😎".repeat(50);
console.log(z);
const endTime = performance.now();
console.log(
  "this doSomething took " + (endTime - startTime) + " milliseconds."
);


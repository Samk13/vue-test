new Vue({
  el: "#App",
  data: {
    name: "Sam",
    age: 35,
    a: 0,
    b: 0
  },

  methods: {
    logName: function() {
      console.log(this.name);
    },
    logAge: function() {
      console.log(this.age);
    },

    /*addA: function() {
      return this.a + this.age;
    },
    addB: function() {
      return this.b + this.age;
    }
  }, */
  },

  computed: {
    addA: function() {
      console.log("A");
      
      return this.a + this.age;
    },
    addB: function() {
      console.log("B");
      
      return this.b + this.age;
    }
  }
});




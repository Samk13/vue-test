let one = new Vue({
  el: "#vue-app-one",

  data: {
    title: 'Vue app one !😀' 
  },

  methods: {
    
  },
  computed: {
    greet : function(){
      return `Hello from instance 1`
    }
  }
});

// ----------------------------

let two = new Vue({
  el: "#vue-app-tow",

  data: {
    title: 'Vue app tow !😀😋✌🏼✌🏼'
  },

  methods: {
    changeTitle: function(){
     one.title = `now I changed the title 👻` 
    }
  },
  computed: {
    greet : function(){
      return `Hello from instance 2  🤠 `
    },
    
  }
});
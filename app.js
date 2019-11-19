new Vue({
  el: "#App",
  data: {
    age: 25,
    X: 0,
    Y: 0
  },

  methods: {
    add: function(inc){ this.age += inc},
    subtract: function(dec){this.age -= dec},
    updateXY: function(e){
        
        this.X = e.offsetX* 1000;
        this.Y = e.offsetY *1000;
    },
    click: function (){
        console.log("🤗☺😘");
        
    }
  }
});

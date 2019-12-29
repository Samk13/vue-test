<<<<<<< HEAD
let app = new Vue({
  el:"#App",
  data: {
    output: "your fav food ! 🥦"

  },
  methods:{
    readRefs: function(){
      console.log(this.$refs);
      
      console.log(this.$refs.input.value);
      this.output = this.$refs.input.value
      console.log(this.$refs.test.innerText);
      
    }
  }
})
=======
>>>>>>> vue-components

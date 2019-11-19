new Vue({
  el: "#App",
  data: {
    name: "Sam",
    job: "software engineer",
    website: "https://github.com/Samk13",
    websiteTage: `<a href="https://github.com/Samk13">The website</a>`
  },

  methods: {
    greet: function(time) {
      return `What's up! ${time} ${this.name}`;
    }
  }
});

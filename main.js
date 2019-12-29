Vue.component("sam-message", {
  props: ["title", "body"],

  data() {
    return {
      showMessage: true
    };
  },
  template: `
    <article class="message" v-show="showMessage">
    <div class="message-header">
      <p>{{ title }}</p>
      <button class="delete" aria-label="delete" @click="showMessage = false" ></button>
    </div>
    <div class="message-body">
        {{ body }}
    </div>
  </article>
    `
});


/* ======================================================== */


Vue.component("modal", {
  template: `
        <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-content">
           <div class="box">
            <slot></slot>
           </div>
          </div>
          <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>
  `
});



/* ======================================================== */

Vue.component("tabs", {
  template: `
        <div>
          <div class="tabs">
          <ul>
            <li v-for="tab in tabs" :class="{'is-active' : tab.isActive}">
             <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
            </li>
          </ul>
        </div>


        <div class="tabs-details">
        <slot></slot>
        </div>
       </div>
  `,

  data(){
    return{
      tabs : []
    }
  },

  mounted() {
    console.log(this.$children);
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = (tab.name == selectedTab.name);
        });
      }
    
  }
});


/* ======================================================== */

Vue.component('tab',{
  template: `
  <div v-show="isActive"><slot></slot></div>
  
  `,
  props:{
    name: {requierd: true},
    selected: { default: false},
  },
  data(){
    return{
      isActive: false,
    }
  },
  mounted(){
    this.isActive = this.selected;
  },

  computed: {
    href(){
      return '#' + this.name.toLowerCase().replace(/ /g, '-') ;
    }
  },



});





/* ======================================================== */


new Vue({
  el: "#root",
  data() {
    return {
      showModel: false
    };
  }
});

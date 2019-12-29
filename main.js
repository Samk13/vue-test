// we creat window.Event to make somthing similer to redux to notify sibling components or unrelated comps

// basic exemple :

// window.Event = new Vue();

// or we can make look better by creating a class to use it as a tool

window.Event = new (class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
})();

/* ======================================================== */
Vue.component("sam-message", {
  props: ["title", "body"],

  data() {
    return {
      showMessage: true
    };
  },
  template: `
    <article class="message " v-show="showMessage">
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
          <div class="tabs is-centered  is-toggle is-toggle-rounded">
          <ul>
            <li v-for="tab in tabs" :class="{'is-active' : tab.isActive}">
             <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
            </li>
          </ul>
        </div>
        <div class="tabs-details subtitle is-6">
        <slot></slot>
        </div>
       </div>
  `,

  data() {
    return {
      tabs: []
    };
  },

  mounted() {},
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name;
      });
    }
  }
});

/* ======================================================== */

Vue.component("tab", {
  template: `
  <div v-show="isActive"><slot></slot></div>
  
  `,
  props: {
    name: { requierd: true },
    selected: { default: false }
  },
  data() {
    return {
      isActive: false
    };
  },
  mounted() {
    this.isActive = this.selected;
  },

  computed: {
    href() {
      return "#" + this.name.toLowerCase().replace(/ /g, "-");
    }
  }
});

/* ======================================================== */

Vue.component("coupon", {
  template: `
  <div class="field">
    <input class="input is-promary"  placeholder="Enter your coupon code" @blur="onCouponAplied">
</div>
  `,
  methods: {
    onCouponAplied() {
      // this.$emit("applied");
      // the old exemple in th first coouple lines of code
      // Event.$emit('applied');
      // after we create the class on line 12
      Event.fire("applied");
    }
  }
});

/* ======================================================== */


// if you have multiple slots you can specify ecery slot with a name="" tag and in html you can rapp a template tag with a slot="the slot name " 
// if you don't specify the slot name it will be the default slot and you can write without any preperations 
// what you write inside a slot section will be replaced as soon as you write somthing in the html slot so don't be surprised!
Vue.component("modal-long", {
  template: `
    <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">

    <header class="modal-card-head">
      <p class="modal-card-title">
      <slot name="header"></slot>
      </p>
      <button class="delete" aria-label="close"></button>
    </header>

    <section class="modal-card-body">
      <slot></slot>
    </section>


   <slot name="footer"></slot>
  </div>
</div>
  `
});

/* ======================================================== */
new Vue({
  el: "#root",
  data() {
    return {
      showModel: false,
      couponApplied: false
    };
  },
  methods: {
    onCouponAplied() {
      console.log("it was applied from the global !");
      this.couponApplied = true;
    }
  },

  // here we can liten to events from the Event.$on()
  created() {
    // old way before creating the class tool
    // Event.$on('applied', ()=> console.log('respose  to event listener'));
    // after creating the class tool we refactore it to be like :

    Event.listen("applied", () => (this.couponApplied = true));
  }
});

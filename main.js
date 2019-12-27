Vue.component("sam-message", {

    props: ['title', 'body'],

    data(){
      return{
        showMessage : true,

      }
    }
    ,
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

Vue.component('modal',{

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
 

new Vue({
    el: "#root",
    data(){
      return{
        showModel: false,

      }
    }

 

});

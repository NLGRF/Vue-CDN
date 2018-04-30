Vue.component('Non',{
  data:function(){
    return{
      count:0
    }
  },
  template:'<button v-on:click="count++">Clike : {{count}}</button>'
});

Vue.component('Post',{
  template:'<h3>New Post</h3>'
});

new Vue({
  el:"#vue-app"
})

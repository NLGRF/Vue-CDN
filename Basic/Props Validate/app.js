Vue.component('Non',{
  data:function(){
    return{
      count:0
    }
  },
  template:'<button v-on:click="count++">Clike : {{count}}</button>'
});

Vue.component('Post',{
  props: ['title'],
  template:'<h3>{{title}}</h3>'
});

Vue.component('Showview',{
  props:{
    title:{
        type:String,
        required:true
    },
    view:{
        type:Number,
        default:0
    }
  },
  template:'<h3>{{title}} | {{view}}</h3>'
});

new Vue({
  el:"#vue-app"
})

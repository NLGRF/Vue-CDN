new Vue({
  el:"#vue-app",
  data:{
    name:"Nonpavit Detbun",
    job:"Front-End Developer",
    age:22,
    status:false
  },
  methods: {
    getName:function() {
      return this.name
    },
    setName:function(n) {
      return this.name=n
    }
  }
})

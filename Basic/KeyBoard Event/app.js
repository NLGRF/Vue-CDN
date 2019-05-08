new Vue({
  el:"#vue-app",
  data:{
    name:"Nonpavit Detbun",
    job:"Front-End Developer",
    age:22,
    status:false,
    count:0,
    github: 'https://github.com/NLGRF'
  },
  methods: {
    getName:function() {
      return this.name
    },
    setName:function(n) {
      return this.name=n
    },
    addAge:function() {
      this.age++;
      console.log(this.age);
    },
    subtractAge:function(){
      this.age--;
      console.log(this.age);
    },
    addCount:function(){
      this.count++;
      console.log(this.count);
    }
  }
})

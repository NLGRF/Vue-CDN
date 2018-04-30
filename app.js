var post = new Vue({
    el:"#post",
    data:{
      title:'Project Name',
      message:'Project Details'
    }
});

var comment = new Vue({
  el:"#comment",
  data:{
    text:'อากาศดีมาก'
  }
});

var likeSystem = new Vue({
  el:"#likeSystem",
  data:{
    like:false
  },
  methods: {
    changeLike:function() {
      console.log("like");
    }
  }
});

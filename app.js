new Vue({
  el:"#vue-app",
  data:{
    newData:{
      empName:'',
      salary:0
    },
    empGroup: [
      {
        empName: "Abc",
        salary:5000
      },
      {
        empName: "Efg",
        salary:3000
      }
    ]
  },
  methods: {
    addEmp:function() {
      this.empGroup.push({
        empName: this.newData.empName,
        salary: this.newData.salary
      });
      this.newData.empName='';
      this.newData.salary=0;
    }
  },
  computed:{
     // แยกมาจัดการด้านการคำนวณ
      summation:function(){
        var sum = this.empGroup.reduce(function(value, data) {
          return value + Number(data.salary);
          // 0+5000 = 5000
          // 5000+4000 = 9000
        }, 0);
        return sum;
      },
      avg:function(){
        var sum = this.empGroup.reduce(function(value, data) {
          return value + Number(data.salary);
          // 0+5000 = 5000
          // 5000+4000 = 9000
        }, 0);
        return sum/this.empGroup.length;
      }
    }
});

new Vue({
    el:'#app',
    data:{
        items:[
            {
                name:"Coffee",
                price:15,
                url:"http://www.cygnetstrategies.com/wp-content/uploads/2011/05/400x400.png",
                active:false
            },
            {
                name:"Washing machine",
                price:500,
                url:"http://www.cygnetstrategies.com/wp-content/uploads/2011/05/400x400.png",
                active:false        
            },
            {
                name:"Comics",
                price:250,
                url:"http://www.cygnetstrategies.com/wp-content/uploads/2011/05/400x400.png",
                active:false
            }
        ]
    },
    methods:{
        selected:function(item){
            item.active=!item.active
        },
        total:function(){
            var total=0;
            this.items.forEach(function(item){
                if(item.active){
                    total+=item.price;
                }
            });
            return total;
        }
    }
})
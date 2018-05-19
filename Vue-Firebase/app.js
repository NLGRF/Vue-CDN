new Vue({
    el:"#vue-app",
    data:{
        messageText:'',
        messages:[],
        name:'Non'
    },
    methods:{
        storeMessage:function(){
            this.messages.push({text:this.messageText,name:this.name})
            this.messagesText=''
            console.log(this.messages);
            
        }
    }
})
// manage database
const database = firebase.database();
const messageRef = database.ref("message");

new Vue({
    el:"#vue-app",
    data:{
        messageText:'',
        messages:[],
        name:'Non'
    },
    methods:{
        storeMessage:function(){
            messageRef.push({text:this.messageText,name:this.name})
            this.messagesText=''
            console.log(this.messages);
            
        }
    },
    created(){

    }
})
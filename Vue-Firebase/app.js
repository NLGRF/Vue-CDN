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
            // console.log(this.messages);
            
        },
        deleteMessage:function(message){
            messageRef.child(message.id).remove()
        }
    },
    created(){
        messageRef.on('child_added',snapshot=>{
            // message
            this.messages.push({...snapshot.val(),id:snapshot.key})
            // console.log(snapshot.val());

        })
        messageRef.on('child_removed',snapshot=>{
            const deleteText = this.messages.find(message=>message.id == snapshot.key)
            const index = this.messages.indexOf(deleteText)
            this.messages.splice(index,1)

        })
    }
})
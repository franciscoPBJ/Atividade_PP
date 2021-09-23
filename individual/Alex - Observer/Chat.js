/*jshint esversion:6*/

import Message from './Message';
import Observer from './Observer';

class Chat extends Observer {

    constructor(id, users = [], messages = []){

        super();

        this.id = id;
        this.users = users;
        this.messages = messages;

    }

    renderMessages(){

        console.clear();

        this.messages.forEach(item=>{

            console.log(`${item.from}: ${item.message}`);

        });

    }

    addUser(user){
        this.emit('new-user', user);
        this.users.push(user);
    }

    sentMessage(message, from){

        this.emit('new-message');
        this.messages.push(new Message(message, from));

    }

    getMessages(){
        return this.messages;
    }

    getUsers(){
        return this.users;
    }

}

exports = Chat;
/*jshint esversion:6*/

import Message from './Message';

class Chat {

    constructor(id, users = [], messages = []){

        this.id = id;
        this.users = users;
        this.messages = messages;

    }

    addUser(user){
        this.users.push(user);
    }

    sentMessage(message, from){

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
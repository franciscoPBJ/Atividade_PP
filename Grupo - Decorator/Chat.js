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

    removeUser(userID){

        let newUsers = [];
        let oldUsers = this.getUsers();

        for(let i = 0; i < oldUsers.length; i++){

            if(oldUsers[i].id != userID) newUsers.push(oldUsers[i]);

        }

        this.users = newUsers;
        return this.getUsers();

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
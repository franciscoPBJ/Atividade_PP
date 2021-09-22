/*jshint esversion:6*/

import User from './User';
import Chat from './Chat';

let Alex = new User('user1', 'Alex', 21);
let Francisco = new User('user2', 'Francisco', 23);
let PauloRicardo = new User('user3', 'Paulo Ricardo', 62);
let Amabily = new User('user4', 'Amábily', 20);
let Luciana = new User('user5', 'Luciana', 23);
let Fabiola = new User('user6', 'Fabíola', 23);

let chat = new Chat('chat');
chat.addUser(Alex);
chat.addUser(Francisco);
chat.addUser(Amabily);
chat.addUser(PauloRicardo);
chat.addUser(Luciana);
chat.addUser(Fabiola);

chat.sentMessage('Olá', Alex.getID());

// Padrão Decorator
// Nossa classe Chat não possuía nenhum método para remoção de usuários da conversa
// Nós adicionamos essa funcionalidade em tempo de execução, seguindo os princípios do padrão Decorator.
chat.removeUser = function(userID){

    let newUsers = [];
    let oldUsers = chat.getUsers();

    for(let i = 0; i < oldUsers.length; i++){

        if(oldUsers[i].getID() != userID) newUsers.push(oldUsers[i]);

    }

    chat.users = newUsers;
    return chat.getUsers();

};

chat.removeUser('user3');
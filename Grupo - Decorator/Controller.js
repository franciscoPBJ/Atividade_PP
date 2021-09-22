/*jshint esversion:6*/

import User from './User';
import Chat from './Chat';

let Alex = new User('user1', 'Alex', 21);
let Francisco = new User('user2', 'Francisco', 35);
let Amabily = new User('user3', 'Amábily', 20);
let PauloRicardo = new User('user4', 'Paulo Ricardo', 62);
let Luciana = new User('user5', 'Luciana', 23);

let chat = new Chat('chat');
chat.addUser(Alex);
chat.addUser(Francisco);
chat.addUser(Amabily);
chat.addUser(PauloRicardo);
chat.addUser(Luciana);

chat.sentMessage('Olá', Alex.getID());
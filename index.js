'use strict';

const ChatApp = require('./chatapp');

let webinarChat = new ChatApp('webinar');
let facebookChat = new ChatApp('=========facebook');
let vkChat = new ChatApp('---------vk');

let chatOnMessage = require('./behaviors').chatOnMessage;
let preparingForAnswer = require('./behaviors').preparingForAnswer;
let chatOnClose = require('./behaviors').chatOnClose;

webinarChat.on('message', chatOnMessage).on('message', preparingForAnswer);
facebookChat.on('message', chatOnMessage);
vkChat.setMaxListeners(2).on('message', chatOnMessage).on('message', preparingForAnswer).on('close', chatOnClose);


// Закрыть вконтакте
setTimeout(() => {
    console.log('Закрываю вконтакте...');
    vkChat.removeListener('message', chatOnMessage).removeListener('message', preparingForAnswer);
    vkChat.close();
}, 10000);


// Закрыть фейсбук
setTimeout(() => {
    console.log('Закрываю фейсбук, все внимание — вебинару!');
    facebookChat.removeListener('message', chatOnMessage).removeListener('message', preparingForAnswer);
}, 15000);


// Close webinar
setTimeout(() => {
    console.log('Пора спать! :)');
    webinarChat.removeAllListeners('message');
}, 30000);

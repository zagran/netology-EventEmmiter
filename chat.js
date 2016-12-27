'use strict';

const EventEmitter = require('events');

class ChatApp extends EventEmitter {
    /**
     * @param {String} title
     */
    constructor(title) {
        super();

        this.title = title;

        // Посылать каждую секунду сообщение
        setInterval(() => {
            this.emit('message', `${this.title}: ping-pong`);
        }, 1000);
    }

    close() {
        this.emit('close', `${this.title}: close event`);
    }
}

let webinarChat = new ChatApp('webinar');
let facebookChat = new ChatApp('=========facebook');
let vkChat = new ChatApp('---------vk');


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

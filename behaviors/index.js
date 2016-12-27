'use strict';

let chatOnMessage = (message) => {
    console.log(message);
};

let preparingForAnswer = () => {
    console.log('preparing for an answer...');
};

let chatOnClose = () => {
    console.log('VK Chat closed :(');
};

module.exports = {
    chatOnMessage : chatOnMessage,
    preparingForAnswer : preparingForAnswer,
    chatOnClose: chatOnClose
};
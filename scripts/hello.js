'use strict';
module.exports = robot => {
    robot.hear(/hello>/i, msg => {
        const username = msg.message.user.name;
        msg.send('hello, ' + username);
    })

    robot.hear(/lot>/i, msg => {
        const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
        msg.send(lots[Math.floor(Math.random() * lots.length)] + ', ' + msg.message.user.real_name);
    })
}
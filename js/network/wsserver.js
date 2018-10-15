/**
 * Created by dm-md on 2018/10/12.
 */

var WebSocketServer = require('ws').Server;

wss = new WebSocketServer({port:8281});

wss.on('connection',new function (ws) {
    console.log("server connected.......");
    wss.on('message',new function (message) {
        console.log("message......."+message);
        ws.send('hello I\'m carter server');
    })
})
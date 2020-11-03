var input_message = null;

// set chat screen position lowermost
window.onload = function() {
    var obj = document.getElementById('chat-screen');
    obj.scrollTop = obj.scrollHeight;
} 

function send_message() {
    let input_message = document.getElementById("typing-input").value;
    document.getElementById("typing-input").value = '';
    if (input_message != '') {
        add_new_message(input_message)
        var obj = document.getElementById('chat-screen');
        obj.scrollTop = obj.scrollHeight;
    }
    socket.send(JSON.stringify(
        {
            message: input_message.value
        }
    ));
    input_message.value = "";
}

// appendChildなどを使って画面に追加していくのは間違いではない
// けれども、その場合はすべてのデータを加えないといけなくなるから大変
// そのため、DBに保存したものをスクロールに応じて拾ってくる、という方法にする
// 一応、見た目だけappendChildのやり方で作って、あとからやり直す感じ
function add_new_message(input_message) {
    let current_time = new Date();
    let send_time = current_time.getHours() + ":" + current_time.getMinutes();
    test = '<div class="talk-from-me"><div class="send-time" style="font-size: 90%; margin-top: auto; margin-left: auto;">' + send_time + '</div><div class="message">' + input_message + '</div><img class="icon" src="imgs/example.jpg" alt="profile pict"></img></div>';
    document.getElementById('chat-box').insertAdjacentHTML('beforeend', test);
    return false;
}
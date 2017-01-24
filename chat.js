var log = document.getElementById('chat-log');

//show message on the chat log
function submit (text) {

	log.innerHTML +=  `<li class="chat-record chat-record-theme-1"><a href="#!" class="chat-record-avatar chat-avatar"><img src="http://placekitten.com/64/64" alt=""></a><div class="chat-record-bubble"><div class="chat-record-meta"><a class="chat-record-meta-link" href="#!">16 minutes ago</a></div><div class="chat-record-heading"><h2 class="chat-record-heading">Fluffy McFlufferson</h2></div><div class="chat-record-content">` + document.getElementById('message-input').value; + `</div></div></li>`

	messages.personOne.push(document.getElementById('message-input').value);
}

//change every other message to have its different theme

//object to store messages

messages = {
	personOne: [
	]
}
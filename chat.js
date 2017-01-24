// Define variables
var // Chat elements
    chatLog = document.querySelector('.js-chat-log'),
    chatSubmitBtn = document.querySelector('.js-chat-submit-button'),
    // Chat data
    data = {
      messages: []
    };

/**
 * Generic date format function
 * @tutorial http://stackoverflow.com/a/25275808/2057448
 */
var formatDate = function (date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
};

// Send a message
chatSubmitBtn.addEventListener('click', function (event) {
  var date = new Date(),
      dateFormatted = formatDate(date);
  // Add message to chat log when clicked
  chatLog.innerHTML += '<li class="chat-record chat-record-theme-1"><a href="#!" class="chat-record-avatar chat-avatar"><img src="https://placekitten.com/64/64" alt=""></a><div class="chat-record-bubble"><div class="chat-record-meta"><a class="chat-record-meta-link" href="#!">' + dateFormatted + '</a></div><div class="chat-record-heading"><h2 class="chat-record-heading">Fluffy McFlufferson</h2></div><div class="chat-record-content">' + document.getElementById('message-input').value; + '</div></div></li>';

  // Save message data to JS object
  data.messages.push({
    'content': document.getElementById('message-input').value,
    'date': date,
    'dateFormatted': dateFormatted
  });

  // Reset textarea value
  document.getElementById('message-input').value = '';

  console.log(data);
});

const vonage = require('vonage');

const vonageClient = new vonage({
  apiKey: 'ac22bae6',
  apiSecret: 'DV)vSH%z^45gvz9zI2Sih',
});

function sendSms(to, from, text) {
  vonageClient.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
      console.log('Error:', err);
    } else {
      if (responseData.messages[0].status === "0") {
        console.log("Message sent successfully.");
      } else {
        console.log(`Message failed with status: ${responseData.messages[0]['error-text']}`);
      }
    }
  });
}

module.exports = sendSms;
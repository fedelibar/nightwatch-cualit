const Events = require('events');
const request = require('request');

module.exports = class HttpPost extends Events {
  command(url, headers, body, onSuccess) {
    request.post({
      headers: headers,
      url: url,
      body: JSON.stringify(body)
    },
      (err, res, body) => {
        if (err) {
          console.log(err);
        } else {
          onSuccess(res, JSON.parse(body));
          this.emit('complete');
        }
      })
  }
}
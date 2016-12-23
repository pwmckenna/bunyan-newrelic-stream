# bunyan-newrelic-stream

This library will send error logs to your newrelic account. It assumes that your application has a newrelic config file all set up.

```js
import NewRelicStream from 'bunyan-newrelic-stream';
bunyan.createLogger({
  ...
  streams: [{
    level: 'error',
    type: 'raw',
    stream: new NewRelicStream()
  }]
});
```

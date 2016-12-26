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

### What data is sent to newrelic?

Whatever is in `err`. If you log an error directly `logger.trace(new Error())`, or via the `err` key `logger.trace({ err: new Error() })`, this library will receive the serialized contents of that error. This is generally done by the [standard bunyan error serializer](https://github.com/trentm/node-bunyan#standard-serializers), but can be configured via the serializers option passed into bunyan. I recommend https://github.com/pwmckenna/bunyan-error-serializer :)

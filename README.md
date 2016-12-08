# bunyan-newrelic-stream

```
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

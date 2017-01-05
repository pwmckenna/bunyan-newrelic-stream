# 1.1.0

Added support for non-object `err` values. Actual `Error` objects are recommended, but are no longer required.

```js
logger.error('hi, I am a bare string');
```
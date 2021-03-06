import createBunyanNewRelicStream from './create-bunyan-newrelic-stream';

export default createBunyanNewRelicStream((...args) => {
    const newrelic = require('newrelic');
    newrelic.noticeError(...args);
});

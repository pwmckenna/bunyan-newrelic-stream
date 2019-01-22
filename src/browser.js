import createBunyanNewRelicStream from './create-bunyan-newrelic-stream';

export default createBunyanNewRelicStream((...args) => {
    window.newrelic && window.newrelic.noticeError(...args);
});

import bunyan from 'bunyan';
import NewRelicStream from '../src';
import Q from 'q';
import newrelic from 'newrelic';
import errorSerializer from 'bunyan-error-serializer';
import PrettyStream from 'bunyan-prettystream';
import VError from 'verror';

const prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

it('bunyan-newrelic-stream', () => {
    const logger = bunyan.createLogger({
        name: 'bunyan-newrelic-stream-test',
        serializers: {
            err: errorSerializer
        },
        streams: [{
            level: 'trace',
            type: 'raw',
            stream: prettyStdOut
        }, {
            level: 'error',
            type: 'raw',
            stream: new NewRelicStream()
        }]
    });

    logger.error(new VError({
        cause: new Error('bunyan-newrelic-stream-test'),
        info: {
            answer: 42,
            statusCode: 300
        }
    }));

    const defer = Q.defer();
    newrelic.shutdown({ collectPendingData: true }, defer.makeNodeResolver());
    return defer.promise;
});
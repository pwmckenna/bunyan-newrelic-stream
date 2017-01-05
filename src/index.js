import newrelic from 'newrelic';
import { EventEmitter } from 'events';

export default class extends EventEmitter {
    write({ err, ...options }) {
        if (
            typeof err === 'object' &&
            err.hasOwnProperty('stack') &&
            err.hasOwnProperty('message') &&
            err.hasOwnProperty('name')
        ) {
            const {
                stack,
                message,
                name,
                ...errRest
            } = err;
            const customParameters = { ...options, ...errRest };
            newrelic.noticeError(err, customParameters);
        } else {
            newrelic.noticeError(err, options);
        }
    }
}

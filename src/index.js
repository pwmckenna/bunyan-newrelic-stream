import newrelic from 'newrelic';
import { EventEmitter } from 'events';

export default class extends EventEmitter {
    write({ err, ...options }) {
        const {
            stack,
            message,
            name,
            ...errRest
        } = err;
        const customParameters = { ...options, ...errRest };
        newrelic.noticeError(err, customParameters);
    }
}

import { EventEmitter } from 'events';

export default noticeError => class extends EventEmitter {
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
            noticeError(err, customParameters);
        } else {
            noticeError(err, options);
        }
    }
}

import newrelic from 'newrelic';
import { EventEmitter } from 'events';

export default class extends EventEmitter {
    write({ name, message, stack, ...info }) {
        newrelic.noticeError({ name, message, stack }, info);
    }
}

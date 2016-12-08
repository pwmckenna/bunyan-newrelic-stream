import newrelic from 'newrelic';
import { EventEmitter } from 'events';

export default class extends EventEmitter {
    write(error) {
        newrelic.noticeError(error);
    }
}

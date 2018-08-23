import { EventEmitter } from 'events';

export default class Store extends EventEmitter {
    constructor(actions) {
        super();

        this.actions = actions;

        this.bindActions();
    }

    bindActions() {
        Object.entries(this.actions).forEach((entry) => {
            const [name, action] = entry;

            this[name] = (payload) => this[action.method](payload, action.events);
        });
    }
}

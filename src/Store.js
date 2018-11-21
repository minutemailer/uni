export default class Store {
    subscribers = [];

    setState(nextState) {
        const prevState = this.state;

        this.state = Object.assign({}, this.state, nextState);
        this.emit(this.state, nextState, prevState);
    }

    emit(...args) {
        this.subscribers.forEach(cb => cb.call(null, ...args));
    }

    subscribe(cb) {
        this.subscribers.push(cb);

        return {
            unsubscribe: () => {
                this.subscribers = this.subscribers.filter(subscribedCb => subscribedCb !== cb);
            }
        };
    }

    dispatch = (payload = {}) => {
        const { type, ...data } = payload;
        const method = `on${type.charAt(0).toUpperCase() + type.slice(1)}`;

        if (!(method in this) || typeof this[method] !== 'function') {
            console.warn(`Handler missing for action ${method}`);

            return;
        }

        const updatedState = this[method](data);

        if (updatedState) {
            this.setState(updatedState);
        }
    };
}

import { createActions, Store } from '../../index';
import axios from 'axios';

class Contacts extends Store {
    constructor(actions) {
        super(actions);

        this.state = {
            contacts: []
        };
    }

    onAddContact(payload, events) {
        this.emit(events.init);

        axios.get('https://uifaces.co/api?limit=1&random')
            .then((response) => {
                if (response.data.error) {
                    throw new Error(response.data.error);
                }

                this.state.contacts.push(response.data[0]);

                this.emit(events.done, this.state.contacts);
            }).catch(() => {
                this.emit(events.error, 'Failed to fetch');
            });
    }
}

const contacts = new Contacts(createActions([
    'addContact',
]));

export default contacts;

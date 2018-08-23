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

        axios.get('https://randomuser.me/api')
            .then((response) => {
                if (response.data.error) {
                    throw new Error(response.data.error);
                }

                const contact = response.data.results[0];

                this.state.contacts.push(contact);
                this.emit(events.done, contact);
            }).catch(() => {
                this.emit(events.error, 'Failed to fetch');
            });
    }
}

const contacts = new Contacts(createActions([
    'addContact',
]));

export default contacts;

import { Store } from '../../src';
import update from 'immutability-helper';

class Contacts extends Store {
    state = {
        loading: false,
        contacts: [],
        failed: false,
        failedReason: null,
    };

    onFetchContact() {
        fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then((json) => {
                if (json.error) {
                    throw new Error(json.error);
                }

                this.setState({ contacts: update(this.state.contacts, { $push: json.results }), loading: false });
            }).catch((ex) => {
                this.setState({ loading: false, failed: true, failedReason: ex });
            });

        return { loading: true };
    };
}

export default new Contacts();

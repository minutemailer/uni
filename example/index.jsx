import React from 'react';
import { render } from 'react-dom';
import Store from './Stores/Contacts';
import { withStore } from '../src';

const ContactsComponent = ({ state, dispatch }) => (
    <div>
        <button disabled={state.loading} onClick={() => dispatch({ type: 'fetchContact' })} className="btn">
            Fetch{(state.loading) ? 'ing' : ''} contact
        </button>

        <div className="contacts">
            {state.contacts.map(contact => (
                <article key={contact.login.uuid}>
                    <img src={contact.picture.thumbnail} alt="" />
                    <strong>{Object.values(contact.name).map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')}</strong>
                </article>
            ))}
        </div>
    </div>
);

const Contacts = withStore(ContactsComponent, Store);

render(
    <Contacts />,
    document.querySelector('#root'),
);

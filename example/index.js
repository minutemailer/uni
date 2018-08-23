import Contacts from './Stores/Contacts';

const btn = document.getElementById('add');

btn.addEventListener('click', Contacts.addContact, false);

function resetBtn() {
    btn.removeAttribute('disabled');
    btn.innerHTML = 'Add contact';
}

Contacts.on('addContact.init', () => {
    btn.setAttribute('disabled', 'disabled');
    btn.innerHTML = 'Adding..';
    console.log('started adding contact');
});

Contacts.on('addContact.done', (contacts) => {
    resetBtn();

    console.log('finished adding contact', contacts);
});

Contacts.on('addContact.error', (error) => {
    resetBtn();

    console.log('failed adding contact', error);
});

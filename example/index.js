import Contacts from './Stores/Contacts';

const btn = document.getElementById('add');
const contactsContainer = document.getElementById('contacts');

btn.addEventListener('click', Contacts.addContact, false);

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function renderContact(data) {
    const container = document.createElement('article');

    container.innerHTML = `
        <img src="${data.picture.thumbnail}" alt="">
        <strong>${capitalize(data.name.first)} ${capitalize(data.name.last)}</strong>
    `;

    return container;
}

function resetBtn() {
    btn.removeAttribute('disabled');
    btn.innerHTML = 'Add contact';
}

Contacts.on('addContact.init', () => {
    btn.setAttribute('disabled', 'disabled');
    btn.innerHTML = 'Adding..';
    console.log('started adding contact');
});

Contacts.on('addContact.done', (contact) => {
    resetBtn();

    contactsContainer.appendChild(renderContact(contact));
    console.log('finished adding contact', contact);
});

Contacts.on('addContact.error', (error) => {
    resetBtn();

    console.log('failed adding contact', error);
});

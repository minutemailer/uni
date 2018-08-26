# Minutemailer Uni

Simple, lightweight Flux inspired uni-directional dataflow architecture.
The goal of Minutemailer Uni is to only include the bare minimum of what we need
and only extend it when needed.

## Differences from Flux

The main difference between Uni and Flux is that there is no dispatchers. Dispatchers, at least for now,
was overkill and an unnecessary layer. Other than that the boilerplate code has been reduced by automating event names, action methods and by merging actions and stores.

## Usage

As mentioned, we no longer need to create a file for each stage in the dataflow, including constants for actions and event names.

Creating actions:

```js
import { createActions } from 'uni';
  
const actions = createActions([
    'addContact',
    'editContact',
    'destroyContact',
]);
```

What `createActions` does is to transform your array of actions into "action objects". The output from the example will be as follows:

```js
{
    addContact: {
        method: 'onAddContact',
        events: {
            init: 'addContact.init',
            done: 'addContact.done',
            error: 'addContact.error',
        }
    },
    editContact: {
        method: 'onEditContact',
        events: {
            init: 'editContact.init',
            done: 'editContact.done',
            error: 'editContact.error',
        }
    },
    destroyContact: {
        method: 'onDestroyContact',
        events: {
            init: 'destroyContact.init',
            done: 'destroyContact.done',
            error: 'destroyContact.error',
        }
    }
}
```

When we have our actions we can create the **Store**.

```js
import { Store } from 'uni';
  
class Contacts extends Store {
    constructor(actions) {
        super(actions);
  
        this.state = {
            contacts: []
        };
    }
  
    onAddContact(payload, events) {
        // code
    }
  
    onEditContact(payload, events) {
        // code
    }
  
    onDestroyContact(payload, events) {
        // code
    }
}

const contacts = new Contacts(actions);
```

The Uni Store takes care of handling the actions and binding the methods. The final step is to use the store.

```js
import Contacts from './Contacts';
  
Contacts.on('addContact.init', () => {
    // event handler
});
  
Contacts.addContact(payload);
```

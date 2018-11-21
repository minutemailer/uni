<h1 align="center">Minutemailer Uni</h1>

<p align="center">
Simple, lightweight Redux/Unistore inspired uni-directional dataflow architecture.
</p>
<p>&nbsp;</p>

## Core concept

The goal of Uni is to reduce boilerplate to barely none and to have free control of what happens in the dataflow.
So what is happening?

```
+ -- [Action] ---------> [Store handler] -- +
|                                           |
|                                           |
+ -- [View change] <---- [Store change] <-- +
```

The store only has one task and that is to update its internal state. 
The state is emitted to all listeners (views).

## Usage

Create a class that extends a Uni Store. Action handlers are automatically triggered, the
only thing you need to do is to create the handler. Inside the handler you can update the state manually
with `this.setState({ ... })` or by returning an object. In the later case, the state is updated automatically.

```
class Contacts extends Store {
    state = {
        contacts: []
    }
  
    onAddContact(payload) {
        // this.setState(...) or return an object
        // payload contains the data set when the action was dispatched
    }
}

export default new Contacts();
```

Use the store like this:

```
import Contacts from './stores/Contacts';

const subscriber = Contacts.subscribe(console.log);

// subscriber.unsubscribe() to unsubscribe from the state changes

Contacts.dispatch({
    type: 'addContact', // Consider using defined enum constants
    name: 'Jane Doe'
});
```

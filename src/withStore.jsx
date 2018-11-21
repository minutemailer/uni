import React from 'react';

const withStore = (Component, Store) => {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = Store.state;
        }

        componentDidMount() {
            this.subscriber = Store.subscribe(state => this.setState(state));
        }

        componentWillUnmount() {
            this.subscriber.unsubscribe();
        }

        render() {
            return <Component state={this.state} dispatch={Store.dispatch} {...this.props} />;
        }
    }
};

export default withStore;

const createActions = (actions) => {
    const mappedActions = {};

    actions.forEach((action) => {
        mappedActions[action] = {
            method: `on${action.charAt(0).toUpperCase() + action.slice(1)}`,
            events: {
                init: `${action}.init`,
                done: `${action}.done`,
                error: `${action}.error`,
            }
        };
    });

    return mappedActions;
};

export default createActions;

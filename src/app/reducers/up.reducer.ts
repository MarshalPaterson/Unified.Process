export const ups = (state: any = [], {type, payload}) => {
    switch (type) {
        case 'GET_UP_PROJECTS':
            return payload;
        case 'ADD_CAMPAIGNS':
            return payload;
        case 'CREATE_CAMPAIGN': 
            return [...state, payload];
        case 'UPDATE_CAMPAIGN':
            return state.map(up => {
                return up.token === payload.token ? Object.assign({}, up, payload): up;
            });
        case 'DELETE_CAMPAIGN': 
            return state.filter(up => {
                return up.token !== payload.token;
            });
        default: 
            return state;
    }
}
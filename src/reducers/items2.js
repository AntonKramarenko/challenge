export function items2(state = [], action) {
    switch (action.type) {
        case 'ITEMS2_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}

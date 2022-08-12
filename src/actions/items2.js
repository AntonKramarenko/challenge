export function items2FetchDataSuccess(items) {
    return {
        type: 'ITEMS2_FETCH_DATA_SUCCESS',
        items
    };
}



export function items2FetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(items2FetchDataSuccess(items)))
            .catch(e => console.log(e));
    };
}
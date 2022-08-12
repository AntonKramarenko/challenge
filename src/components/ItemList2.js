import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { items2FetchData } from '../actions/items2';
import NestedList from './nestedList';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://5af1eee530f9490014ead8c4.mockapi.io/items');
    }

    render() {
        return (
            <NestedList filteredData={this.props.items2} />
        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items2: PropTypes.array.isRequired,
};

const findChildren = (item, data) => {
    let childrenArr = data
        .filter((x) => x.parent_id === item.id)
        .map((x) => findChildren(x, data));

    if (childrenArr.length) item.children = childrenArr

    return item;
};

const setNestedItems = (state) => {
    return state.items
        .filter((x) => x.parent_id === 0)
        .map((x) => findChildren(x, state.items));

}

const mapStateToProps = (state) => {

    return {
        items2: setNestedItems(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(items2FetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

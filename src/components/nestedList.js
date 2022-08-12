import React, { Component } from 'react';
import '../app.css'

class NestedList extends Component {
    render() {
        return (
            <ul>
                {this.props.filteredData && this.props.filteredData.map(m => {
                    return (
                        <div key={m.id} >
                            <li className='nestedList__item'>
                                {m.label}
                            </li>
                            {m.children && <NestedList filteredData={m.children} />}
                        </div>
                    );
                })}
            </ul>
        )
    }
}

export default NestedList
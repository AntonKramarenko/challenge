import React, { Component } from 'react';
import ItemList from './components/ItemList';
import ItemList2 from './components/ItemList2';

class App extends Component {

    render() {
        return (
            <div className='App'>
                <h1>The challenge</h1>
                <div className='App__lists'>
                    <ItemList />
                    <ItemList2 />
                </div>
            </div>
        );
    }
}

export default App
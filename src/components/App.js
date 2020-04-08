import React from 'react';

import Post from './Post';

export default class App extends React.Component {
    render() {
        return (
           <div className="lista-comments">
                <h1>Lista React</h1>

                <Post title="Aprendendo React" />
                <Post title="Listando Linguagens" />
                <Post title="GitHub" />
           </div>
        )
    }
}
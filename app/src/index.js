import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

const Main = () => {
    return (
        <>
            <App/>
        </>
    );
}

ReactDom.render(<Main/>, document.getElementById('root'));
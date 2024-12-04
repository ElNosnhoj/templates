/*================================================================
 * File: index.jsx
 * Desc: entry file
 *==============================================================*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import styled from 'styled-components'
import "styles/base.css"

const Container = styled.div`
`
const App = ()=>{
    return (
        <Container className="App">
            Hello world
        </Container>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)



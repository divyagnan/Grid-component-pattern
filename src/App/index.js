import React from 'react'
import {injectGlobal} from 'styled-components'
import Grid from './Grid'
import Nav from './components/Nav'
import Body from './components/Body'
import Cat from './components/Cat'
import Food from './components/Food'
import SpecialButton from './components/SpecialButton'
injectGlobal`
html,body,#root{
    height:100%;
}
body{
    margin:0;
}
`
const App = () =>(
    <Grid>
        <Nav>
            <SpecialButton>Button</SpecialButton>
            <div style={{gridArea:"Title"}}>Title</div>
        </Nav>
        <Body>
            <Cat/>
            <Food/>
        </Body>
    </Grid>
)

export default App
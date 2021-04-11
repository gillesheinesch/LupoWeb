import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://sambarros.com">
                <img src="https://www.freschkescht.lu/img/logo.png" width="50" height="50" alt="freschkescht.lu" />
            </Wrapper>
        )
    }
}

export default Logo;

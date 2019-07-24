import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';
import Wave from '../Wave';
import './Header.css';

const HeaderWrapper = styled.div`
    position: relative;
`

const HeaderBackground = styled.div`
    background: url(${props => props.image});
    background-size: cover;
    background-position: center;
    height: 720px;

    @media (max-width: 720px) {
        height: 600px;
    }

`

const HeaderLink  = styled.div`
    position: absolute;
    top: 0; 
    left: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 10px;

    a {
        text-decoration: none;
        text-transform: capitalize;
        color: #fff;
        margin: 0 40px;
        padding: 10px;
        align-self: center;
        font-size: 24px;
        font-weight: 600;
        transition: 0.8s cubic-bezier(0.4, 0.46, 0.4, 1)
    }

    a:hover {
        color: #000;
        background: #fff;
        border-radius: 0 0 8px 8px;
    }

    @media (max-width: 720px) {
        a {
            padding: 8px;
            margin: 0 20px;
            font-size: 14px;
        }

        a:hover {
        color: #000;
        background: #fff;
        border-radius: 0 0 5px 5px;
        }   
    }

`

const HeaderLogo = styled.img`
    height: 40px;
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const Header = (props) => (
    <HeaderWrapper>
        <HeaderLink>
            <HeaderLogo src={props.logo} />
            <Link to='/'>home</Link>
            <Link to='/projects'>projects</Link>
            <Link to='/about'>about</Link>
            <Link to='/contact'>contact</Link>
        </HeaderLink>
        <h2>ConstrodekorPools</h2>
        <HeaderBackground image={props.image}>
            <WaveBottom>
                <Wave />
            </WaveBottom>
        </HeaderBackground>
    </HeaderWrapper>
)

export default Header;
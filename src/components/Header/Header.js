import React, { Component } from 'react'
import PropTypes from 'prop-types';
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
        height: 640px;
    }

`

const HeaderLink  = styled.div`
    position: fixed;
    top: 0; 
    left: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    z-index: 100;
    transition: 0.8s cubic-bezier(0.4, 0.46, 0.4, 1);


    ${({scrolled}) => scrolled && `
        background: rgba(0, 0, 0, 0.8);
        padding: 10px 0;
        backdrop-filter: blur(10px);
    `}

    a {
        text-decoration: none;
        text-transform: capitalize;
        color: #fff;
        margin: 0 30px;
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
            margin: 0 5px;
            font-size: 14px;
        }

        a:hover {
        color: #000;
        background: #fff;
        border-radius: 0 0 4px 4px;
        }   
    }

`

const HeaderLogo = styled.img`
    padding: 10px;
    height: 40px;

    @media(max-width: 720px) {
        height: 30px;
    }

`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -12px;
`

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrollHeight = window.pageYOffset

        if(scrollHeight > 60) {
            this.setState({ scrolled: true });
        }
        else {
            this.setState({ scrolled: false });
        }
    }

    render() {
        return (
            <HeaderWrapper>
                <HeaderLink scrolled={this.state.scrolled}>
                    <HeaderLogo src={this.props.logo} />
                    <Link to='/'>home</Link>
                    <Link to='/projects'>our projects</Link>
                    <Link to='/about'>about us</Link>
                    <Link to='/contact'>contact us</Link>
                </HeaderLink>
                <h2>ConstrodekorPools</h2>
                <HeaderBackground image={this.props.image}>
                    <WaveBottom>
                        <Wave />
                    </WaveBottom>
                </HeaderBackground>
            </HeaderWrapper>
        )
    }
}

Header.propTypes = {
    scrolled: PropTypes.bool
}


export default Header;
import React from 'react';
import Form from '../form/Form';
import styled from "styled-components";

 



const Header = () => {
    return (
        <HeaderContainer>
            <HeaderInner>
                <p>MY TODO LIST</p>
                <p>REACT</p>
            </HeaderInner>
            <Form></Form>
        </HeaderContainer>        
    );
};

const HeaderContainer = styled.div`
    border-radius: 20px;
    width: 100%;
    background-color: var(--dark-4);
    box-shadow: var(--shadow);
`;

const HeaderInner = styled.div`
    display  : flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 20px 0;
    box-sizing: border-box;
    color: var(--font-color-2);
    p{
    font-family: 'LeferiPoint-BlackObliqueA';
    line-height: 50px;
    margin: 0;
    }
`;

export default Header;
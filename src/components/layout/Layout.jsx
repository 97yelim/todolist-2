import React  from 'react';
import Header from '../header/Header'
import List from '../list/List'
import styled from "styled-components";


const Container = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 60px auto;
`;

const Layout = () => {
    

    return (
        <div>
            <Container> 
                <Header></Header>
                <List></List>
            </Container>
        </div>
    );
};

export default Layout;
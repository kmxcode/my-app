import React, { FC } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    background-color: #fff;
    box-shadow: 0 1px 2px rgb(0 0 0 / 25%);
    border-radius: 7px;
    margin-bottom: 32px;
`;

const Content = styled.div`
    min-height: 1280px;
    padding: 22px;
    width: 100%;
    text-align: center;
`;
const CurrentPath = styled.div`
    font-size: 15px;
    padding: 20px 0;
`;
const Text = styled.div`
    font-size: 30px;
    border-bottom: 1px solid #e8e8e8;
    padding: 20px 0;
`;

const TestPage: FC = () => {
    const location = useLocation();
    return(
        <Wrapper>
            <Content>
                <Text>Strona testowa</Text>
                <CurrentPath>{location.pathname}</CurrentPath>
            </Content>
        </Wrapper>
    )
}

export default TestPage;
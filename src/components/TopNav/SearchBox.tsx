import React, { FC } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    height: 18px;
    border-radius: 4px;
    padding: 6px 0;
    border: 1px solid #e8e8e8;
    margin: 4px 0;
    max-width: 534px;
    text-align: center;
    font-size: 13px;
    color: #333;
    outline: none;
`;


const SearchBox: FC = () => {
    return(
        <Input placeholder="Search something..."/>
    )
}

export default SearchBox;
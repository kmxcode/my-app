import React, { FC } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    height: 40px;
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 8px 4px;
    border: 1px solid transparent;
    margin-right: 62px;
    display: inline-flex;
    outline: none;
    cursor: pointer;
`;

const ButtonIcon = styled.img`
    height: 22px;
    margin-right: 5px;
`;

const ButtonText = styled.span`
    line-height: 26px;
`;

interface IDropdownButtonProps extends React.DOMAttributes<HTMLButtonElement>{};

const DropdownButton: FC<IDropdownButtonProps> = (props) => {
    return(
        <Button onClick={props.onClick}>
            <ButtonIcon src="/icons/house2.svg" />
            <ButtonText>Home</ButtonText>
        </Button>
    )
}

export default DropdownButton;
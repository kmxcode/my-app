import React, { FC } from 'react';
import styled from 'styled-components/macro';



const Wrapper = styled.div`
    display: flex;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0px 2px 20px 2px rgb(0 0 0 / 45%);
    top: 107px;
    left: 42px;
    position: absolute;
    z-index: 2;
`;
const Inner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 17px;
`;
const Text = styled.div`
    font-size: 13px;
    color: #96999f;
`;
const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 26px;
    margin-top: 8px;
    padding-left: 10px;
    color: #4b5268;
`;
const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Icon = styled.img`
    cursor: pointer;
`;
const OperatorText = styled.div`
    font-size: 13px;
    color: #4b5268;
    padding-left: 11px;
    padding-right: 35px;
`;
const TransparentSelect = styled.select`
    font-size: 13px;
    font-weight: bold;
    color: #4b5268;
    margin-right: 12px;
    border: none;
    height: 26px;

`;
const TransparentInput = styled.input`
    font-size: 13px;
    color: #4b5268;
    margin-right: 12px;
    padding-left: 10px;
    border: none;
    background-color: #e8e8e8;
    width: 116px;
    height: 26px;
    border-radius: 6px;

`;
const Filter: FC = () => {
    return(
        <Wrapper>
            <Inner>
                <Text>Rows are filtered by the following conditions starting from the top.</Text>
                <Row>
                    <IconWrapper>
                            <Icon src="/icons/xclose.png" />
                    </IconWrapper>
                    <OperatorText>
                        Where
                    </OperatorText>
                    <TransparentSelect>
                        <option>Company</option>
                        <option>Status</option>
                    </TransparentSelect>
                    <TransparentSelect>
                        <option>Contains</option>
                        <option>Is</option>
                        <option>Ends before</option>
                        
                    </TransparentSelect>
                    <TransparentInput 
                        type="text"
                        placeholder="Type..."
                    />
                </Row>
                <Row>
                    <IconWrapper>
                            <Icon src="/icons/xclose.png" />
                    </IconWrapper>
                    <OperatorText>
                        Where
                    </OperatorText>
                    <TransparentSelect>
                        <option>Company</option>
                        <option selected>Status</option>
                    </TransparentSelect>
                    <TransparentSelect>
                        <option selected>Is</option>
                        <option>Is</option>
                        
                    </TransparentSelect>
                    <TransparentInput 
                        type="text"
                        placeholder="Type..."
                    />
                    <TransparentSelect>
                        <option>In</option>
                        <option>In</option>
                    </TransparentSelect>
                    <TransparentInput 
                        type="text"
                        placeholder="Entity..."
                    />
                </Row>
                <Row>
                    <IconWrapper>
                            <Icon src="/icons/xclose.png" />
                    </IconWrapper>
                    <OperatorText>
                        And
                    </OperatorText>
                    <TransparentSelect>
                        <option>Company</option>
                        <option selected>Status</option>
                    </TransparentSelect>
                    <TransparentSelect>
                        <option>Contains</option>
                        <option>Is</option>
                        <option selected>Ends before</option>
                        
                    </TransparentSelect>
                    <TransparentInput 
                        type="text"
                        placeholder="Date"
                    />
                    <TransparentSelect>
                        <option>In</option>
                        <option>In</option>
                    </TransparentSelect>
                    <TransparentInput 
                        type="text"
                        placeholder="Entity..."
                    />
                </Row>
                
            </Inner>
        </Wrapper>
    )
}

export default Filter;
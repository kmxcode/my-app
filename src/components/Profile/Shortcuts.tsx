import React, { FC } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 17px;
    padding-top: 15px;
    padding-right: 15px;

`;

const Content = styled.div`
    display: flex;
    margin-left: auto;
`;

const Shortcut = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    align-items: center;
`;

const ShortcutIcon = styled.img`
    height: 16px;
    min-width: 16px;
    
`;


const ShortcutText = styled.div`
    color: #232C47;
    font-size: 15px;
    font-weight: bold;
    margin-left: 9px;
`;

const Link = styled(RouterLink)`
    text-decoration: none;
`;

const Shortcuts: FC = () => {
    return(
        <Wrapper>
            <Content>
                <Link to="/message">
                    <Shortcut>
                        <ShortcutIcon src="/icons/xmessage.png"/>
                        <ShortcutText>Message</ShortcutText>
                    </Shortcut>
                </Link>
                <Link to="/createRequest">
                    <Shortcut>
                        <ShortcutIcon src="/icons/xcreate.png"/>
                        <ShortcutText>Create a request</ShortcutText>
                    </Shortcut>
                </Link>
                <Link to="AddToCluster">
                    <Shortcut>
                        <ShortcutIcon src="/icons/xadd.png"/>
                        <ShortcutText>Add to a cluster</ShortcutText>
                    </Shortcut>
                </Link>
                <ShortcutIcon src="/icons/xclose.png"/>
            </Content>
        </Wrapper>
    )
}

export default Shortcuts;
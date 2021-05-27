import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IWorkspacesReducer } from '../../reducers/workspacesReducer';
import { IPlatformsReducer } from '../../reducers/platformsReducer';
import { ISingleWorkspace } from '../../entities/workspaces';
import { ISinglePlatform } from '../../entities/platforms';
import { ISingleImage } from '../../entities/image';
import { IUsersReducer } from '../../reducers/usersReducer';
import { IImageReducer } from '../../reducers/imageReducer';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const FilterBox = styled.div`
    display: flex;
    flex-direction: column;
`;
const FilterInput = styled.input`
    margin: 7px 9px;
    padding: 10px 7px;
    border: 1px solid #ebebeb;
    border-radius: 6px;
    flex-grow: 1;
`;
const ScrollBox = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: 400px;
`;

const MenuGroup = styled.div`
    display: flex;
    flex-direction: column;
    
`;

const MenuTitle = styled.div`
    margin-bottom: 5px;
    padding: 0 9px;
    color: #96999e;
    font-size: 11px;
    font-weight: bold;
`;

const Link = styled(RouterLink)`
    text-decoration: none;
    color: inherit;
`;

const LinkInner = styled.div`
    font-size: 16px;
    margin-bottom: 13px;
    padding: 0 9px;
    color: #232c47;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const LinkText = styled.span`

`;

const LinkIcon = styled.img`
    height: 18px;
    min-width: 28px;
    margin-right: 5px;
`;

const Logout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ebebeb;
    padding-top: 12px;
`;

const ProfileLinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    margin-bottom: 15px;
    padding-left: 9px;
`;

const ProfileImage = styled.img`
    height: 30px;
	width: 30px;
    border-radius: 15px;
`;

const ProfileText = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-left: 10px;
    height: 30px;
    justify-content: center;
`;

const ProfileName = styled.div`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 4px;
`;

const ProfileLink = styled.div`
    color: #2a3f9d;
    font-size: 12px;
`;

const DropdownMenu: FC = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const { workspacesList, platformsList, currentUser, images } = useSelector<IState, IWorkspacesReducer & IPlatformsReducer & IUsersReducer & IImageReducer>(globalState => ({
        ...globalState.workspaces,
        ...globalState.platforms,
        ...globalState.users,
        ...globalState.images
    }));

    const getUserImageById = (userId: number | undefined) => 
        images
            .find((image: ISingleImage) => image.id === userId)
            ?.url;

    const changeSearchTerm = (term: string) => {
        setSearchTerm(
            term.toLowerCase()
        )
    }

    return(
        <Wrapper>
            <FilterBox>
                <FilterInput
                    type="text"
                    placeholder="Filter..."
                    onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => 
                        changeSearchTerm(e.target.value)
                    }
                />
            </FilterBox>
            <ScrollBox>
                <MenuGroup>
                    <MenuTitle>Platform</MenuTitle>
                    {platformsList
                        .filter((platform: ISinglePlatform) => 
                            platform.name
                                .toLowerCase()
                                .includes(searchTerm)
                        )
                        .map((platform: ISinglePlatform, index: number) =>
                            <Link
                                to={platform.url}
                                key={index}
                            >
                                <LinkInner>
                                    <LinkIcon src={platform.imgSrc} />
                                    <LinkText>{platform.name}</LinkText>
                                </LinkInner>
                            </Link>
                        )
                    }
                </MenuGroup>
                <MenuGroup>
                    <MenuTitle>Workspaces</MenuTitle>
                    {workspacesList
                        .filter((workspace: ISingleWorkspace) => 
                            workspace.name
                                .toLowerCase()
                                .includes(searchTerm)
                        )
                        .map((workspace: ISingleWorkspace, index: number) =>
                            <Link
                                to={`/workspaces/${workspace.id}`}
                                key={index}
                            >
                                <LinkInner>
                                    <LinkIcon src={workspace.imgSrc} />
                                    <LinkText>{workspace.name}</LinkText>
                                </LinkInner>
                            </Link>
                        )
                    }
                </MenuGroup>
            </ScrollBox>
            <MenuGroup>
                <MenuTitle>Account</MenuTitle>
                {currentUser &&
                    <ProfileLinkWrapper>
                        <ProfileImage src={getUserImageById(currentUser?.id)}/>
                        <ProfileText>
                            <ProfileName>{currentUser?.name}</ProfileName>
                            <ProfileLink><Link to="/profile">See profile</Link></ProfileLink>
                        </ProfileText>
                    </ProfileLinkWrapper>
                }
                <Link to="/privacy">
                    <LinkInner>
                        <LinkIcon src="/icons/privacy.svg" />
                        <LinkText>Privacy</LinkText>
                    </LinkInner>
                </Link>
                <Link to="/settings">
                    <LinkInner>
                        <LinkIcon src="/icons/settings.svg" />
                        <LinkText>Settings</LinkText>
                    </LinkInner>
                </Link>
                <Logout>
                    <Link to="/logout">
                        <LinkInner>
                            <LinkIcon src="/icons/logout.svg" />
                            <LinkText>Logout</LinkText>
                        </LinkInner>
                    </Link>
                </Logout>
            </MenuGroup>
        </Wrapper>
    )
}

export default DropdownMenu;

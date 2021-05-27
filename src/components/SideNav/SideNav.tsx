import React, { FC } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import { useSelector } from 'react-redux';
import { IImageReducer } from '../../reducers/imageReducer';
import { ISingleImage } from '../../entities/image';

const NavWrapper = styled.div`
    padding-right: 40px;
`;

const ProfileBox = styled.div`
    width: 212px;
    height: 208px;
    padding: 8px;
    border-radius: 4px;
    background: #fff;
    text-align: center;
    box-shadow: 0 1px 5px 0 #d8d8d8;
`;

const ProfileImage = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    margin: 8px auto;
`; 

const ProfileName = styled.div`
    font-size: 14px;
    margin-bottom: 14px;
    color: #2a3f9d;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const ProfileDescription = styled.div`
    font-size: 12px;
    color: #a1a1a1;
`;

const Links = styled.div`
    padding: 22px 18px;
`;

const LinkText = styled.div`
    font-size: 16px;
    margin-bottom: 32px;
    color: #767b8c;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const Link = styled(RouterLink)`
    text-decoration: none;
    color: inherit;
`;

const Icon = styled.img`
    height: 18px;
    min-width: 28px;
    margin-right: 5px;
`;

const ProfileNav = styled.div`
    border-top: 1px solid #d3d3d3;
    margin-top: 15px;
    padding-top: 15px;
`;

const ProfileLink = styled.div`
    font-size: 16px;
    margin-bottom: 8px;
    color: #4b5268;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const SideNav: FC = () => {

    const { currentUser, images } = useSelector<IState, IUsersReducer & IImageReducer>(globalState => ({
        ...globalState.users,
        ...globalState.images
    }));

    const getUserImageById = (userId: number | undefined) => 
        images
            .find((image: ISingleImage) => image.id === userId)
            ?.url

    return(
        <NavWrapper>
            <ProfileBox>
                <ProfileImage src={getUserImageById(currentUser?.id)}/>
                <ProfileName>
                    <Link to="/profile">{currentUser?.name}</Link>
                </ProfileName>
                <ProfileDescription>{currentUser?.company.name}</ProfileDescription>
                <ProfileNav>
                    <ProfileLink>
                        <Link to="/network">
                            <Icon src="/icons/network.svg" />Your Network
                        </Link>
                    </ProfileLink>
                    <ProfileLink>
                        <Link to="/publications">
                            <Icon src="/icons/publications.svg" />Your Publications
                        </Link>
                    </ProfileLink>
                </ProfileNav>
            </ProfileBox>
            <Links>
                <Link to="/publications">
                    <LinkText>
                        <Icon src="/icons/publications.svg" />Publications
                    </LinkText>
                </Link>
                <Link to="/ecosystem">
                    <LinkText>
                        <Icon src="/icons/ecosystem.svg" />Ecosystem
                    </LinkText>
                </Link>
                <Link to="/entities">
                    <LinkText>
                        <Icon src="/icons/entities.svg" />Entities
                    </LinkText>
                </Link>
            </Links>
        </NavWrapper>
    )
}

export default SideNav;
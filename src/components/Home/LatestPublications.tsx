import React, { FC } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IPostReducer } from '../../reducers/postReducer';
import { ISinglePost } from '../../entities/post';
import { IUsersReducer } from '../../reducers/usersReducer';
import { ISingleUser } from '../../entities/users';
import { ISingleImage } from '../../entities/image';
import { IImageReducer } from '../../reducers/imageReducer';

const Div = styled.div``;
const Span = styled.span``;


const Wrapper = styled.div`
    display: flex;
    background-color: #fff;
    box-shadow: 0 1px 2px rgb(0 0 0 / 25%);
    border-radius: 7px;
    margin-bottom: 32px;
`;

const Main = styled(Div)<{ imgSrc: string }>`
    display: flex;
    height: 300px;
    width: 300px;
    background-color: #efeff1;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    background-image: url(${props => props.imgSrc});
    box-shadow: inset 0 -10px 10px -10px #000000;
`;

const MainCard = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-left: 9px;
    justify-content: flex-end;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0) 100%);
    padding: 30px 14px;
`;

const Content = styled.div`
    padding: 14px 18px;
    max-width: 564px;
`;

const Title = styled.div`
    color: #232c47;
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 12px;
`;

const PublicationList = styled.div`
    display: flex;
    flex-direction: column;
`;

const Publication = styled.div`
    display: flex;
    flex-direction: row;
    height: 68px;
    margin-bottom: 8px;
`;

const Image = styled.img`
    width: 68px;
    height: 68px;
    background-color: #efeff1;
`;

const Card = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-left: 9px;
    height: 68px;
    justify-content: center;
`;

const CardTitle = styled(Div)<{ onDarkBg?: boolean }>`
    color: ${props => props.onDarkBg ? '#efefef' : '#232c47'};
    font-weight: ${props => props.onDarkBg ? 'normal' : 'bold'};
    font-size: 14px;
`;

const CardDetails = styled.span`
    display: flex;
    align-items: center;
    color: #b1b1b1;
    font-size: 12px;
    margin-top: 8px;
`;

const CardDate = styled.span`
    color: #b1b1b1;
`;

const CardUser = styled.span`
    display: flex;
    align-items: center;
`;

const UserIcon = styled.img`
    height: 17px;
    border-radius: 32px;
    margin-left: 5px;
`;

const UserName = styled(Span)<{ onDarkBg?: boolean }>`
    color: ${props => props.onDarkBg ? '#efefef' : '#232c47;'};
    margin-left: 5px;
`;

const Link = styled(RouterLink)`
    text-decoration: none; 
`;

const LinkText = styled.div`
    color: #2a3f9d;
    font-size: 14px;
    font-weight: bold;
`;



const LatestPublications: FC = () => {
    const { lastestPostList, latestPost, usersList, images } = useSelector<IState, IPostReducer & IUsersReducer & IImageReducer>(globalState => ({
        ...globalState.posts,
        ...globalState.users,
        ...globalState.images
    }));

    const lastThreePostWithoutFirst = [1,4]
    
    const getUserNameById = (id: number | undefined) => 
        usersList
            .find((user: ISingleUser) => user.id === id)
            ?.name

    const getImageById = (id: number | undefined) => 
        images
            .find((image: ISingleImage) => image.id === id)
            ?.thumbnailUrl as string;
            
    const getUserLinkById = (id: number | undefined) => 
        `users/${id}`

    return(
        <Wrapper>
            <Main imgSrc={getImageById(latestPost?.id)}>
                <MainCard>
                    <Link to={`/publications/${latestPost?.id}`}>
                        <CardTitle onDarkBg={true}>{ latestPost?.body }</CardTitle>
                    </Link>
                    <CardDetails>
                        <CardDate>7 jan. 2021 - </CardDate>
                        <CardUser>
                            <UserIcon src={ getImageById(latestPost?.userId) } />
                            <Link to={ getUserLinkById(latestPost?.userId) }>
                                <UserName onDarkBg={true}>{ getUserNameById(latestPost?.userId) }</UserName>
                            </Link>
                        </CardUser>
                    </CardDetails>
                </MainCard>
            </Main>
            <Content>
                <Title>Latest Publications</Title>
                <PublicationList>
                    {lastestPostList
                            .slice(
                                ...lastThreePostWithoutFirst
                            )
                            .map((post: ISinglePost, index: number) =>
                                <Publication key={index}>
                                    <Image src={ getImageById(post.id) } />
                                    <Card>
                                        <Link to={`/publications/${post.id}`}>
                                            <CardTitle>{ post.body }</CardTitle>
                                        </Link>
                                        <CardDetails>
                                            <CardDate>7 jan. 2021 - </CardDate>
                                            <CardUser>
                                                <UserIcon src={ getImageById(post.userId) } />
                                                <Link to={ getUserLinkById(post.userId) }>
                                                    <UserName>{ getUserNameById(post.userId) }</UserName>
                                                </Link>
                                            </CardUser>
                                        </CardDetails>
                                    </Card>
                                </Publication>
                            )
                    }
                </PublicationList>
                <Link to="/publications"><LinkText>See more publications</LinkText></Link>
            </Content>
        </Wrapper>
    )
}

export default LatestPublications;
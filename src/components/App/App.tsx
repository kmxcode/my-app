import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import SideNav from '../SideNav/SideNav';
import TopNav from '../TopNav/TopNav';
import Profile from '../Profile/Profile';
import Entities from '../Entities/Entities';
import Workspaces from '../Workspaces/Workspaces';
import TestPage from '../TestPage/TestPage';


import { getUsers } from '../../actions/usersActions'
import { getPosts } from '../../actions/postActions'
import { getComments } from '../../actions/commentActions'
import { getImages } from '../../actions/imageActions'

import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import { IPostReducer } from '../../reducers/postReducer';
import { ICommentReducer } from '../../reducers/commentReducer';
import { IImageReducer } from '../../reducers/imageReducer';

type GetUsers = ReturnType<typeof getUsers>;
type GetPosts = ReturnType<typeof getPosts>;
type GetComments = ReturnType<typeof getComments>;
type GetImages = ReturnType<typeof getImages>;

const Wrapper = styled.div`
`;

const Content = styled.div`
    width: 1280px;
    margin: 64px auto 0;
    padding-bottom: 30px;
`;
const ContentInner = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 88px 0 24px;
`;
const Main = styled.div`
    max-width: 900px;
    flex-grow: 1;
`;


const App: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers()).then()
        dispatch<GetPosts>(getPosts()).then()
        dispatch<GetComments>(getComments()).then()
        dispatch<GetImages>(getImages()).then()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { usersList, postsList, comments, images} = useSelector<IState, IUsersReducer & IPostReducer & ICommentReducer & IImageReducer >(globalState => ({
        ...globalState.users,
        ...globalState.posts,
        ...globalState.comments,
        ...globalState.images
    }));

    return(
        <div>
            {usersList.length > 0 && 
            postsList.length > 0 && 
            comments.length > 0 && 
            images.length > 0 && 
            <Wrapper>
                <TopNav />
                <Content>
                    <ContentInner>
                        <SideNav />
                        <Main>
                            <Switch>
                                <Route exact path={'/workspaces/:id'}>
                                    <Workspaces />
                                </Route>
                                <Route exact path={'/entities'}>
                                    <Entities />
                                </Route>
                                <Route exact path={'/profile'}>
                                    <Profile />
                                </Route>
                                <Route exact path={'/home'}>
                                    <Home />
                                </Route>
                                <Route exact path="/">
                                    <Redirect to="/home" />
                                </Route>
                                <Route path="/">
                                    <TestPage />
                                </Route>
                                
                            </Switch>
                        </Main>
                    </ContentInner>
                </Content>
            </Wrapper>}
        </div>
    )
}

export default App;
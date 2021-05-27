import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ISingleComment } from '../../entities/comment';
import { ISingleImage } from '../../entities/image';
import { ISinglePost } from '../../entities/post';
import { ISingleUser } from '../../entities/users';
import { IState } from '../../reducers';
import { ICommentReducer } from '../../reducers/commentReducer';
import { IImageReducer } from '../../reducers/imageReducer';
import { IPostReducer } from '../../reducers/postReducer';
import { IUsersReducer } from '../../reducers/usersReducer';

const Wrapper = styled.div`
    margin-bottom: 32px;
`;


const TopBar = styled.div`
    display: flex;
`;

const HeadText = styled.h1`
    font-size: 18px;
    font-weight: bold;
    color: #4b5268;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    margin-top: 18px;
    
`;

const Comment = styled.div`
    padding: 10px 18px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 25%);
    min-height: 84px;
    margin-bottom: 10px;
`;

const Title = styled.h2`
    color: #2a3f9d;
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Description = styled.div`
    color: #4b5268;
    font-size: 14px;
    margin-bottom: 12px;
`;

const Details = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const DetailsText = styled.div`
    color: #4b5268;
    margin-left: 5px;
`;
const UserIcon = styled.img`
    height: 17px;
    border-radius: 32px;
    margin-left: 5px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const RowEnd = styled.div`
    display: flex;
    flex-direction: row;
    height: 32px;
    margin-left: auto;
`;
const SearchInput = styled.input`
    padding: 4px 7px;
    border: 1px solid #ebebeb;
    border-radius: 6px;
`;
const RowGroup = styled.div`
    display: flex;
    flex-direction: row;
    height: 32px;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #e8e8e8;
    margin-left: 16px;
`;
const WhiteButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 9px;
    height: 20px;
    background-color: #fff;
    border: 1px solid #2a3f9d;
    color: #2a3f9d;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
`;
const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Icon = styled.img`
    cursor: pointer;
`;
const ButtonText = styled.div`
    margin: 0 7px;
    font-size: 15px;
`;

interface IPopulatedComment extends ISingleComment {
    authorId?: number;
}

const Comments: FC = () => {
    const [searchTerm, setSearchTerm] = useState(' ');
    const [populatedComments, setPopulatedComments] = useState<IPopulatedComment[]>([]);
    const [filteredComments, setFilteredComments] = useState<IPopulatedComment[]>([]);
    const [onlyFollowedComments, setOnlyFollowedComments] = useState<boolean>(true);
    
    const { comments, postsList, currentUser, usersList, images } = useSelector<IState, ICommentReducer & IPostReducer & IUsersReducer & IImageReducer>(globalState => ({
        ...globalState.comments,
        ...globalState.posts,
        ...globalState.users,
        ...globalState.images
        
        
    }));

    const changeSearchTerm = (term: string) => {
        setSearchTerm(
            term.toLowerCase()
        )
    }

    const toggleFollowed = () => {
        let filteredComments = populatedComments;

        if(onlyFollowedComments) {
            filteredComments = populatedComments.filter((comment) => comment.authorId === currentUser?.id)
        }

        setFilteredComments(filteredComments)
        setOnlyFollowedComments(!onlyFollowedComments)
    }

    const getAuthorIdWherePostId = (postId: number | undefined) => 
    postsList
        .find((post: ISinglePost) => post.id === postId)
        ?.userId

    const getUserNameById = (id: number | undefined) => 
        usersList
            .find((user: ISingleUser) => user.id === id)
            ?.name

    const getImageById = (id: number | undefined) => 
        images
            .find((image: ISingleImage) => image.id === id)
            ?.thumbnailUrl as string;

    const prepareComments = () => {
        const result = comments.map((commnet: ISingleComment) => {
            return ({
                ...commnet,
                authorId: getAuthorIdWherePostId(commnet.postId)
            }) as IPopulatedComment;
        });

        setPopulatedComments(result);
        setFilteredComments(result);
    }

    useEffect(() => {
        prepareComments()
        
    }, [])

    return(
        <Wrapper>
            <Row>
                <HeadText>Resume your work</HeadText>
                <RowEnd>
                        <SearchInput
                            type="text"
                            placeholder="Search..."
                            onChange={
                                (e: React.ChangeEvent<HTMLInputElement>) => 
                                changeSearchTerm(e.target.value)
                            }
                        />
                        <RowGroup>
                            <WhiteButton
                                onClick={() => toggleFollowed()}
                            >
                                <IconWrapper>
                                        <Icon src="/icons/xfollowed.png" />
                                </IconWrapper>
                                <ButtonText>
                                    Followed 
                                </ButtonText>
                                <IconWrapper>
                                        <Icon src="/icons/arrow-down.png" />
                                </IconWrapper>
                            </WhiteButton>
                        </RowGroup>
                    </RowEnd>
            </Row>
            <Content>
                    {filteredComments
                        .filter((comment: IPopulatedComment) => 
                            comment.name
                                .toLowerCase()
                                .includes(searchTerm)
                        )
                        .slice(0, 10)
                        .map((comment: IPopulatedComment, index: number) =>
                            <Comment key={index}>
                                <Title>{ comment.name }</Title>
                                <Description>{ comment.body }</Description>
                                <Details><UserIcon src={ getImageById(comment.authorId) } /><DetailsText>{getUserNameById(comment.authorId)} • Client contract • Updated 3 days ago by {getUserNameById(comment.authorId)}</DetailsText></Details>
                            </Comment>
                        )
                    }
            </Content>
        </Wrapper>
    )
}

export default Comments;
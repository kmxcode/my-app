import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ISingleImage } from '../../entities/image';
import { ISingleWorkspace } from '../../entities/workspaces';
import { IState } from '../../reducers';
import { IImageReducer } from '../../reducers/imageReducer';
import { IWorkspacesReducer } from '../../reducers/workspacesReducer';
import Comments from '../Home/Comments';

const Div = styled.div``;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 240px;
    border-radius: 6px;
`;

const Header = styled.div`
    margin: 16px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 1px 5px 0 #d8d8d8;
`;

const AboutSection = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 222px;
    margin: 16px;
`;

const AboutTitle = styled.div`
    padding: 13px 0;
    font-size: 12px;
    font-weight: bold;
    color: #4b5268;
`;

const AboutItems = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`;

const AboutItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 224px;
    height: 126px;
    padding: 16px 8px;
    box-shadow: 0 1px 5px 0 #d8d8d8;
    background-color: #fff;
    margin-right: 13px;
    border-radius: 6px;
    position: relative;

    &::after {
        content: "";
        background: url('/icons/xentities.png');
        opacity: 0.5;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;   
        }
`;

const ItemImg = styled.img`
    height: 32px;
    width: 32px;
`;

const ItemTitle = styled.span`
    padding: 15px 0;
    font-size: 17px;
    color: #232c47;
`;

const ItemDescription = styled.span`
    font-size: 12px;
    color: #232c47;
    line-height: 1.4;
`;

const Bold = styled.span`
    font-weight: bold;
`;

const Banner = styled(Div)<{ imgSrc: string }>`
    display: flex;
    height: 120px;
    background-image: url(${props => props.imgSrc ? props.imgSrc : ''});
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
`;

const IconWrapper = styled.div`
    height: 88px;
    width: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Icon = styled.img`
    height: 40px;
    min-width: 28px;
`;

const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeaderTitle = styled.div`
    padding: 13px 0;
    font-size: 16px;
    color: #232c47;
    font-weight: bold;
`;

const HeaderDescription = styled.div`
    font-size: 12px;
    color: #96a5b7;
`;



const Workspaces: FC = () => {
    const params: { id: string } = useParams();
    const { workspacesList, images } = useSelector<IState, IWorkspacesReducer & IImageReducer>(globalState => ({
        ...globalState.workspaces,
        ...globalState.images,
    }));

    

    const getImageById = (id: number | undefined) => 
    images
        .find((image: ISingleImage) => image.id === id)
        ?.url as string;

    const getWorkspaceById = (id: number | undefined) => 
        workspacesList
            .find((workspace: ISingleWorkspace) => workspace.id === id)

    const workspaceId = parseInt(params.id)
    const workspace = getWorkspaceById(workspaceId)

    return(
        <>
            <Wrapper>
                <HeaderWrapper>
                    <Header>
                        <Banner imgSrc={getImageById(workspace?.id)} />
                        <HeaderContent>
                            <IconWrapper>
                                <Icon src={workspace?.imgSrc} />
                            </IconWrapper>
                            <TextWrapper>
                                <HeaderTitle>{workspace?.name}</HeaderTitle>
                                <HeaderDescription>
                                    Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.
                                </HeaderDescription>
                            </TextWrapper>
                        </HeaderContent>
                    </Header>
                </HeaderWrapper>
                <AboutSection>
                    <AboutTitle>Start working on corporate matters</AboutTitle>
                    <AboutItems>
                        <AboutItem>
                            <ItemImg src="/icons/xentities.png"/>
                            <ItemTitle>Explore your <Bold>entities</Bold></ItemTitle>
                            <ItemDescription>Take a few minutes to look at the most important elements and specificities of your entities</ItemDescription>
                        </AboutItem>
                        <AboutItem>
                            <ItemImg src="/icons/xstructure.png"/>
                            <ItemTitle>Structure your <Bold>ownership</Bold></ItemTitle>
                            <ItemDescription>Get a clear view of the ownership by looking at the relations between individuals and entities</ItemDescription>
                        </AboutItem>
                        <AboutItem>
                            <ItemImg src="/icons/xcalendar.png"/>
                            <ItemTitle>Define the <Bold>calendar</Bold></ItemTitle>
                            <ItemDescription>Prepare future events by creating detailed plans around the life of your entity</ItemDescription>
                        </AboutItem>
                        
                    </AboutItems>
                </AboutSection>
                <Comments />

            </Wrapper>
        </>
    )
}

export default Workspaces;
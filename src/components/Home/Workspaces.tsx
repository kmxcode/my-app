import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { IWorkspacesReducer } from '../../reducers/workspacesReducer';
import { ISingleWorkspace } from '../../entities/workspaces';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IImageReducer } from '../../reducers/imageReducer';
import { ISingleImage } from '../../entities/image';

const Div = styled.div``;

const Wrapper = styled.div`
    margin-bottom: 32px;
`;

const HeadText = styled.h1`
    font-size: 18px;
    font-weight: bold;
    color: #4b5268;
`;

const Content = styled.div`
    width: 100%;
    height: 192px;
    margin-top: 18px;
`;

const Slide = styled.div`
    padding-right: 8px;
    padding-bottom: 3px;
    width: 240px;
`;

const Workspace = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 192px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 25%);
`;

const Banner = styled(Div)<{ imgSrc: string }>`
    display: flex;
    height: 80px;
    border-radius: 4px;
    max-height: 206px;
    background-image: url(${props => props.imgSrc ? props.imgSrc : ''});
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
`;

const IconWrapperr = styled.div`
    height: 80px;
    width: 80px;
    margin-left: 7px;
    top: -24px;
    background: #fff;
    box-shadow: 0 1px 2px rgb(0 0 0 / 25%);
    position: relative;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = styled.div`
    height: 56px;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const Link = styled(RouterLink)`
    text-decoration: none; 
`;

const Name = styled.span`
    font-weight: bold;
    font-size: 13px;
    color: #232c47;
    cursor: pointer;
    position: absolute;
    padding: 12px 7px;

    &:hover {
        text-decoration: underline;
    }

`;

const Details = styled.span`
    color: #565d72;
    font-size: 13px;
    margin-bottom: 11px;

`;

const DateText = styled.span`
    color: #96999e;
    font-size: 9px;
`;

const TextWrapper = styled.span`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-left: 10px;
    height: 50px;
    justify-content: center;

`;

const Icon = styled.img`
    height: 40px;
    min-width: 28px;
    margin-right: 5px;
`;

const Workspaces: FC = () => {

    const { workspacesList, images } = useSelector<IState, IWorkspacesReducer & IImageReducer>(globalState => ({
        ...globalState.workspaces,
        ...globalState.images,
    }));

    const slickSettings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        variableWidth: true
    };

    const getImageById = (id: number | undefined) => 
    images
        .find((image: ISingleImage) => image.id === id)
        ?.url as string;

    return(
        <Wrapper>
            <HeadText>Workspaces</HeadText>
            <Content>
                <Slider {...slickSettings}>
                    {workspacesList
                        .map((workspace: ISingleWorkspace, index: number) =>
                            <Slide>
                                <Workspace key={index}>
                                    <Banner imgSrc={getImageById(workspace.id)} />
                                    <Header>
                                        <IconWrapperr>
                                            <Icon src={workspace.imgSrc} />
                                        </IconWrapperr>
                                        <Link to={`/workspaces/${workspace.id}`}>
                                            <Name>{workspace.name}</Name>
                                        </Link>
                                    </Header>
                                    <TextWrapper>
                                        <Details>{workspace.type} • {workspace.usersCount} users</Details>
                                        <DateText>Last update {workspace.lastUpdate}</DateText>
                                    </TextWrapper>
                                </Workspace>
                            </Slide>
                        )
                    }
                </Slider>
            </Content>
        </Wrapper>
    )
}

export default Workspaces;
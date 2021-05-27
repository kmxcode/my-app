import React, { FC, useEffect, useState } from 'react';
import useDropdown from 'react-dropdown-hook';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { ISingleImage } from '../../entities/image';
import { ISinglePost } from '../../entities/post';
import { IState } from '../../reducers';
import { IImageReducer } from '../../reducers/imageReducer';
import { IPostReducer } from '../../reducers/postReducer';

import Filter from './Filter';


const Div = styled.div``;

const Wrapper = styled(Div)<{ fullscreen: boolean }>`
    position: ${props => props.fullscreen ? 'absolute' : 'relative'};
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 25%);
    top: 0;
    left: 0;
    z-index: 1;
`;
const Inner = styled.div`
    padding: 14px;
`;
const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Icon = styled.img`
    cursor: pointer;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 32px;
    margin-bottom: 9px;
`;

const RowEnd = styled.div`
    display: flex;
    flex-direction: row;
    height: 32px;
    margin-left: auto;
`;

const Content = styled(Div)<{ mosaicView: boolean }>`
    display: flex;
    flex-direction: ${props => props.mosaicView ? 'row' : 'column'};
    flex-wrap: wrap;
    width: 100%;
    min-height: 620px;
`;

const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
    padding: 9px 12px;
    color: #3e4456;
`;
const Button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 9px;
    height: 20px;
    background-color: #eaecf5;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
`;
const ButtonWrapper = styled.div`
    border: 1px solid #f3f3f3;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
`;
const ButtonText = styled.div`
    margin: 0 7px;
    font-size: 15px;
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
const TransparentButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
    cursor: pointer;
    opacity: 0.7;

    &:hover {
        opacity: 1;
    }
`;
const SearchInput = styled.input`
    padding: 4px 7px;
    border: 1px solid #ebebeb;
    border-radius: 6px;
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
const Entity = styled(Div)<{ mosaicView: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80px;
    width: ${props => props.mosaicView ? '250px' : 'auto'};
    flex-grow: 1;
    padding: 8px 10px;
    background-color: #fff;
    box-shadow: 0 1px 5px 0 #d8d8d8;
    margin: 8px;
    border-radius: 6px;
`;
const EntityImage = styled.img`
    height: 80px;
    border-radius: 6px;
`;
const EntityText = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 8px;
`;
const EntityTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;

    
`;
const EntityDescription = styled.div`
    font-size: 12px;
`;

const DropDownWrapper = styled.div``;

const Entities: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    const [fullscreenEnabled, setFullscreen] = useState<boolean>(false);
    const [mosaicViewEnabled, setMosaicView] = useState<boolean>(true);
    const [defaultSorting, setDefaultSorting] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState(' ');
    const { postsList, images } = useSelector<IState, IPostReducer  & IImageReducer>(globalState => ({
        ...globalState.posts,
        ...globalState.images
    }));
    const [entities, setEntities] = useState<ISinglePost[]>(postsList.slice(0,30));

    const getImageById = (id: number | undefined) => 
    images
        .find((image: ISingleImage) => image.id === id)
        ?.thumbnailUrl as string;

    const copyUrlToClipboard = () => {
        const temp = document.createElement('input');
        const text = window.location.href;

        document.body.appendChild(temp);
        temp.value = text;
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
    }

    const toggleFullscreen = () => {
        setFullscreen(
            !fullscreenEnabled
        )
    }

    const changeSearchTerm = (term: string) => {
        setSearchTerm(
            term.toLowerCase()
        )
    }

    const toggleSort = () => {
        let sortedEntities = entities;

        if(defaultSorting) {
            sortedEntities = entities.sort((a,b) => (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0)
        } else {
            sortedEntities = entities.sort((a,b) => (a.title > b.title) ? -1 : (a.title > b.title) ? 1 : 0)
        }

        setEntities(sortedEntities)
        setDefaultSorting(!defaultSorting)
    }

    const menuHandler = () => {
        console.log('log');
        toggleDropdown();
    }

    useEffect(() => {
        let entities = postsList;
        entities = entities.slice(0,30);
        
        setEntities(entities)
    }, [])

    return(
        <Wrapper fullscreen={fullscreenEnabled}>
            <Inner>
                <Row>
                    <Title>Entities</Title>
                    <IconWrapper>
                            <Icon src="/icons/cog.png" />
                    </IconWrapper>
                    <RowEnd>
                        <ButtonWrapper>
                            <Button
                                onClick={() => setMosaicView(true)}
                            >
                                <IconWrapper>
                                        <Icon src="/icons/xmosaic.png" />
                                </IconWrapper>
                                <ButtonText>
                                    Moasic
                                </ButtonText>
                            </Button>
                            <IconWrapper
                                onClick={() => setMosaicView(false)}
                            >
                                <Icon src="/icons/xlist.png" />
                            </IconWrapper>
                        </ButtonWrapper>
                    </RowEnd>
                </Row>
                <Row>
                    <Button>
                        <IconWrapper>
                                <Icon src="/icons/xcircle.png" />
                        </IconWrapper>
                        <ButtonText>
                            All
                        </ButtonText>
                        <IconWrapper>
                                <Icon src="/icons/arrow-down.png" />
                        </IconWrapper>
                    </Button>
                    <IconWrapper>
                            <Icon src="/icons/xdots.png" />
                    </IconWrapper>
                    <RowGroup>
                        <TransparentButton
                            onClick={() => toggleSort()}
                        >
                            <IconWrapper>
                                    <Icon src="/icons/xsortArrows.png" />
                            </IconWrapper>
                            <ButtonText>
                                Sort
                            </ButtonText>
                        </TransparentButton>

                        <DropDownWrapper ref={wrapperRef}>
                            <TransparentButton onClick={menuHandler}>
                                <IconWrapper>
                                        <Icon src="/icons/xfilter.png" />
                                </IconWrapper>
                                <ButtonText>
                                    Filters
                                </ButtonText>
                            </TransparentButton>
                            {dropdownOpen && 
                                <Filter />
                            }
                        </DropDownWrapper>
                        
                    </RowGroup>
                    <RowGroup>
                        <TransparentButton
                        onClick={() => toggleFullscreen()}
                    >
                            <IconWrapper>
                                    <Icon src="/icons/xfullscreen.png" />
                            </IconWrapper>
                        </TransparentButton>
                    </RowGroup>
                    <RowGroup>
                    <TransparentButton
                        onClick={() => copyUrlToClipboard()}
                    >
                        <IconWrapper>
                                <Icon src="/icons/xshare.png" />
                        </IconWrapper>
                        <ButtonText>
                            Share
                        </ButtonText>
                    </TransparentButton>
                    </RowGroup>
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
                            <WhiteButton>
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
                <Content mosaicView={mosaicViewEnabled}> 
                    {entities
                    .filter((entity: ISinglePost) => 
                        entity.title
                                .toLowerCase()
                                .includes(searchTerm)
                        )
                    .map((entity: ISinglePost, index: number) =>
                        <Entity key={index} mosaicView={mosaicViewEnabled}>
                            <EntityImage src={ getImageById(entity.id) } />
                            <EntityText>
                                <EntityTitle>{entity.title.substring(0, 18)}</EntityTitle>
                                <EntityDescription>
                                    {entity.title.substring(0, 7)} {entity.id}, Distrito Capital, Venezuela
                                </EntityDescription>
                            </EntityText>
                        </Entity>
                    )}
                </Content>
            </Inner>
        </Wrapper>
    )
}

export default Entities;
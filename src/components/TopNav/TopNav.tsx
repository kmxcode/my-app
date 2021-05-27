import React, { FC } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';
import { Link as RouterLink } from 'react-router-dom';

import DropdownMenu from './DropdownMenu';
import DropdownButton from './DropdownButton';
import SearchBox from './SearchBox';

const NavMenu = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 5rem;
    background-color: #fff;
    box-shadow: 0 1px 2px rgb(0, 0, 0, 0.25);
    z-index: 1;
`;

const Logo = styled.img`
    height: 40px;
    margin: 0 18px;
`;

const LeftSide = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const RightSide = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`;

const Icon = styled.img`
    height: 2rem;
`;

const StyledDiv = styled.div``;

const IconBox = styled(StyledDiv)<{ viewBg: boolean }>`
    display: flex;
    position: relative;
    border-radius: 32px;
    background-color: ${props => props.viewBg ? '#e8e8e8' : 'transparent'};
    padding: 1rem;
    margin-right: 1rem;
    cursor: pointer;
`;

const Bandage = styled.div`
    display: flex;
    position: absolute;
    top: -1px;
    right: -7px;
    background: #0381be;
    border-radius: 12px;
    padding: 3px 6px;
`;

const BandageText = styled.span`
    font-size: 12px;
    color: #fff;
`;

const DropDown = styled.div`
    height: 40px;
    width: 252px;
`;

const DropDownWrapper = styled.div`
    min-height: 40px;
    border-radius: 4px;
    border: 1px solid transparent;
    background-color: #fff;

    &:hover {
        border: 1px solid #e8e8e8;
        box-shadow: 0px 1px 1.5px 0px rgb(0, 0, 0, 0.25);
    }
    
`;

const Link = styled(RouterLink)`
    text-decoration: none;
    color: inherit;
`;

const TopNav: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    
    const menuHandler = () => {
        console.log('log');
        toggleDropdown();
    }

    return(
        <NavMenu>
            <LeftSide>
                <Logo src="/media/logo.png" />
                <DropDown>
                    <DropDownWrapper ref={wrapperRef}>
                        <DropdownButton onClick={menuHandler} />
                        {dropdownOpen && 
                            <DropdownMenu />
                        }
                    </DropDownWrapper>
                </DropDown>

                
            </LeftSide>
            <Center>
                <SearchBox />
            </Center>
            <RightSide>
                <IconBox viewBg={false}>
                    <Link to="/home">
                        <Icon src="/icons/house.png" />
                    </Link>
                </IconBox>
                <IconBox viewBg={true}>
                    <Link to="/comments">
                        <Icon src="/icons/comments.png" />
                        <Bandage>
                            <BandageText>3</BandageText>
                        </Bandage>
                    </Link>
                </IconBox>
                <IconBox viewBg={true}>
                    <Link to="/notifications">
                        <Icon src="/icons/bell.png" />
                        <Bandage>
                            <BandageText>3</BandageText>
                        </Bandage>
                    </Link>
                </IconBox>
            </RightSide>
        </NavMenu>
    )
}

export default TopNav;
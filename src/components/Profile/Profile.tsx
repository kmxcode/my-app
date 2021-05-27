import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Shortcuts from './Shortcuts';
import SecondForm from './SecondForm';
import FirstForm from './FirstForm';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import { IImageReducer } from '../../reducers/imageReducer';
import { ISingleImage } from '../../entities/image';

const Wrapper = styled.div`
    background-color: #fff;
    width: 100%;
    border-radius: 6px;
    box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 25%);
`;

const FormWrapper = styled.div`
    position: relative;
    padding-bottom: 20px;
`;

const FormEditButton = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    height: 16px;
    min-width: 16px;
    padding: 30px;
    opacity: 0.7;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;



const Profile: FC = () => {
    const [firstFormEditMode, setFirstFormEditMode] = useState(false);
    const [secondFormEditMode, setSecondFormEditMode] = useState(false);
    
    const { usersList, currentUser, images } = useSelector<IState, IUsersReducer & IImageReducer>(globalState => ({
        ...globalState.users,
        ...globalState.images
    }));
    
    const getUserImageById = (userId: number | undefined) => 
        images
            .find((image: ISingleImage) => image.id === userId)
            ?.url

    return(
        <Wrapper>
            <Shortcuts />
            <FormWrapper>
                <FormEditButton 
                    src="/icons/xedit.png"
                    onClick={() => setFirstFormEditMode(
                        !firstFormEditMode
                    )}
                />
                {currentUser !== null &&
                    <FirstForm 
                        formEditMode={firstFormEditMode}
                        user={currentUser}
                        userImage={getUserImageById(currentUser?.id)}
                    />
                }
            </FormWrapper>
            <FormWrapper>
                <FormEditButton 
                    src="/icons/xedit.png"
                    onClick={() => setSecondFormEditMode(
                        !secondFormEditMode
                    )}
                />
                {currentUser !== null &&
                    <SecondForm
                        formEditMode={secondFormEditMode}
                        users={usersList}
                        getUserImage={getUserImageById}
                    />
                }
            </FormWrapper>
        </Wrapper>
    )
}

export default Profile;
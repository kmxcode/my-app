import React from 'react';
import { withFormik, FormikProps, Form, FieldHookConfig, useField } from 'formik';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { ISingleUser } from '../../entities/users';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 32px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    padding: 22px 15px;
    border-top: 1px solid #e8e8e8;
    min-height: 200px;
`;

const GroupTitle = styled.span`
    color: #1d284b;
    font-size: 14px;
    font-weight: bold;
    padding-bottom: 30px;
`;

const GroupRow = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const RowInner = styled.div`
    display: flex;
    flex-direction: row;
`;

const LinkRow = styled.span`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
`;

const Link = styled(RouterLink)`
    text-decoration: none;
    color: inherit;
`;

const LinkText = styled.div`
    color: #2a3f9d;
    font-size: 14px;
    font-weight: bold;
`;

const FlexEnd = styled.div`
    display: flex;
    margin-left: auto;
`;

const Icon = styled.img`
    height: 16px;
    min-width: 16px;
    
`;





const StyledTextField = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  color: #9195a3;
  font-size: 16px;
  margin-bottom: 10px;
`;

const StyledTextInput = styled.input`
  color: #232c47;
  font-size: 15px;
  background: none;
  border: none;
  appearance: none;
  cursor: text;
`;

interface ITextFieldProps {
  editMode? : boolean;
}

const TextField = (props: ITextFieldProps & FieldHookConfig<string>) => {
  const [field] = useField(props);
  return (
    <StyledTextField>
      <StyledTextInput spellCheck="false" disabled={props.editMode ? null : true} {...field} {...props} />
    </StyledTextField>
  );
};

const Profile = styled.div`
    padding: 0 15px;
`;

const ProfileImage = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background-color: #eee;
    margin-bottom: 15px;
`;

const ProfileBox = styled.div`
    align-items: center;
    text-align: center;
`;

const ProfileLink = styled.div`
    font-size: 16px;
    color: #4693a7;
    cursor: pointer;
`;

const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProfileContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-top: auto;
`;

interface FormValues {
    name: string;
    company: string;
    city: string;
    role: string;
    email: string;
    phone: string;
}

interface OtherProps {
    formEditMode: boolean;
    user: ISingleUser | null;
    userImage: string | undefined;
}


const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
const { formEditMode, userImage } = props;
    return (
        <Form>
            <Wrapper>
                <Profile>
                    <ProfileBox>
                        <ProfileImage src={userImage} />
                    </ProfileBox>
                    <ProfileBox>
                        <ProfileLink><Link to={"/profile"}>See profile</Link></ProfileLink>
                    </ProfileBox>
                </Profile>
                <ProfileDetails>
                    <TextField
                        name="name"
                        type="text"
                        editMode={formEditMode}
                    />
                    <TextField
                        name="company"
                        type="text"
                        editMode={formEditMode}
                    />
                    <TextField
                        name="city"
                        type="text"
                        editMode={formEditMode}
                    />
                    <TextField
                        name="role"
                        type="text"
                        editMode={formEditMode}
                    />
                    
                </ProfileDetails>
                <ProfileContactInfo>
                    <TextField
                        name="email"
                        type="text"
                        editMode={formEditMode}
                    />
                    <TextField
                        name="phone"
                        type="text"
                        editMode={formEditMode}
                    />
                    
                </ProfileContactInfo>
            </Wrapper>

        </Form>
    )
}

interface MyFormProps {
    formEditMode: boolean;
    user: ISingleUser | null;
    userImage: string | undefined;
}
  
  
const FirstForm = withFormik<MyFormProps, FormValues>({

    mapPropsToValues: props => {
        return {
            name: props.user?.name || '',
            company: props.user?.company.name || '',
            city: props.user?.address.city || '',
            role: 'Partner',
            email: props.user?.email || '',
            phone: props.user?.phone || '',
        };
    },

    handleSubmit: values => {

    },
})(InnerForm);
  
export default FirstForm;
import React, { useState } from 'react';
import { withFormik, FormikProps, Form, FieldHookConfig, useField } from 'formik';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { ISingleUser } from '../../entities/users';


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
  label: string;
  editMode? : boolean;
}

const TextField = (props: ITextFieldProps & FieldHookConfig<string>) => {
  const [field] = useField(props);
  return (
    <StyledTextField>
      <StyledLabel htmlFor={props.id || props.name}>{props.label}</StyledLabel>
      <StyledTextInput autoComplete="off" spellCheck="false" disabled={props.editMode ? null : true} {...field} {...props} />
    </StyledTextField>
  );
};

const StyledFileField = styled.div`
  position: relative;
  height: 16px;
  background-color: #f4f5fa;
  margin-top: 10px;
  padding: 12px;
`;

const StyledFileInput = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  cursor: pointer;
  opacity: 0 !important;
`;

const FileFieldInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FileFieldText = styled.div`
  font-size: 15px;
  margin-left: 5px;
`;

interface IFileFieldProps {
  editMode? : boolean;
}

const FileField = (props: IFileFieldProps & FieldHookConfig<string>) => {
  const [field] = useField(props);
  const [fileName, setFileName] = useState<string | undefined>('Add attachment ...')
  return (
    <StyledFileField>
      <StyledFileInput
        onChange={((event: React.ChangeEvent<HTMLInputElement>) => setFileName(event.target?.files?.item(0)?.name))}
        disabled={props.editMode ? null : true}
        {...props} 
       />
      <FileFieldInner>
        <Icon src="/icons/xfile.png" />
        <FileFieldText {...field} >{fileName}</FileFieldText>
      </FileFieldInner>
    </StyledFileField>
  );
};

const StyledUserSelectField = styled.div`
  display: flex;
  position: relative;
  height: 32px;
  background-color: #f4f5fa;
  margin-top: 5px;
  padding: 4px 8px;
`;

const UserImage = styled.img`
    height: 32px;
    border-radius: 32px;
    min-width: 32px;
    
`;

const UserSelect = styled.select`
    background: transparent;
    color: #232C47;
    padding: 4px 10px;
    font-size: 15px;
    font-weight: bold;
    margin-right: 7px;
    border-radius: 4px;
    border: none;
    appearance: none;
    outline: none;
    cursor: pointer;

    option {
      background: #f5f7f9;
      color: #4b5268;
      border: none;
      outline: none;
    }
`; 

const Shortcut = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    align-items: center;
    cursor: pointer;
`;

const ShortcutIcon = styled.img`
    height: 16px;
    min-width: 16px;
    
`;


const ShortcutText = styled.div`
    color: #232C47;
    font-size: 15px;
    margin-left: 9px;
`;

interface IUserSelectFieldProps {
  editMode? : boolean;
  users: ISingleUser[];
  getUserImage(userId: number | undefined): string | undefined;
}

const UserSelectField = (props: IUserSelectFieldProps & FieldHookConfig<string>) => {
  const [field] = useField(props);
  const [user, setUser] = useState<ISingleUser | undefined>(props.users[0]);

  return (
    <StyledUserSelectField>
      <UserImage src={props.getUserImage(user?.id)} />
      <UserSelect
        onChange={((event: React.ChangeEvent<HTMLInputElement>) => setUser(
          props.users.find((user: ISingleUser) => user.id === parseInt(event.target.value))
        ))}
        disabled={props.editMode ? null : true}
        {...props} 
      >
        {props.users.map((user: ISingleUser, index: number) =>
          <option key={index} value={user.id}>{user.name}</option>
        )}
      </UserSelect>
      <Shortcut>
        <ShortcutIcon src="/icons/xmessage2.png"/>
        <ShortcutText>Message</ShortcutText>
      </Shortcut>
      <Shortcut>
        <ShortcutIcon src="/icons/xuser.png"/>
        <ShortcutText>Profile</ShortcutText>
      </Shortcut>
    </StyledUserSelectField>
  );
};


const StyledColumnField = styled.div`

`;

const Columns = styled.div`
    display: flex;
    flex-direction: row;
`;

const Column = styled.div`
  max-width: 145px;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding: 11px 20px;
`;

const List = styled.ul`
  border-top: 1px solid #e8e8e8;
  padding-left: 20px;
`;

const Item = styled.li`
  margin-top: 15px;
`;

const ListMin = styled.ul`
  border-top: none;
  padding-left: 20px;
`;

const ItemMin = styled.li`
  margin-top: 0;
`;

const StyledColumnInput = styled.input`
  color: #232c47;
  font-size: 15px;
  background: none;
  border: none;
  appearance: none;
  width: 100%;
  cursor: text;
`;



interface IColumnFieldProps {
  editMode? : boolean;
}

const ColumnField = (props: IColumnFieldProps & FieldHookConfig<string>) => {
  const [field] = useField(props);
  return (
    <StyledColumnField>
      <StyledColumnInput autoComplete="off" disabled={props.editMode ? null : true} {...field} {...props} />
    </StyledColumnField>
  );
};

const StyledSelectField = styled.div`

`;

const StyledSelect = styled.select`
    background: #e6f0f3;
    color: #4693a7;
    padding: 4px 10px;
    font-size: 15px;
    margin-right: 7px;
    border-radius: 4px;
    border: none;
    appearance: none;
    outline: none;
    cursor: pointer;

    option {
      background: #f5f7f9;
      color: #4b5268;
      border: none;
      outline: none;
    }
`; 

interface ISelectFieldProps {
  editMode? : boolean;
}

const SelectField = (props: ISelectFieldProps & FieldHookConfig<string>) => {
  const [field] = useField(props);
  return (
    <StyledSelectField>
      <StyledSelect disabled={props.editMode ? null : true}  {...field} {...props} />
    </StyledSelectField>
  );
};







interface FormValues {
  hourlyFee: string;
}

interface OtherProps {
  formEditMode: boolean;
  users: ISingleUser[];
  getUserImage(userId: number | undefined): string | undefined;
}


const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { formEditMode, users, getUserImage} = props;
  return (
    <Form>
        <FormGroup>
          <GroupRow>
            <StyledLabel>Expertise</StyledLabel>
            <RowInner>
              <SelectField name="selectExpertise1" editMode={formEditMode}>
                <option value="1">Mergers and acquisition</option>
                <option value="2">Tax</option>
                <option value="3">Social</option>
                <option value="4">Banking</option>
                <option value="5">Environment</option>
                <option value="6">Private Equity</option>
                <option value="7">Finance</option>
                <option value="8">Investigations</option>
                <option value="9">Dispute Resolution</option>
                <option value="10">Trade</option>
              </SelectField>
            </RowInner>
          </GroupRow>
          <GroupRow>
            <StyledLabel>Specialties</StyledLabel>
            <RowInner>
              <SelectField name="selectSpecialties1" editMode={formEditMode}>
                <option value="1">Cross border operation</option>
                <option value="2">Transaction over 500M€/$</option>
                <option value="3">Litigation</option>
                <option value="4">Recovery</option>
                <option value="5">Construction investments</option>
                <option value="6">Services for entrepreneurs</option>
                <option value="7">Real Estate</option>
                <option value="8">Arbitration</option>
                <option value="9">Intellectual Property</option>
                <option value="10">Reviewing firms</option>
              </SelectField>
              <SelectField name="selectSpecialties2" editMode={formEditMode}>
                <option value="1">Cross border operation</option>
                <option value="2">Transaction over 500M€/$</option>
                <option value="3">Litigation</option>
                <option value="4">Recovery</option>
                <option value="5">Construction investments</option>
                <option value="6">Services for entrepreneurs</option>
                <option value="7">Real Estate</option>
                <option value="8">Arbitration</option>
                <option value="9">Intellectual Property</option>
                <option value="10">Reviewing firms</option>
              </SelectField>
            </RowInner>
          </GroupRow>
          <GroupRow>
            <StyledLabel>Admission to practice law</StyledLabel>
            <RowInner>
              <SelectField name="selectAdmission1" editMode={formEditMode}>
                <option value="1">Paris bar association</option>
                <option value="2">Tunisian bar association</option>
                <option value="3">American bar association</option>
                <option value="4">National lawyers guild</option>
                <option value="5">International bar association</option>
                <option value="6">Hong kong bar association</option>
                <option value="7">Law Society of British Columbia</option>
                <option value="8">Hispanic national bar association</option>
                <option value="9">Israel var association</option>
                <option value="10">Malaysian bar association</option>
              </SelectField>
              <SelectField name="selectAdmission2" editMode={formEditMode}>
                <option value="1">Paris bar association</option>
                <option value="2">Tunisian bar association</option>
                <option value="3">American bar association</option>
                <option value="4">National lawyers guild</option>
                <option value="5">International bar association</option>
                <option value="6">Hong kong bar association</option>
                <option value="7">Law Society of British Columbia</option>
                <option value="8">Hispanic national bar association</option>
                <option value="9">Israel var association</option>
                <option value="10">Malaysian bar association</option>
              </SelectField>
            </RowInner>
          </GroupRow>
          <GroupRow>
            <StyledLabel>Countries</StyledLabel>
            <RowInner>
              <SelectField name="selectCountries1" editMode={formEditMode}>
                <option value="1">Tunisia</option>
                <option value="2">France</option>
                <option value="3">USA</option>
                <option value="4">Italia</option>
                <option value="5">Germany</option>
                <option value="6">Canada</option>
                <option value="7">Switzerland</option>
                <option value="8">Australia</option>
                <option value="9">Spain</option>
                <option value="10">Taiwan</option>
              </SelectField>
            </RowInner>
          </GroupRow>
          
        </FormGroup>
        <FormGroup>
            <GroupTitle>Panel informations</GroupTitle>
            <GroupRow>
              <TextField
                label="Hourly fee"
                name="hourlyFee"
                type="text"
                editMode={formEditMode}
              />
            </GroupRow>
            <GroupRow>
            <TextField
                label="Terms & conditions"
                name="termsAndConditions"
                type="text"
                editMode={formEditMode}
              />
              <FileField
                name="attachment"
                type="file"
                editMode={formEditMode}
              />
            </GroupRow>
            <GroupRow>
              <TextField
                  label="Services & projects"
                  name="servicesAndProjects"
                  type="text"
                  editMode={formEditMode}
                />
            </GroupRow>
            <GroupRow>
              <StyledLabel>Internal correspondants</StyledLabel>
              <UserSelectField
                  name="firstCorrespondant"
                  type="text"
                  editMode={formEditMode}
                  users={users}
                  getUserImage={getUserImage}
              />
              <UserSelectField
                  name="secondCorrespondant"
                  type="text"
                  editMode={formEditMode}
                  users={users}
                  getUserImage={getUserImage}
              />
            </GroupRow>
        </FormGroup>
        <FormGroup>
            <GroupTitle>Proposals</GroupTitle>
            <Columns>
              <Column>
                <Label>Name</Label>
                <List>
                  <Item>
                      <ColumnField
                        name="name1"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="name2"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="name3"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                </List>
              </Column>
              <Column>
                <Label>Entity</Label>
                <List>
                  <Item>
                      <ColumnField
                        name="entity1"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="entity2"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="entity3"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                </List>
              </Column>
              <Column>
                <Label>Location</Label>
                <List>
                  <Item>
                      <ColumnField
                        name="location1"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="location2"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="location3"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                </List>
              </Column>
              <Column>
                <Label>Expertise</Label>
                <List>
                  <Item>
                      <ColumnField
                        name="expertise1"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="expertise2"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="expertise3"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                </List>
              </Column>
              <Column>
                <Label>Date</Label>
                <List>
                  <Item>
                      <ColumnField
                        name="date1"
                        type="date"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="date2"
                        type="date"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="date3"
                        type="date"
                        editMode={formEditMode}
                      />
                  </Item>
                </List>
              </Column>
              <Column>
                <Label>Firm</Label>
                <List>
                  <Item>
                      <ColumnField
                        name="firm1"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="firm2"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="firm3"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                </List>
              </Column>
              
            </Columns>
            <LinkRow>
              <FlexEnd>
                <Link to="/proposals"><LinkText>See more proposals</LinkText></Link>
              </FlexEnd>
            </LinkRow>
        </FormGroup>
        <FormGroup>
            <GroupTitle>Internal reviews</GroupTitle>
            <Columns>
              <Column>
                <Label>Name</Label>
                <List>
                  <Item>
                      <ColumnField
                        name="name10"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="name20"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="name30"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                </List>
              </Column>
              <Column>
                <Label>Entity</Label>
                <List>
                  <Item>
                      <ColumnField
                        name="entity10"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="entity20"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="entity30"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                </List>
              </Column>
              <Column>
                <Label>Location</Label>
                <List>
                  <Item>
                      <ColumnField
                        name="location10"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="location20"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="location30"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                </List>
              </Column>
              <Column>
                <Label>Expertise</Label>
                <List>
                  <Item>
                      <ColumnField
                        name="expertise10"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="expertise20"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="expertise30"
                        type="text"
                        editMode={formEditMode}
                      />
                  </Item>
                </List>
              </Column>
              <Column>
                <Label>Date</Label>
                <List>
                  <Item>
                      <ColumnField
                        name="date10"
                        type="date"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="date20"
                        type="date"
                        editMode={formEditMode}
                      />
                  </Item>
                  <Item>
                      <ColumnField
                        name="date30"
                        type="date"
                        editMode={formEditMode}
                      />
                  </Item>
                </List>
              </Column>
            </Columns>
            <LinkRow>
                <Link to="/reviews"><LinkText>See more reviews</LinkText></Link>
            </LinkRow>
        </FormGroup>
        <FormGroup>
            <GroupTitle>Amount of fees</GroupTitle>
            <Columns>
              <Column>
                <Label>Year</Label>
                <ListMin>
                  <ItemMin>
                      <ColumnField
                        name="year1"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  <ItemMin>
                      <ColumnField
                        name="year2"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  <ItemMin>
                      <ColumnField
                        name="year3"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                </ListMin>
              </Column>
              <Column>
                <Label>Cost center</Label>
                <ListMin>
                  <ItemMin>
                      <ColumnField
                        name="cost1"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  <ItemMin>
                      <ColumnField
                        name="cost2"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  <ItemMin>
                      <ColumnField
                        name="cost3"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  <ItemMin>
                      <ColumnField
                        name="cost4"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  <ItemMin>
                      <ColumnField
                        name="cost5"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  
                </ListMin>
              </Column>
              <Column>
                <Label>Total amount</Label>
                <ListMin>
                  <ItemMin>
                      <ColumnField
                        name="amount1"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  <ItemMin>
                      <ColumnField
                        name="amount2"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  <ItemMin>
                      <ColumnField
                        name="amount3"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  <ItemMin>
                      <ColumnField
                        name="amount4"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  <ItemMin>
                      <ColumnField
                        name="amount5"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  
                </ListMin>
              </Column>
              <Column>
                <Label>Law firm</Label>
                <ListMin>
                  <ItemMin>
                      <ColumnField
                        name="lawFirm1"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  <ItemMin>
                      <ColumnField
                        name="lawFirm2"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  <ItemMin>
                      <ColumnField
                        name="lawFirm3"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  <ItemMin>
                      <ColumnField
                        name="lawFirm4"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  <ItemMin>
                      <ColumnField
                        name="lawFirm5"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  <ItemMin>
                      <ColumnField
                        name="lawFirm6"
                        type="text"
                        editMode={formEditMode}
                      />
                  </ItemMin>
                  
                </ListMin>
              </Column>
            </Columns>
        </FormGroup>
    </Form>
  );
};

interface MyFormProps {
  formEditMode: boolean;
  users: ISingleUser[];
  getUserImage(userId: number | undefined): string | undefined;
}


const SecondForm = withFormik<MyFormProps, FormValues>({

  mapPropsToValues: props => {
    return {
      hourlyFee: '610€/hour (Negociated)',
      termsAndConditions: 'Monthly 10k€ retainer - see with Jeanny Smith',
      servicesAndProjects: 'Corporate M&A and international acquisition',

      name1: 'Operation Ti...',
      name2: 'Op. Prometh...',
      name3: 'Op. Latandre',
      entity1: 'Renault Co ...',
      entity2: 'Renault HQ',
      entity3: 'Renault Br ...',
      location1: 'France',
      location2: 'USA',
      location3: 'Italia',
      expertise1: '#Tax',
      expertise2: '#M&A',
      expertise3: '#Social',
      date1: '2018-01-20',
      date2: '2019-02-18',
      date3: '2019-02-18',
      firm1: 'Racine',
      firm2: 'Clifford chance',
      firm3: 'SVZ',

      name10: 'Operation Ti...',
      name20: 'Op. Prometh...',
      name30: 'Op. Latandre',
      entity10: 'Renault Co ...',
      entity20: 'Renault HQ',
      entity30: 'Renault Br ...',
      location10: 'France',
      location20: 'USA',
      location30: 'Italia',
      expertise10: '#Tax',
      expertise20: '#M&A',
      expertise30: '#Social',
      date10: '2018-01-20',
      date20: '2019-02-18',
      date30: '2019-02-18',
      firm10: 'Racine',
      firm20: 'Clifford chance',
      firm30: 'SVZ',

      year1: '2019',
      year2: '2018',
      year3: '2017',
      
      cost1: 'CS 135',
      cost2: 'CS 135',
      cost3: 'CS 47',
      cost4: 'CS 135',
      cost5: 'CS 32',
      
      amount1: '3 500€',
      amount2: '9 500€',
      amount3: '10 500€',
      amount4: '18 500€',
      amount5: '15 500€',
      
      lawFirm1: 'Clifford chance',
      lawFirm2: 'Linklaters',
      lawFirm3: 'Linklaters',
      lawFirm4: 'Linklaters',
      lawFirm5: 'Linklaters',
      lawFirm6: 'Linklaters',
      
    };
  },

  handleSubmit: values => {

  },
})(InnerForm);

export default SecondForm;
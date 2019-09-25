/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Footer from '../components/Footer/component';
import FieldSet from '../components/FieldSet/component';
import TextInput from '../components/TextInput/component';
import Paragraph from '../components/Paragraph/component';
import Button from '../components/Button/component';
import { TOGGLE_CREATE_ACCOUNT_CHOOSE_PASSWORD } from '../reducers';

const CreateAccountChoosePassword = () => {
  const createAccountChoosePasswordFilled = useSelector((state) => state.createAccountChoosePasswordFilled);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Container>
        <PhaseBanner />
        <Main>
          <Row>
            <Column columnWidth="two-thirds">
              <Heading level="h1" caption="Step 1/3 - Create account">Choose password</Heading>
              <FieldSet errorMessage="Please enter a password" error={false}>
                <TextInput type="password" inputWidth="two-thirds" id="password" label="Password" hint="(Your password needs to be a minimum of 8 letters and should include at least one capital and one number)." onChange={() => dispatch({ type: TOGGLE_CREATE_ACCOUNT_CHOOSE_PASSWORD })} value={createAccountChoosePasswordFilled ? '**************' : ''} />
                <TextInput type="password" inputWidth="two-thirds" id="confirm-password" label="Confirm password" onChange={() => dispatch({ type: TOGGLE_CREATE_ACCOUNT_CHOOSE_PASSWORD })} value={createAccountChoosePasswordFilled ? '**************' : ''} />
                <Paragraph>Next we will ask you to provide some information about yourself and your company.</Paragraph>
                <Button href="/create-account-add-company-details">Continue</Button>
              </FieldSet>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default CreateAccountChoosePassword;

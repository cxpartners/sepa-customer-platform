/* eslint-disable react/jsx-one-expression-per-line */
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
import BackLink from '../components/BackLink/component';
import Paragraph from '../components/Paragraph/component';
import FieldSet from '../components/FieldSet/component';
import TextInput from '../components/TextInput/component';
import Link from '../components/Link/component';
import Button from '../components/Button/component';
import { UPDATE_SIGN_UP_EMAIL_VALUE } from '../reducers';

const SignUp = () => {
  const signUpEmailValue = useSelector((state) => state.signUpEmailValue);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <Container>
        <PhaseBanner />
        <BackLink href="/start-page" />
        <Main>
          <Row>
            <Column columnWidth="two-thirds">
              <Heading level="h1">Sign up</Heading>
              <Paragraph>Please enter your email address to register so we can verify your account.</Paragraph>
              <FieldSet>
                <TextInput id="email-address" label="Email address" type="email" inputWidth="two-thirds" onChange={(e) => dispatch({ type: UPDATE_SIGN_UP_EMAIL_VALUE, payload: e.target.value })} value={signUpEmailValue} />
              </FieldSet>
              <Button href="/sign-up-confirmation">Sign up</Button>
              <div>
                <Paragraph>Already have an account? Then please <Link href="/">login</Link></Paragraph>
              </div>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;

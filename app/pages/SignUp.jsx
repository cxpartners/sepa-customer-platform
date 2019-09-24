/* eslint-disable max-len */
import React from 'react';
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

class SignUp extends React.PureComponent {
  render() {
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
                  <TextInput label="Email address" inputWidth="two-thirds" />
                </FieldSet>
                <Button href="/sign-up-confirmation">Sign up</Button>
                <Paragraph>
                  <Link href="/">Get help with this page</Link>
                </Paragraph>
              </Column>
            </Row>
          </Main>
        </Container>
        <Footer />
      </>
    );
  }
}

export default SignUp;

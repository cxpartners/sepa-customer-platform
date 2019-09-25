import React from 'react';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Footer from '../components/Footer/component';
import List from '../components/List/component';
import Link from '../components/Link/component';
import Tag from '../components/Tag/component';

class Index extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <Container>
          <PhaseBanner />
          <Main>
            <Row>
              <Column columnWidth="full">
                <Heading level="h1" caption="Navigation for prototype">Index page</Heading>
                <Heading level="h2">Create account</Heading>
                <List ordered>
                  <li>
                    <Link href="/start">Start page</Link>
                    &nbsp;&mdash;&nbsp;
                    <Tag>TO DO</Tag>
                  </li>
                  <li>
                    <Link href="/sign-up">Sign up</Link>
                  &nbsp;&mdash;&nbsp;
                    <Tag>TO DO</Tag>
                  </li>
                  <li>
                    <Link href="/email-notification">Email notification</Link>
                  &nbsp;&mdash;&nbsp;
                    <Tag>TO DO</Tag>
                  </li>
                  <li>
                    <Link href="/create-account">Create account</Link>
                  &nbsp;&mdash;&nbsp;
                    <Tag>TO DO</Tag>
                  </li>
                  <li>
                    <Link href="/account-details">Account details</Link>
                  &nbsp;&mdash;&nbsp;
                    <Tag>TO DO</Tag>
                  </li>
                </List>
              </Column>
            </Row>
          </Main>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Index;

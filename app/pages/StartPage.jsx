import React from 'react';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Footer from '../components/Footer/component';

class StartPage extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <Container>
          <PhaseBanner />
          <Main>
            <Row>
              <Column columnWidth="full">
                <Heading level="h1">Start page</Heading>
              </Column>
            </Row>
          </Main>
        </Container>
        <Footer />
      </>
    );
  }
}

export default StartPage;

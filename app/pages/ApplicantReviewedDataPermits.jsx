import React from 'react';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Footer from '../components/Footer/component';
import Button from '../components/Button/component';
import PermitList from '../components/PermitList/component';
import PermitListRow from '../components/PermitListRow/component';
import Warning from '../components/Warning/component';
import Details from '../components/Details/component';

const Permit = () => {
  const name = 'Salmon & Salmon Ltd';

  return (
    <>
      <Header isNotification userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <Main>
          <Row>
            <Column columnWidth="full">
              <Warning>You have new notifications</Warning>
              <Heading caption="Account reference number: 860120" level="h1">{name}</Heading>
              <Button>Create new permit</Button>
              <Heading level="h2">Your permits</Heading>
              <PermitList caption="In progress (2)" dateColumn="Last updated">
                <PermitListRow key="1" listKey="CAR/L/4336591" status="pre-application (2)" isActive href="/" siteName="Kimelford" waterBody="Loch Tarbot Gallaway" date="17/02/2020" />
                <PermitListRow key="2" listKey="CAR/L/4336592" status="pre-application (1)" isActive href="/" siteName="Loch Katrine Salmon Farm" waterBody="Loch Katrine" date="17/02/2020" />
              </PermitList>
              <PermitList caption="Awarded permits (4)" dateColumn="Review date">
                <PermitListRow key="1" listKey="CAR/L/4336581" siteName="Loch Mhòrair Salmon Farm" waterBody="Loch Mhòrair" date="17/02/2020" />
                <PermitListRow key="2" listKey="CAR/L/4336591" siteName="Kimelford" waterBody="Loch Tarbot Gallaway" date="17/02/2020" />
                <PermitListRow key="3" listKey="CAR/L/4336322" siteName="Carpford" waterBody="Loch Mhòrair" date="17/02/2020" />
                <PermitListRow key="4" listKey="CAR/L/4336323" siteName="Carradale (north)" waterBody="Loch Tarbot Gallaway" date="17/02/2020" />
              </PermitList>
              <Details modifier="govuk-!-font-weight-bold" title="Expired permits">&nbsp;</Details>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer href="/permits-time-passes" />
    </>
  );
};

export default Permit;

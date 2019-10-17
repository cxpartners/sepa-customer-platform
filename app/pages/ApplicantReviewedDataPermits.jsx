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
              <Warning isInfo>You have new notifications</Warning>
              <Heading caption="Account reference number: 860120" level="h1">{name}</Heading>
              <Button>Create new permit</Button>
              <Heading level="h2">Your permits</Heading>
              <PermitList caption="In progress (2)" dateColumn="Last updated">
                <PermitListRow key="1" listKey="CAR/L/4336581" status="pre-application (2)" isActive href="/applicant-views-data-notification" siteName="Loch Mhòrair Salmon Farm" waterBody="Loch Mhòrair" date="17/10/2019" />
                <PermitListRow key="2" listKey="CAR/L/4336580" status="pre-application" href="/" siteName="Loch Katrine Farm" waterBody="Loch Katrine" date="15/09/2019" />
              </PermitList>
              <PermitList caption="Awarded permits (4)" dateColumn="Review date">
                <PermitListRow key="1" listKey="CAR/L/4336567" siteName="Loch Mhòrair Salmon Farm" waterBody="Loch Mhòrair" date="22/02/2019" />
                <PermitListRow key="2" listKey="CAR/L/4336551" siteName="Kimelford" waterBody="Loch Tarbot" date="08/07/2019" />
                <PermitListRow key="3" listKey="CAR/L/4336322" siteName="Carpford" waterBody="Loch Mhòrair" date="19/06/2019" />
                <PermitListRow key="4" listKey="CAR/L/4336223" siteName="Carradale (north)" waterBody="Loch Tarbot" date="04/06/2019" />
              </PermitList>
              <Details modifier="govuk-!-font-weight-bold" title="Surrendered permits">&nbsp;</Details>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer href="/permits-time-passes" />
    </>
  );
};

export default Permit;

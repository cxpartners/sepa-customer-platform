import React from 'react';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Footer from '../components/Footer/component';
import PermitList from '../components/PermitList/component';
import PermitListRow from '../components/PermitListRow/component';
import Warning from '../components/Warning/component';
import Details from '../components/Details/component';

const Permit = () => (
  <>
    <Header isNotification userName="Oliver Allen" />
    <Container>
      <PhaseBanner />
      <Main>
        <Row>
          <Column columnWidth="full">
            <Warning>You have new notifications</Warning>
            <Heading level="h1">All permits</Heading>
            <PermitList caption="In progress (20)" dateColumn="Last updated">
              <PermitListRow key="1" listKey="CAR/L/4336591" status="pre-application (2)" isActive href="/" siteName="Kimelford" waterBody="Loch Tarbot Gallaway" date="17/02/2019" />
              <PermitListRow key="2" listKey="CAR/L/4336592" status="pre-application (1)" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="3" listKey="CAR/L/4336592" status="application" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="4" listKey="CAR/L/4336592" status="application" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="5" listKey="CAR/L/4336592" status="application" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="6" listKey="CAR/L/4336592" status="application" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="7" listKey="CAR/L/4336592" status="application" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="8" listKey="CAR/L/4336592" status="assessment" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="9" listKey="CAR/L/4336592" status="assessment" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="10" listKey="CAR/L/4336592" status="assessment" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="11" listKey="CAR/L/4336592" status="assessment" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="12" listKey="CAR/L/4336592" status="consultation" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="13" listKey="CAR/L/4336592" status="consultation" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="14" listKey="CAR/L/4336592" status="consultation" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="15" listKey="CAR/L/4336592" status="consultation" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="16" listKey="CAR/L/4336592" status="permit" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="17" listKey="CAR/L/4336592" status="permit" isActive href="/" siteName="LKimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="18" listKey="CAR/L/4336592" status="permit" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="19" listKey="CAR/L/4336592" status="monitoring" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
              <PermitListRow key="20" listKey="CAR/L/4336592" status="monitoring" isActive href="/" siteName="Kimelford" waterBody="Loch Katrine" date="17/02/2019" />
            </PermitList>
            <Details modifier="govuk-!-font-weight-bold" title="Awarded permits (207)">&nbsp;</Details>
            <Details modifier="govuk-!-font-weight-bold" title="Expired permits (622)">&nbsp;</Details>

          </Column>
        </Row>
      </Main>
    </Container>
    <Footer href="/permits-time-passes" />
  </>
);

export default Permit;

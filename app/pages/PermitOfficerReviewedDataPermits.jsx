import React from 'react';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Tabs from '../components/Tabs/component';
import TabList from '../components/TabList/component';
import Tab from '../components/Tab/component';
import Select from '../components/Select/component';
import Footer from '../components/Footer/component';
import PermitList from '../components/PermitList/component';
import PermitListRow from '../components/PermitListRow/component';
import Warning from '../components/Warning/component';
import Details from '../components/Details/component';

const Permit = () => (
  <>
    <Header isNotification userName="Lauren McKenna" />
    <Container>
      <PhaseBanner />
      <Main>
        <Row>
          <Column columnWidth="full">
            <Warning isInfo>You have new notifications</Warning>
          </Column>
        </Row>
        <Tabs title="Tab List">
          <TabList>
            <Tab href="assigned-permits" title="Your assigned permits" selected />
            <Tab href="/permit-officer-reviewed-data-permits-all" title="All permits" />
          </TabList>
        </Tabs>
        <Row>
          <Column columnWidth="two-thirds">
            <Heading level="h1">Your permits</Heading>
          </Column>
          <Column columnWidth="one-third">
            <Select />
          </Column>
        </Row>
        <Row>
          <Column columnWidth="full">
            <PermitList caption="In progress (4)" dateColumn="Last updated">
              <PermitListRow key="1" listKey="CAR/L/4336581" status="pre-application (2)" isActive href="/" siteName="Kimelford" waterBody="Lauren McKenna" date="17/02/2019" />
              <PermitListRow key="2" listKey="CAR/L/4336580" status="pre-application (1)" isActive href="/" siteName="Ardfern" waterBody="Lauren McKenna" date="15/02/2019" />
              <PermitListRow key="3" listKey="CAR/L/4336579" status="application" href="/" siteName="Kimelford" waterBody="Lauren McKenna" date="15/01/2019" />
              <PermitListRow key="4" listKey="CAR/L/4336578" status="application" href="/" siteName="Kimelford" waterBody="Lauren McKenna" date="12/01/2019" />
            </PermitList>
            <Details modifier="govuk-!-font-weight-bold" title="Awarded permits (21)">&nbsp;</Details>
          </Column>
        </Row>
      </Main>
    </Container>
    <Footer href="/user-types-slice-two" />
  </>
);

export default Permit;

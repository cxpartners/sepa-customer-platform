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
import AssignedList from '../components/AssignedList/component';
import AssignedListRow from '../components/AssignedListRow/component';
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
            <Heading level="h1">Your assigned permits</Heading>
          </Column>
          <Column columnWidth="one-third">
            <Select />
          </Column>
        </Row>
        <Row>
          <Column columnWidth="full">
            <AssignedList caption="In progress (4)" dateColumn="Last updated">
              <AssignedListRow key="1" listKey="CAR/L/4336581" status="pre-application (2)" isActive href="/" siteName="Kimelford" assignedOfficer="Lauren McKenna" date="17/02/2019" />
              <AssignedListRow key="2" listKey="CAR/L/4336580" status="pre-application (1)" isActive href="/" siteName="Ardfern" assignedOfficer="Lauren McKenna" date="15/02/2019" />
              <AssignedListRow key="3" listKey="CAR/L/4336579" status="application" href="/" siteName="Kimelford" assignedOfficer="Lauren McKenna" date="15/01/2019" />
              <AssignedListRow key="4" listKey="CAR/L/4336578" status="application" href="/" siteName="Kimelford" assignedOfficer="Lauren McKenna" date="12/01/2019" />
            </AssignedList>
            <Details modifier="govuk-!-font-weight-bold" title="Awarded permits (21)">&nbsp;</Details>
          </Column>
        </Row>
      </Main>
    </Container>
    <Footer href="/user-types-slice-two" />
  </>
);

export default Permit;

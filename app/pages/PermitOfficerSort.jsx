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
            <Tab href="/permit-officer-reviewed-data-permits" title="Your assigned permits" />
            <Tab href="all-permits" title="All permits" selected />
          </TabList>
        </Tabs>
        <Row>
          <Column columnWidth="two-thirds">
            <Heading level="h1">All permits</Heading>
          </Column>
          <Column columnWidth="one-third">
            <Select />
          </Column>
        </Row>
        <Row>
          <Column columnWidth="full">
            <AssignedList caption="In progress (22)" dateColumn="Last updated">
              <AssignedListRow key="8" listKey="CAR/L/4336574" status="application" isActive href="/" siteName="Stirling" assignedOfficer="Brandon Clark" date="08/11/2018" />
              <AssignedListRow key="12" listKey="CAR/L/4336570" status="assessment" href="/" siteName="Stirling" assignedOfficer="Brandon Clark" date="18/09/2018" />
              <AssignedListRow key="16" listKey="CAR/L/4336566" status="consultation" href="/" siteName="Stirling" assignedOfficer="Brandon Clark" date="05/08/2018" />
              <AssignedListRow key="19" listKey="CAR/L/4336563" status="permit" href="/" siteName="Stirling" assignedOfficer="Brandon Clark" date="24/07/2018" />
              <AssignedListRow key="5" listKey="CAR/L/4336577" status="application" isActive href="/" siteName="Oban" assignedOfficer="Edith Duffy" date="04/01/2019" />
              <AssignedListRow key="7" listKey="CAR/L/4336575" status="application" href="/" siteName="Oban" assignedOfficer="Edith Duffy" date="14/12/2018" />
              <AssignedListRow key="11" listKey="CAR/L/4336571" status="assessment" href="/" siteName="Oban" assignedOfficer="Edith Duffy" date="22/09/2018" />
              <AssignedListRow key="15" listKey="CAR/L/4336567" status="consultation" href="/" siteName="Oban" assignedOfficer="Edith Duffy" date="24/08/2018" />
              <AssignedListRow key="22" listKey="CAR/L/4336560" status="monitoring" href="/" siteName="Oban" assignedOfficer="Edith Duffy" date="09/07/2018" />
              <AssignedListRow key="6" listKey="CAR/L/4336576" status="application" href="/" siteName="Dumfries" assignedOfficer="Adam McGill" date="22/12/2018" />
              <AssignedListRow key="10" listKey="CAR/L/4336572" status="assessment" isActive href="/" siteName="Dumfries" assignedOfficer="Adam McGill" date="08/10/2018" />
              <AssignedListRow key="14" listKey="CAR/L/4336568" status="consultation" href="/" siteName="Dumfries" assignedOfficer="Adam McGill" date="27/08/2018" />
              <AssignedListRow key="18" listKey="CAR/L/4336564" status="permit" href="/" siteName="Kyle" assignedOfficer="Adam McGill" date="28/07/2018" />
              <AssignedListRow key="21" listKey="CAR/L/4336561" status="monitoring" href="/" siteName="Kyle" assignedOfficer="Adam McGill" date="15/07/2018" />
              <AssignedListRow key="1" listKey="CAR/L/4336581" status="pre-application (2)" isActive href="/" siteName="Kimelford" assignedOfficer="Lauren McKenna" date="17/02/2019" />
              <AssignedListRow key="2" listKey="CAR/L/4336580" status="pre-application (1)" isActive href="/" siteName="Ardfern" assignedOfficer="Lauren McKenna" date="15/02/2019" />
              <AssignedListRow key="3" listKey="CAR/L/4336579" status="application" href="/" siteName="Kimelford" assignedOfficer="Lauren McKenna" date="15/01/2019" />
              <AssignedListRow key="4" listKey="CAR/L/4336578" status="application" href="/" siteName="Kimelford" assignedOfficer="Lauren McKenna" date="12/01/2019" />
              <AssignedListRow key="9" listKey="CAR/L/4336573" status="application" href="/" siteName="Kimelford" assignedOfficer="Lauren McKenna" date="02/10/2018" />
              <AssignedListRow key="13" listKey="CAR/L/4336569" status="assessment" href="/" siteName="Kimelford" assignedOfficer="Lauren McKenna" date="06/09/2018" />
              <AssignedListRow key="17" listKey="CAR/L/4336565" status="consultation" href="/" siteName="Isle of Mull" assignedOfficer="Lauren McKenna" date="30/07/2018" />
              <AssignedListRow key="20" listKey="CAR/L/4336562" status="permit" href="/" siteName="Isle of Mull" assignedOfficer="Lauren McKenna" date="18/07/2018" />
            </AssignedList>
            <Details modifier="govuk-!-font-weight-bold" title="Awarded permits (207)">&nbsp;</Details>
            <Details modifier="govuk-!-font-weight-bold" title="Surrendered permits (22)">&nbsp;</Details>

          </Column>
        </Row>
      </Main>
    </Container>
    <Footer href="/user-types-slice-two" />
  </>
);

export default Permit;

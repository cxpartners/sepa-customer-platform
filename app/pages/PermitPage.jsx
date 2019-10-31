/* eslint-disable react/no-array-index-key */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Footer from '../components/Footer/component';
import Heading from '../components/Heading/component';
import SummaryList from '../components/SummaryList/component';
import SummaryListRow from '../components/SummaryListRow/component';
import Button from '../components/Button/component';
import Reference from '../components/Reference/component';
import Tabs from '../components/Tabs/component';
import TabList from '../components/TabList/component';
import Tab from '../components/Tab/component';
import TabPanel from '../components/TabPanel/component';
import Accordion from '../components/Accordion/component';
import AccordionSection from '../components/AccordionSection/component';
import BackLink from '../components/BackLink/component';
import Guidance from '../components/Guidance/component';
import ActionBoxComplete from '../components/ActionBoxComplete/component';

const PermitPage = () => {
  const locationArray = useSelector((state) => state.locationArray);

  return (
    <>
      <Header isNotification userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <BackLink href="/permits-with-notifications" />
        <Main>
          <Row>
            <Column columnWidth="full">
              <Heading caption="Loch Mhòrair" level="h1">
                Loch Mhòrair Salmon Farm
                <Reference>CAR/L/4336581</Reference>
              </Heading>
              <Button href="pre-app-form-start">Add permit variation</Button>
            </Column>
          </Row>
          <Row>
            <Column columnWidth="full">
              <Tabs title="Tab List">
                <TabList>
                  <Tab href="overview" title="Overview" selected />
                  <Tab href="application" title="Application" />
                  <Tab href="assessment" title="Assessment" />
                  <Tab href="consultation" title="Consultation" />
                  <Tab href="permit" title="Permit" />
                  <Tab href="monitoring" title="Monitoring" />
                </TabList>
                <TabPanel id="overview" title="">
                  <Accordion>
                    <AccordionSection expanded locked={false} sectionKey="1" heading="Pre-application details" aria-expanded="true">
                      <Row>
                        <Column columnWidth="two-thirds">
                          <Heading level="h3">Company secretary contact</Heading>
                          <SummaryList>
                            <SummaryListRow key="1" listKey="Name">Company Secretary</SummaryListRow>
                            <SummaryListRow key="2" listKey="Email">company.secretary@salmonandsalmon.com</SummaryListRow>
                            <SummaryListRow key="3" listKey="Phone number">07824 325 572</SummaryListRow>
                          </SummaryList>
                          <Heading level="h3">Application contact</Heading>
                          <SummaryList>
                            <SummaryListRow key="1" listKey="Name">Oliver Allen</SummaryListRow>
                            <SummaryListRow key="2" listKey="Email">o.allen@salmonandsalmon.com</SummaryListRow>
                            <SummaryListRow key="3" listKey="Phone number">07824 327 552</SummaryListRow>
                          </SummaryList>
                          <Heading level="h3">Marine pen fish farm details</Heading>
                          <SummaryList>
                            <SummaryListRow key="1" listKey="Site name">Loch Mhòrair Salmon Farm</SummaryListRow>
                            <SummaryListRow key="2" listKey="Water body name">Loch Mhòrair</SummaryListRow>
                            <SummaryListRow key="3" listKey="Number of pens">10</SummaryListRow>
                            {locationArray
                              .map((location) => (
                                <SummaryListRow key={location.pen} listKey={`Pen ${location.pen}`}>{`X ${location.easting} (Eastings), Y ${location.northing} (Northings)`}</SummaryListRow>
                              ))}
                          </SummaryList>
                          <Heading level="h3">Fish details</Heading>
                          <SummaryList>
                            <SummaryListRow key="1" listKey="Species of fish to be farmed">Salmon</SummaryListRow>
                            <SummaryListRow key="2" listKey="Maximum weight of fish (tonnes)">186,786</SummaryListRow>
                            <SummaryListRow key="3" listKey="Maximum feeding rate (kf/t/d)">7</SummaryListRow>
                          </SummaryList>
                          <Heading level="h3">Medicine details</Heading>
                          <SummaryList>
                            <SummaryListRow listKey="Bath sea lice medicines required">
                              Cypermetrin
                              <br />
                              Deltametrin
                              <br />
                              Azamethiphos
                            </SummaryListRow>
                            <SummaryListRow key="1" listKey="In-feed sea lice medicine required">Emamectin benzoate</SummaryListRow>
                          </SummaryList>
                          <Heading level="h3">Additional information</Heading>
                          <br />
                          <ActionBoxComplete>Pre-application review</ActionBoxComplete>
                          <ActionBoxComplete>Initial screening report</ActionBoxComplete>
                        </Column>
                      </Row>
                    </AccordionSection>
                    <AccordionSection expanded={false} locked={false} sectionKey="2" heading="Current data" />
                    <AccordionSection expanded={false} locked={false} sectionKey="3" heading="Modelling" />
                    <AccordionSection expanded={false} locked={false} sectionKey="4" heading="Baseline Survey" />
                  </Accordion>
                </TabPanel>
              </Tabs>
              <Guidance />
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default PermitPage;

PermitPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      licenceId: PropTypes.string,
    }),
  }).isRequired,
};

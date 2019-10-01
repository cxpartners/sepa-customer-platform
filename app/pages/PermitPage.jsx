/* eslint-disable react/no-array-index-key */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Footer from '../components/Footer/component';
import Heading from '../components/Heading/component';
import Paragraph from '../components/Paragraph/component';
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
import Link from '../components/Link/component';
import BackLink from '../components/BackLink/component';

const PermitPage = () => {
  let easting = 182980;
  let northing = 790973;
  const locationArray = [];
  let x = 0;
  do {
    locationArray.push({
      pen: x + 1,
      easting: easting += x * 2,
      northing: northing += x * 3,
    });
    x += 1;
  } while (x < 10);

  return (
    <>
      <Header isNotification={false} userName="Rory McCulloch" />
      <Container>
        <PhaseBanner />
        <BackLink href="/permits" />
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
                    <AccordionSection expanded sectionKey="1" heading="Pre-application details" aria-expanded="true">
                      <Row>
                        <Column columnWidth="two-thirds">
                          <Heading level="h3">Contact details</Heading>
                          <SummaryList>
                            <SummaryListRow listKey="Name">Ewan Gregory</SummaryListRow>
                            <SummaryListRow listKey="Email">e.gregory@salmonandsalmon.com</SummaryListRow>
                            <SummaryListRow listKey="Phone number">07824 325 572</SummaryListRow>
                          </SummaryList>
                          <Heading level="h3">Marine pen fish farm details</Heading>
                          <SummaryList>
                            <SummaryListRow listKey="Site name">Loch Mhòrair Salmon Farm</SummaryListRow>
                            <SummaryListRow listKey="Water body name">Loch Mhòrair</SummaryListRow>
                            <SummaryListRow listKey="Number of pens">10</SummaryListRow>
                            {locationArray
                              .map((location) => (
                                <SummaryListRow listKey={`Pen ${location.pen}`}>{`X ${location.easting} (Eastings), Y ${location.northing} (Northing)`}</SummaryListRow>
                              ))}
                          </SummaryList>
                          <Heading level="h3">Fish details</Heading>
                          <SummaryList>
                            <SummaryListRow listKey="Species of fish to be farmed">Salmon</SummaryListRow>
                            <SummaryListRow listKey="Maximum weight of fish (tonnes)">186,786</SummaryListRow>
                            <SummaryListRow listKey="Maximum feeding rate (kf/t/d)">8</SummaryListRow>
                          </SummaryList>
                          <Heading level="h3">Medicine details</Heading>
                          <SummaryList>
                            <SummaryListRow listKey="Bath sea lice medicines required">
                              cypermetrin
                              <br />
                              deltametrin
                              <br />
                              azamethiphos
                            </SummaryListRow>
                            <SummaryListRow listKey="In-feed sea lice medicine required">Emamectin benzoate</SummaryListRow>
                          </SummaryList>
                          <Heading level="h3">Additional information</Heading>
                          <br />
                        </Column>
                      </Row>
                    </AccordionSection>
                    <AccordionSection expanded={false} sectionKey="2" heading="Current data" />
                    <AccordionSection expanded={false} sectionKey="3" heading="Modelling" />
                    <AccordionSection expanded={false} sectionKey="4" heading="Baseline Suvey" />
                  </Accordion>
                </TabPanel>
              </Tabs>
              <Paragraph>Email permitting team
                <br />
                <Link href="/mailto:permitting@sepa.co.uk">permitting@sepa.co.uk</Link>
              </Paragraph>
              <Link href="/">Marine pen farm guidance</Link>
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

/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
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

const axios = require('axios');

const PermitPage = ({ match }) => {
  const [data, setData] = useState({
    loaded: false,
    license: {},
    contacts: [],
    conditions: [],
    locations: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      const license = await axios(
        `/api/v1/licences/${match.params.licenceId}`,
      );

      const contacts = await axios(
        `/api/v1/licences/${match.params.licenceId}/contacts`,
      );

      const conditions = await axios(
        `/api/v1/licences/${match.params.licenceId}/conditions`,
      );

      const locations = await axios(
        `/api/v1/licences/${match.params.licenceId}/locations`,
      );

      const responseData = {
        loaded: true,
        license: license.data,
        contacts: contacts.data.contacts,
        conditions: conditions.data.conditions,
        locations: locations.data.locations,
        water_body_name: 'TBD',
      };

      setData(responseData);
    };
    fetchData();
  }, [match]);

  return (
    <>
      <Header isNotification={false} userName="Rory McCulloch" />
      <Container>
        <PhaseBanner />
        <Main>
          <Row>
            <Column columnWidth="full">
              <Heading caption={data.water_body_name || 'Loch Mhòrair'} level="h1">
                {data.license.site_name || 'Loch Mhòrair Salmon Farm'}
                <Reference>{data.license.site_name || 'CAR/L/4336581'}</Reference>
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
                            <SummaryListRow listKey="Site name">{}</SummaryListRow>
                            <SummaryListRow listKey="Water body name">{}</SummaryListRow>
                            <SummaryListRow listKey="Number of pens">10</SummaryListRow>
                          </SummaryList>
                          <Heading level="h3">Fish details</Heading>
                          <SummaryList>
                            <SummaryListRow listKey="Species of fish to be farmed">{}</SummaryListRow>
                            <SummaryListRow listKey="Maximum weight of fish (tonnes)">{}</SummaryListRow>
                            <SummaryListRow listKey="Maximum feeding rate (kf/t/d)">{}</SummaryListRow>
                          </SummaryList>
                          <Heading level="h3">Medicine details</Heading>
                          <SummaryList>
                            <SummaryListRow listKey="Bath sea lice medicines required">{}</SummaryListRow>
                            <SummaryListRow listKey="In-feed sea lice medicine required">{}</SummaryListRow>
                            <SummaryListRow listKey="Additional information">&nbsp;</SummaryListRow>
                          </SummaryList>
                        </Column>
                        <Column columnWidth="one-third">
                          <Link href="/">Marine pen farm guidance</Link>
                        </Column>
                      </Row>
                    </AccordionSection>
                    <AccordionSection expanded={false} sectionKey="2" heading="Current data" />
                    <AccordionSection expanded={false} sectionKey="3" heading="Modelling" />
                    <AccordionSection expanded={false} sectionKey="4" heading="Baseline Suvey" />
                  </Accordion>
                </TabPanel>
              </Tabs>
              <Paragraph>Email permitting team</Paragraph>
              <Paragraph><Link href="/mailto:permitting@sepa.co.uk">permitting@sepa.co.uk</Link></Paragraph>
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

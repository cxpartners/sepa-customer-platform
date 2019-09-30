/* eslint-disable react/no-array-index-key */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
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
import Spinner from '../components/Spinner/component';
import BackLink from '../components/BackLink/component';
import Guidance from '../components/Guidance/component';

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
        water_body_name: 'Loch Mhòrair',
      };

      setData(responseData);
    };
    fetchData();
  }, [match]);

  const contacts = [];

  return (
    <>
      <Header isNotification={false} userName="Rory McCulloch" />
      <Container>
        <PhaseBanner />
        <BackLink href="/permits" />
        <Main>
          <Row>
            <Column columnWidth="full">
              {!data.license.licence_number && !data.loaded ? (
                <Heading>
                  <Spinner />
                </Heading>
              ) : (!data.license.licence_number && data.loaded) ? (
                <Paragraph>License not found</Paragraph>
              ) : (
                <>
                  <Heading caption={data.water_body_name || 'Loch Mhòrair'} level="h1">
                    {data.license.site_name || 'Loch Mhòrair Salmon Farm'}
                    <Reference>{data.license.licence_number || 'CAR/L/4336581'}</Reference>
                  </Heading>
                </>
              )}
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
                            <>
                              { data.contacts
                                .filter((contact) => contact.contact_type === 'Responsible Person' && contact.contact_name)
                                .slice(0)
                                .map((contact) => {
                                  if (contacts.filter((e) => e.contact_name === contact.contact_name).length !== 0) return;
                                  contacts.push(contact);
                                  // eslint-disable-next-line consistent-return
                                  return (
                                    <SummaryList>
                                      <SummaryListRow listKey="Name">{contact.contact_name}</SummaryListRow>
                                      <SummaryListRow listKey="Email">{contact.contact_name && `${contact.contact_name.replace(' ', '.').toLowerCase()}@salmonandsalmon.com`}</SummaryListRow>
                                      <SummaryListRow listKey="Phone number">07824325572</SummaryListRow>
                                    </SummaryList>
                                  );
                                })}
                            </>
                            {!data.license.licence_number && !data.loaded ? (
                              <Paragraph>
                                <Spinner />
                              </Paragraph>
                            ) : (
                              <Paragraph>{`Total number of 'responsible person' contacts for this licence ${contacts.length}`}</Paragraph>
                            )}
                          </SummaryList>
                          <Heading level="h3">Marine pen fish farm details</Heading>
                          {!data.license.licence_number && !data.loaded ? (
                            <SummaryList>
                              <Spinner />
                            </SummaryList>
                          ) : (
                            <SummaryList>
                              <SummaryListRow listKey="Site name">{data.license.site_name}</SummaryListRow>
                              <SummaryListRow listKey="Water body name">Loch Mhòrair</SummaryListRow>
                              <SummaryListRow listKey="Number of pens">{ data.locations.filter((location) => location.activity_actual === 'Fish Farm Marine Cage').length }</SummaryListRow>
                              { data.locations
                                .filter((location) => location.activity_actual === 'Fish Farm Marine Cage')
                                .sort((a, b) => a.location_number < b.location_number ? -1 : 1)
                                .map((location, key) => (<SummaryListRow key={`location-${key}`} listKey={`Pen ${key + 1}`}>X {location.easting} (Eastings), Y {location.northing} (Northing)</SummaryListRow>))}
                            </SummaryList>
                          )}
                          <Heading level="h3">Fish details</Heading>
                          {!data.license.licence_number && !data.loaded ? (
                            <SummaryList>
                              <Spinner />
                            </SummaryList>
                          ) : (
                            <SummaryList>
                              <SummaryListRow listKey="Species of fish to be farmed">Salmon</SummaryListRow>
                              { data.conditions
                                .filter((condition) => condition.measurement === 'Tonnes')
                                .map((condition, key) => (
                                  <SummaryListRow key={`condition-${key}`} listKey={`${condition.condition} (${condition.measurement.toLowerCase()}/${condition.frequency.toLowerCase()})`}>{condition.value}</SummaryListRow>))}
                              <SummaryListRow listKey="Maximum feeding rate (kf/t/d)">{}</SummaryListRow>
                            </SummaryList>
                          )}
                          <Heading level="h3">Medicine details</Heading>
                          {!data.license.licence_number && !data.loaded ? (
                            <SummaryList>
                              <Spinner />
                            </SummaryList>
                          ) : (
                            <SummaryList>
                              { data.conditions
                                .filter((condition) => condition.measurement === 'YesNo')
                                .map((condition, key) => (
                                  <SummaryListRow key={`condition-${key}`} listKey={condition.condition}>{condition.value === 'Y' ? 'Yes' : 'No'}</SummaryListRow>
                                ))}
                              <SummaryListRow listKey="Additional information">&nbsp;</SummaryListRow>
                            </SummaryList>
                          )}
                        </Column>
                        <Column columnWidth="one-third">
                          <Guidance>
                            <Link href="/">Marine pen farm guidance</Link>
                          </Guidance>
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

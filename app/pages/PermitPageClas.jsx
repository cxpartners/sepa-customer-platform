/* eslint-disable react/no-array-index-key */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
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
import Spinner from '../components/Spinner/component';
import BackLink from '../components/BackLink/component';
import Guidance from '../components/Guidance/component';
import {
  PERMIT_FETCH_DATA,
  PERMIT_FETCH_REQUESTING,
  PERMIT_FETCH_FAILED,
  PERMIT_FETCH_SUCCESS,
} from '../reducers';

const PermitPage = ({ match: { params: { licenceId } } }) => {
  const dispatch = useDispatch();
  const permit = useSelector((state) => state.permit);
  const fetchPermitsData = useCallback(async () => {
    try {
      dispatch({
        type: PERMIT_FETCH_DATA,
        readyStatus: PERMIT_FETCH_REQUESTING,
        license: {},
        contacts: [],
        conditions: [],
        locations: [],
      });

      const licenceRequest = await axios(
        `https://online.sepa.org.uk/apex/sepaapps/AQPilot/licences/${licenceId}`,
      );

      if (!licenceRequest.data.items || !licenceRequest.data.items.length) {
        dispatch({
          type: PERMIT_FETCH_DATA,
          readyStatus: PERMIT_FETCH_FAILED,
          license: {},
          contacts: [],
          conditions: [],
          locations: [],
        });
        return;
      }

      const contactsRequest = await axios(
        `https://online.sepa.org.uk/apex/sepaapps/AQPilot/contacts/${licenceId}`,
      );

      const locationsRequest = await axios(
        `https://online.sepa.org.uk/apex/sepaapps/AQPilot/licensed-locations/${licenceId}`,
      );

      const conditionsRequest = await axios(
        `https://online.sepa.org.uk/apex/sepaapps/AQPilot/licensed-conditions/${licenceId}`,
      );

      dispatch({
        type: PERMIT_FETCH_DATA,
        readyStatus: PERMIT_FETCH_SUCCESS,
        license: licenceRequest.data.items && licenceRequest.data.items.length ? licenceRequest.data.items[0] : {},
        contacts: contactsRequest.data.items && contactsRequest.data.items.length ? contactsRequest.data.items : [],
        conditions: conditionsRequest.data.items && conditionsRequest.data.items.length ? conditionsRequest.data.items : [],
        locations: locationsRequest.data.items && locationsRequest.data.items.length ? locationsRequest.data.items : [],
      });
    } catch (error) {
      dispatch({
        type: PERMIT_FETCH_DATA,
        readyStatus: PERMIT_FETCH_FAILED,
        license: {},
        contacts: [],
        conditions: [],
        locations: [],
      });
    }
  }, [dispatch, licenceId]);

  useEffect(() => {
    fetchPermitsData();
  }, [fetchPermitsData]);

  const contacts = [];
  return (
    <>
      <Header isNotification={false} userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <BackLink href="../permits" />
        <Main>
          {permit.readyStatus === PERMIT_FETCH_FAILED ? (
            <>
              <Row>
                <Column columnWidth="full">
                  <Paragraph>Unable to load permit</Paragraph>
                </Column>
              </Row>
            </>
          ) : (
            <>
              <Row>
                <Column columnWidth="full">
                  {permit.readyStatus !== PERMIT_FETCH_SUCCESS ? (
                    <Heading>
                      <Spinner />
                    </Heading>
                  ) : (
                    <>
                      <Heading caption={permit.water_body_name || 'Loch Mhòrair'} level="h1">
                        {permit.license.site_name || 'Loch Mhòrair Salmon Farm'}
                        <Reference>{permit.license.licence_number || 'CAR/L/4336581'}</Reference>
                      </Heading>
                    </>
                  )}
                  <Button href="permitss-time-passes">Add permits variation</Button>
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
                      <Tab href="permits" title="permits" />
                      <Tab href="monitoring" title="Monitoring" />
                    </TabList>
                    <TabPanel id="overview" title="">
                      <Accordion>
                        <AccordionSection expanded locked={false} sectionKey="1" heading="Pre-application details" aria-expanded="true">
                          <Row>
                            <Column columnWidth="two-thirds">
                              <Heading level="h3">Contact details</Heading>
                              <SummaryList>
                                <>
                                  { permit.contacts
                                    .filter((contact) => contact.contact_type === 'Responsible Person' && contact.contact_name)
                                    .slice(0)
                                    .map((contact) => {
                                      if (contacts.filter((e) => e.contact_name === contact.contact_name).length !== 0) return;
                                      contacts.push(contact);
                                      // eslint-disable-next-line consistent-return
                                      return (
                                        <SummaryList>
                                          <SummaryListRow listKey="Name">{contact.contact_name}</SummaryListRow>
                                        </SummaryList>
                                      );
                                    })}
                                </>
                                {permit.readyStatus !== PERMIT_FETCH_SUCCESS ? (
                                  <Paragraph>
                                    <Spinner />
                                  </Paragraph>
                                ) : (
                                  <Paragraph>{`Total number of 'responsible person' contacts for this licence ${contacts.length}`}</Paragraph>
                                )}
                              </SummaryList>
                              <Heading level="h3">Marine pen fish farm details</Heading>
                              {permit.readyStatus !== PERMIT_FETCH_SUCCESS ? (
                                <SummaryList>
                                  <Spinner />
                                </SummaryList>
                              ) : (
                                <SummaryList>
                                  <SummaryListRow listKey="Site name">{permit.license.site_name}</SummaryListRow>
                                  <SummaryListRow listKey="Number of pens">{ permit.locations.filter((location) => location.activity_actual === 'Fish Farm Marine Cage').length }</SummaryListRow>
                                  { permit.locations
                                    .sort((a, b) => a.location_number < b.location_number ? -1 : 1)
                                    .map((location, key) => (
                                      <SummaryListRow key={`location-${key}`} listKey={`Location ${key + 1} (type: ${location.location_type})`}>X {location.easting} (Eastings), Y {location.northing} (Northing)</SummaryListRow>
                                    ))}
                                </SummaryList>
                              )}
                              <Heading level="h3">Fish details</Heading>
                              {permit.readyStatus !== PERMIT_FETCH_SUCCESS ? (
                                <SummaryList>
                                  <Spinner />
                                </SummaryList>
                              ) : (
                                <SummaryList>
                                  <SummaryListRow listKey="Species of fish to be farmed">Salmon</SummaryListRow>
                                  { permit.conditions
                                    .filter((condition) => condition.measurement === 'Tonnes')
                                    .map((condition, key) => (
                                      <SummaryListRow key={`condition-${key}`} listKey={`${condition.condition} (${condition.measurement.toLowerCase()}/${condition.frequency.toLowerCase()})`}>{condition.value}</SummaryListRow>))}
                                  <SummaryListRow listKey="Maximum feeding rate (kf/t/d)">{}</SummaryListRow>
                                </SummaryList>
                              )}
                              <Heading level="h3">Medicine details</Heading>
                              {permit.readyStatus !== PERMIT_FETCH_SUCCESS ? (
                                <SummaryList>
                                  <Spinner />
                                </SummaryList>
                              ) : (
                                <SummaryList>
                                  { permit.conditions
                                    .filter((condition) => condition.measurement === 'YesNo')
                                    .map((condition, key) => (
                                      <SummaryListRow key={`condition-${key}`} listKey={condition.condition}>{condition.value === 'Y' ? 'Yes' : 'No'}</SummaryListRow>
                                    ))}
                                </SummaryList>
                              )}
                              <Heading level="h3">Additional information</Heading>
                              <br />
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
            </>
          )}
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

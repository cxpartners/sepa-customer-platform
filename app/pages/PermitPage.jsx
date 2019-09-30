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
      };

      setData(responseData);
    };
    fetchData();
  }, [match]);

  /* eslint-disable */
  return (
    <>
      <Header isNotification={false} userName="" />
      <Container>
        <PhaseBanner />
        <Main>
          <Row>
            <Column columnWidth="full">
              {!data.license.licence_number && !data.loaded ? (
                <Paragraph>Loading</Paragraph>
              ) : (!data.license.licence_number && data.loaded) ? (
                <Paragraph>License not found</Paragraph>
              ) : (
                <>
                  <Heading level="h1">{data.license.site_name}</Heading>
                  <Heading level="h2">{data.license.licence_number}</Heading>
                  <>
                  { data.contacts
                    .filter(contact => contact.contact_type === 'Responsible Person')
                    .slice(0)
                    .map(contact => (
                      <SummaryList>
                        <SummaryListRow listKey="Name">{contact.contact_name}</SummaryListRow>
                        <SummaryListRow listKey="Email">[TBD]</SummaryListRow>
                        <SummaryListRow listKey="Phone number">[TBD]</SummaryListRow>
                      </SummaryList>
                    ))}
                  </>
                  <Paragraph>Total number of 'responsible person' contacts for this licence {data.contacts.filter(contact => contact.contact_type === 'Responsible Person').length}</Paragraph>
                  <Heading level="h2">Marine pen fish farm details</Heading>
                  <SummaryList>
                    <SummaryListRow listKey="Site name">{data.license.site_name}</SummaryListRow>
                    <SummaryListRow listKey="Water body name">TBD</SummaryListRow>
                    <SummaryListRow listKey="Number of pens">{ data.locations.length }</SummaryListRow>
                    { data.locations
                      .sort((a, b) => a.location_number < b.location_number ? -1 : 1)
                      .map((location, key) => (
                        <SummaryListRow key={`location-${key}`}  listKey={`Location ${key+1} (type: ${location.location_type})`}>X {location.easting} (Eastings), Y {location.northing} (Northing)</SummaryListRow>
                      )
                    )}
                  </SummaryList>
                  <Heading level="h2">Fish details</Heading>
                  <Paragraph>[TBD] - discuss how/where this kind of info is stored in CLAS.</Paragraph>
                  <Heading level="h2">Medicine details</Heading>
                  <Paragraph>[TBD] - discuss how/where this kind of info is stored in CLAS.</Paragraph>
                  <Heading level="h2">Conditions</Heading>
                  <SummaryList>
                    { data.conditions
                      .map((condition, key) => (
                        <SummaryListRow key={`condition-${key}`} listKey={condition.condition}>Measurement: {condition.measurement}, Frequency: {condition.frequency}</SummaryListRow>
                      )
                    )}
                  </SummaryList>
                </>
              )}
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};
/* eslint-enable */

export default PermitPage;

PermitPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      licenceId: PropTypes.string,
    }),
  }).isRequired,
};

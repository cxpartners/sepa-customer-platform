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
import Spinner from '../components/Spinner/component';

const axios = require('axios');

const LicencesItemPage = ({ match }) => {
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
console.log(responseData);
      setData(responseData);
    };
    fetchData();
  }, [match]);

  const contacts = [];
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
                <Spinner />
              ) : (!data.license.licence_number && data.loaded) ? (
                <Paragraph>License not found</Paragraph>
              ) : (
                <>
                  <Heading level="h1">{data.license.site_name}</Heading>
                  <Heading level="h2">{data.license.licence_number}</Heading>
                  <>
                    { data.contacts
                      .filter(contact => contact.contact_type === 'Responsible Person' && contact.contact_name)
                      .slice(0)
                      .map(contact => {
                        if (contacts.filter(e => e.contact_name === contact.contact_name).length !== 0) return;
                        contacts.push(contact);
                        return (
                          <SummaryList>
                            <SummaryListRow listKey="Name">{contact.contact_name}</SummaryListRow>
                            <SummaryListRow listKey="Email">{contact.contact_name && `${contact.contact_name.replace(' ', '.').toLowerCase()}@salmonandsalmon.com`}</SummaryListRow>
                            <SummaryListRow listKey="Phone number">07824325572</SummaryListRow>
                          </SummaryList>
                        )})
                    }
                  </>
                  <Paragraph>Total number of 'responsible person' contacts for this licence {contacts.length}</Paragraph>
                  <Heading level="h2">Marine pen fish farm details</Heading>
                  <SummaryList>
                    <SummaryListRow listKey="Site name">{data.license.site_name}</SummaryListRow>
                    <SummaryListRow listKey="Water body name">Loch Mhòrair</SummaryListRow>
                    <SummaryListRow listKey="Number of pens">{ data.locations.filter(location => location.activity_actual === 'Fish Farm Marine Cage').length }</SummaryListRow>
                    { data.locations
                      .filter(location => location.activity_actual === 'Fish Farm Marine Cage')
                      .sort((a, b) => a.location_number < b.location_number ? -1 : 1)
                      .map((location, key) => (
                          <SummaryListRow key={`location-${key}`}  listKey={`Pen ${key+1}`}>X {location.easting} (Eastings), Y {location.northing} (Northing)</SummaryListRow>
                        )
                      )}
                  </SummaryList>
                  <Heading level="h2">Fish details</Heading>
                  <SummaryList>
                    <SummaryListRow listKey='Species of fish to be farmed'>Salmon</SummaryListRow>
                    { data.conditions
                      .filter(condition => condition.measurement === 'Tonnes')
                      .map((condition, key) => (
                          <SummaryListRow key={`condition-${key}`} listKey={`${condition.condition} (${condition.measurement.toLowerCase()}/${condition.frequency.toLowerCase()})`}>{condition.value}</SummaryListRow>
                        )
                      )}
                  </SummaryList>
                  <Heading level="h2">Medicine details</Heading>
                  <SummaryList>
                    { data.conditions
                      .filter(condition => condition.measurement === 'YesNo')
                      .map((condition, key) => (
                          <SummaryListRow key={`condition-${key}`} listKey={condition.condition}>{condition.value === 'Y' ? 'Yes' : 'No'}</SummaryListRow>
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

export default LicencesItemPage;

LicencesItemPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      licenceId: PropTypes.string,
    }),
  }).isRequired,
};

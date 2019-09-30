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
            <Column columnWidth="one-third">
            </Column>
          </Row>
          <Row>
            <Column columnWidth="full">
              <SummaryList>
                <SummaryListRow listKey="Name">flksdjflds</SummaryListRow>
                <SummaryListRow listKey="Email">[TBD]</SummaryListRow>
                <SummaryListRow listKey="Phone number">[TBD]</SummaryListRow>
              </SummaryList>
              <Paragraph>Total number of responsible person contacts for this licence</Paragraph>
              <Heading level="h2">Marine pen fish farm details</Heading>
              <SummaryList>
                <SummaryListRow listKey="Site name">flasdjflkjd</SummaryListRow>
                <SummaryListRow listKey="Water body name">TBD</SummaryListRow>
              </SummaryList>
              <Heading level="h2">Fish details</Heading>
              <Paragraph>[TBD] - discuss how/where this kind of info is stored in CLAS.</Paragraph>
              <Heading level="h2">Medicine details</Heading>
              <Paragraph>[TBD] - discuss how/where this kind of info is stored in CLAS.</Paragraph>
              <Heading level="h2">Conditions</Heading>
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

/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Footer from '../components/Footer/component';
import BackLink from '../components/BackLink/component';
import SummaryList from '../components/SummaryList/component';
import SummaryListRow from '../components/SummaryListRow/component';
import Link from '../components/Link/component';
import Paragraph from '../components/Paragraph/component';
import Button from '../components/Button/component';
import Reference from '../components/Reference/component';

const PreAppFormCheck = () => {
  const contactDetailsValue = useSelector((state) => state.contactDetailsValue);
  const siteNameValue = useSelector((state) => state.siteNameValue);
  const waterBodyNameValue = useSelector((state) => state.waterBobyNameValue);
  const fishValue = useSelector((state) => state.fishValue);
  const weightValue = useSelector((state) => state.weightValue);
  const feedingRateValue = useSelector((state) => state.feedingRateValue);
  const locationArray = useSelector((state) => state.locationArray);

  return (
    <>
      <Header isNotification userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <BackLink href="/pre-app-form-additional" />
        <Main>
          <Row>
            <Column columnWidth="full">
              <Heading level="h1">Check your answers <Reference>CAR/L/4336581</Reference></Heading>
            </Column>
          </Row>
          <Row>
            <Column columnWidth="two-thirds">
              <Heading level="h2">Pre-application details</Heading>
              <Heading level="h3">Company Secretary contact</Heading>
              <SummaryList>
                <SummaryListRow key="1" listKey="Name">Company Secretary</SummaryListRow>
                <SummaryListRow key="2" listKey="Email">company.secretary@salmonandsalmon.com</SummaryListRow>
                <SummaryListRow key="3" listKey="Phone number">07824 325 572</SummaryListRow>
              </SummaryList>
              <Heading level="h3">Application contact</Heading>
              <SummaryList>
                <SummaryListRow key="1" addLinks listKey="Name">{contactDetailsValue}</SummaryListRow>
                <SummaryListRow key="2" addLinks listKey="Email">{`${contactDetailsValue.replace(' ', '.').toLowerCase()}@salmonandsalmon.com`}</SummaryListRow>
                <SummaryListRow key="3" addLinks listKey="Phone number">07824 327 552</SummaryListRow>
              </SummaryList>
              <Heading level="h3">Marine pen fish farm details</Heading>
              <SummaryList>
                <SummaryListRow key="-2" addLinks listKey="Site name">{siteNameValue}</SummaryListRow>
                <SummaryListRow key="-1" addLinks listKey="Water body name">{waterBodyNameValue}</SummaryListRow>
                <SummaryListRow key="0" addLinks listKey="Number of pens">11</SummaryListRow>
                {
                locationArray
                  .map((location) => (
                    <SummaryListRow key={location.pen} listKey={`Pen ${location.pen}`}>{`X ${location.easting} (Eastings), Y ${location.northing} (Northings)`}</SummaryListRow>
                  ))
                }
              </SummaryList>
              <Heading level="h3">Fish details</Heading>
              <SummaryList>
                <SummaryListRow key="1" addLinks listKey="Species of fish to be farmed">{fishValue}</SummaryListRow>
                <SummaryListRow key="2" addLinks listKey="Maximum weight of fish (tonnes)">{weightValue}</SummaryListRow>
                <SummaryListRow key="3" addLinks listKey="Maximum feeding rate (kf/t/d)">{feedingRateValue}</SummaryListRow>
              </SummaryList>
              <Heading level="h3">Medicine details</Heading>
              <SummaryList>
                <SummaryListRow key="1" addLinks listKey="Bath sea lice medicines required">
                  Cypermetrin
                  <br />
                  Deltametrin
                  <br />
                  Azamethiphos
                </SummaryListRow>
                <SummaryListRow key="2" addLinks listKey="In-feed sea lice medicine required">Emamectin benzoate</SummaryListRow>
              </SummaryList>
              <Heading level="h3">Additional information <Link href="/" modifier="govuk-right govuk-body">Change</Link></Heading>
              <br />
              <Heading level="h3">Pre-application form payment</Heading>
              <Paragraph>It will cost £3,500 to submit a pre-application, which you will have to pay for on the next page.</Paragraph>
              <Button href="/pre-app-form-enter-card-details">Go to payment page</Button>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default PreAppFormCheck;

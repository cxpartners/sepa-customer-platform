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

const PreAppFormCheck = () => {
  const contactDetailsValue = useSelector((state) => state.contactDetailsValue);
  const siteNameValue = useSelector((state) => state.siteNameValue);
  const waterBobyNameValue = useSelector((state) => state.waterBobyNameValue);
  const eastingValue = useSelector((state) => state.eastingValue);
  const northingValue = useSelector((state) => state.northingValue);
  const fishValue = useSelector((state) => state.fishValue);
  const weightValue = useSelector((state) => state.weightValue);
  const feedingRateValue = useSelector((state) => state.feedingRateValue);

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
      <Header isNotification userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <BackLink href="/pre-app-form-additional" />
        <Main>
          <Row>
            <Column columnWidth="two-thirds">
              <Heading level="h1">Check your answers</Heading>
              <Heading level="h2">Pre-application details</Heading>
              <Heading level="h3">Company Secretary contact</Heading>
              <SummaryList>
                <SummaryListRow listKey="Name">Company Secretary</SummaryListRow>
                <SummaryListRow listKey="Email">company.secretary@salmonandsalmon.com</SummaryListRow>
                <SummaryListRow listKey="Phone number">07824 325 572</SummaryListRow>
              </SummaryList>
              <Heading level="h3">Application contact</Heading>
              <SummaryList>
                <SummaryListRow addLinks listKey="Name">{contactDetailsValue}</SummaryListRow>
                <SummaryListRow addLinks listKey="Email">{`${contactDetailsValue.replace(' ', '.').toLowerCase()}@salmonandsalmon.com`}</SummaryListRow>
                <SummaryListRow addLinks listKey="Phone number">07824 327 552</SummaryListRow>
              </SummaryList>
              <Heading level="h3">Marine pen fish farm details</Heading>
              <SummaryList>
                <SummaryListRow addLinks listKey="Site name">{siteNameValue}</SummaryListRow>
                <SummaryListRow addLinks listKey="Water body name">{waterBobyNameValue}</SummaryListRow>
                <SummaryListRow addLinks listKey="Number of pens">11</SummaryListRow>
                {locationArray
                  .map((location) => (
                    <SummaryListRow listKey={`Pen ${location.pen}`}>{`X ${location.easting} (Eastings), Y ${location.northing} (Northing)`}</SummaryListRow>
                  ))}
                <SummaryListRow listKey="Pen 11">{`X ${eastingValue} (Eastings), Y ${northingValue} (Northing)`}</SummaryListRow>
              </SummaryList>
              <Heading level="h3">Fish details</Heading>
              <SummaryList>
                <SummaryListRow addLinks listKey="Species of fish to be farmed">{fishValue}</SummaryListRow>
                <SummaryListRow addLinks listKey="Maximum weight of fish (tonnes)">{weightValue}</SummaryListRow>
                <SummaryListRow addLinks listKey="Maximum feeding rate (kf/t/d)">{feedingRateValue}</SummaryListRow>
              </SummaryList>
              <Heading level="h3">Medicine details</Heading>
              <SummaryList>
                <SummaryListRow addLinks listKey="Bath sea lice medicines required">
                  Cypermetrin
                  <br />
                  Deltametrin
                  <br />
                  Azamethiphos
                </SummaryListRow>
                <SummaryListRow addLinks listKey="In-feed sea lice medicine required">Emamectin benzoate</SummaryListRow>
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

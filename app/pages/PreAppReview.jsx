/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import Textarea from '../components/Textarea/component';
import Accordion from '../components/Accordion/component';
import AccordionSection from '../components/AccordionSection/component';
import RadioGroup from '../components/RadioGroup/component';
import Radio from '../components/Radio/component';
import ActionBox from '../components/ActionBox/component';
import FieldSet from '../components/FieldSet/component';
import { UPDATE_REVIEW_RADIO, TOGGLE_PRE_APP_REVIEW_SCROLL } from '../reducers';
import ScrollTo from '../components/ScrollTo/component';
import Toggle from '../components/Toggle/component';

const PermitPage = () => {
  const showPreAppReviewScroll = useSelector((state) => state.showPreAppReviewScroll);
  const radioReviewValue = useSelector((state) => state.radioReviewValue);
  const eastingValue = useSelector((state) => state.eastingValue);
  const northingValue = useSelector((state) => state.northingValue);
  const dispatch = useDispatch();

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
      <Header isNotification={false} userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
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
                          <Heading level="h3">Company Secretary contact</Heading>
                          <SummaryList>
                            <SummaryListRow listKey="Name">Company Secretary</SummaryListRow>
                            <SummaryListRow listKey="Email">company.secretary@salmonandsalmon.com</SummaryListRow>
                            <SummaryListRow listKey="Phone number">07824 325 572</SummaryListRow>
                          </SummaryList>
                          <Heading level="h3">Application contact</Heading>
                          <SummaryList>
                            <SummaryListRow listKey="Name">Oliver Allen</SummaryListRow>
                            <SummaryListRow listKey="Email">o.allen@salmonandsalmon.com</SummaryListRow>
                            <SummaryListRow listKey="Phone number">07824 327 552</SummaryListRow>
                          </SummaryList>
                          <Heading level="h3">Marine pen fish farm details</Heading>
                          <SummaryList>
                            <SummaryListRow listKey="Site name">Loch Mhòrair Salmon Farm</SummaryListRow>
                            <SummaryListRow listKey="Water body name">Loch Mhòrair</SummaryListRow>
                            <SummaryListRow listKey="Number of pens">11</SummaryListRow>
                            {locationArray
                              .map((location) => (
                                <SummaryListRow listKey={`Pen ${location.pen}`}>{`X ${location.easting} (Eastings), Y ${location.northing} (Northings)`}</SummaryListRow>
                              ))}
                            {
                              eastingValue && northingValue
                                ? (
                                  <SummaryListRow listKey="Pen 11">{`X ${eastingValue} (Eastings), Y ${northingValue} (Northing)`}</SummaryListRow>
                                ) : ''
                            }
                          </SummaryList>
                          <Heading level="h3">Fish details</Heading>
                          <SummaryList>
                            <SummaryListRow listKey="Species of fish to be farmed">Salmon</SummaryListRow>
                            <SummaryListRow listKey="Maximum weight of fish (tonnes)">186,786</SummaryListRow>
                            <SummaryListRow listKey="Maximum feeding rate (kf/t/d)">7</SummaryListRow>
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
                            <SummaryListRow listKey="In-feed sea lice medicine required">Emamectin benzoate</SummaryListRow>
                          </SummaryList>
                          <Heading level="h3">Additional information</Heading>
                          <br />
                          {
                            showPreAppReviewScroll
                              ? <ScrollTo /> : ''
                          }
                          <ActionBox>
                            <Heading level="h3">Complete your pre-application review</Heading>
                            <FieldSet legend="Does the pre-application meet the requirements to move to the next stage?" inBox error={false} errorMessage="">
                              <RadioGroup inline>
                                <Radio value="Yes" checked={radioReviewValue === 'Yes'} onChange={(e) => dispatch({ type: UPDATE_REVIEW_RADIO, payload: e.target.value })} />
                                <Radio value="No" checked={radioReviewValue === 'No'} onChange={(e) => dispatch({ type: UPDATE_REVIEW_RADIO, payload: e.target.value })} />
                              </RadioGroup>
                              <br />
                            </FieldSet>
                            {
                              radioReviewValue === 'Yes'
                                ? (
                                  <>
                                    <Button href="/receives-pre-app-review-email">Complete pre-application review</Button>
                                    <Paragraph>By completing this review, the pre-application will be sent to modelling.</Paragraph>
                                  </>
                                ) : (
                                  <>
                                    {
                                      radioReviewValue === 'No'
                                        ? (
                                          <>
                                            <Textarea label="Please provide the applicant with feedback and request further information if needed." />
                                            <Button href="/receives-pre-app-review-email">Send feedback</Button>
                                          </>
                                        ) : ''
                                    }
                                  </>
                                )
                            }
                          </ActionBox>
                          <ActionBox locked>
                            <Heading level="h3">Initial screening report</Heading>
                          </ActionBox>
                        </Column>
                        <Column>
                          <Heading level="h3">Workflow tasks:</Heading>
                          <Toggle modifier="govuk-right govuk-clear-margin" href="/" className="" onClick={(e) => { e.preventDefault(); dispatch({ type: TOGGLE_PRE_APP_REVIEW_SCROLL }); }}>Complete pre-application review</Toggle>
                        </Column>
                      </Row>
                    </AccordionSection>
                    <AccordionSection locked expanded={false} sectionKey="2" heading="Current data" />
                    <AccordionSection locked expanded={false} sectionKey="3" heading="Modelling" />
                    <AccordionSection locked expanded={false} sectionKey="4" heading="Baseline Survey" />
                  </Accordion>
                </TabPanel>
              </Tabs>
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

/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Footer from '../components/Footer/component';
import Reference from '../components/Reference/component';
import Tabs from '../components/Tabs/component';
import TabList from '../components/TabList/component';
import Tab from '../components/Tab/component';
import TabPanel from '../components/TabPanel/component';
import Accordion from '../components/Accordion/component';
import AccordionSection from '../components/AccordionSection/component';
import SummaryList from '../components/SummaryList/component';
import SummaryListRow from '../components/SummaryListRow/component';
import ActionBoxComplete from '../components/ActionBoxComplete/component';
import Guidance from '../components/Guidance/component';
import Paragraph from '../components/Paragraph/component';
import FieldSet from '../components/FieldSet/component';
import RadioGroup from '../components/RadioGroup/component';
import Radio from '../components/Radio/component';
import Button from '../components/Button/component';
import ActionBox from '../components/ActionBox/component';
import Textarea from '../components/Textarea/component';
import FileInput from '../components/FileInput/component';
import {
  TOGGLE_ADD_FILES_ACCORDION_ONE,
  TOGGLE_ADD_FILES_ACCORDION_TWO,
  UPDATE_DATA_REVIEW_RADIO,
} from '../reducers';


const DataReviewPermitPage = () => {
  const showAddFilesAccordionOne = useSelector((state) => state.showAddFilesAccordionOne);
  const showAddFilesAccordionTwo = useSelector((state) => state.showAddFilesAccordionTwo);
  const eastingValue = useSelector((state) => state.eastingValue);
  const northingValue = useSelector((state) => state.northingValue);
  const locationArray = useSelector((state) => state.locationArray);
  const dataReviewValue = useSelector((state) => state.dataReviewValue);
  const dispatch = useDispatch();

  return (
    <>
      <Header isNotification userName="Craig Read" />
      <Container>
        <PhaseBanner />
        <Main>
          <Row>
            <Column columnWidth="full">
              <Heading caption="Loch Mhòrair" level="h1">
                Loch Mhòrair Salmon Farm
                <Reference>CAR/L/4336581</Reference>
              </Heading>
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
                    <AccordionSection expanded={showAddFilesAccordionOne} locked={false} sectionKey="1" heading="Pre-application details" aria-expanded={showAddFilesAccordionOne ? 'true' : ''} onClick={(e) => { e.preventDefault(); dispatch({ type: TOGGLE_ADD_FILES_ACCORDION_ONE }); }}>
                      <Row>
                        <Column columnWidth="two-thirds">
                          <Heading level="h3">Company Secretary contact</Heading>
                          <SummaryList>
                            <SummaryListRow key="Name" listKey="Name">Company Secretary</SummaryListRow>
                            <SummaryListRow key="Email" listKey="Email">company.secretary@salmonandsalmon.com</SummaryListRow>
                            <SummaryListRow key="Phone " listKey="Phone number">07824 325 572</SummaryListRow>
                          </SummaryList>
                          <Heading level="h3">Application contact</Heading>
                          <SummaryList>
                            <SummaryListRow key="Name" listKey="Name">Oliver Allen</SummaryListRow>
                            <SummaryListRow key="Email" listKey="Email">o.allen@salmonandsalmon.com</SummaryListRow>
                            <SummaryListRow key="Phone " listKey="Phone number">07824 327 552</SummaryListRow>
                          </SummaryList>
                          <Heading level="h3">Marine pen fish farm details</Heading>
                          <SummaryList>
                            <SummaryListRow key="Site" listKey="Site name">Loch Mhòrair Salmon Farm</SummaryListRow>
                            <SummaryListRow key="Water" listKey="Water body name">Loch Mhòrair</SummaryListRow>
                            <SummaryListRow key="Number" listKey="Number of pens">11</SummaryListRow>
                            {locationArray
                              .map((location) => (
                                <SummaryListRow key={location.pen} listKey={`Pen ${location.pen}`}>{`X ${location.easting} (Eastings), Y ${location.northing} (Northings)`}</SummaryListRow>
                              ))}
                            {
                              eastingValue && northingValue
                                ? (
                                  <SummaryListRow key="11" listKey="Pen 11">{`X ${eastingValue} (Eastings), Y ${northingValue} (Northing)`}</SummaryListRow>
                                ) : ''
                            }
                          </SummaryList>
                          <Heading level="h3">Fish details</Heading>
                          <SummaryList>
                            <SummaryListRow key="Species" listKey="Species of fish to be farmed">Salmon</SummaryListRow>
                            <SummaryListRow key="Weight" listKey="Maximum weight of fish (tonnes)">186,786</SummaryListRow>
                            <SummaryListRow key="Rate" listKey="Maximum feeding rate (kf/t/d)">7</SummaryListRow>
                          </SummaryList>
                          <Heading level="h3">Medicine details</Heading>
                          <SummaryList>
                            <SummaryListRow key="Bath" listKey="Bath sea lice medicines required">
                              Cypermetrin
                              <br />
                              Deltametrin
                              <br />
                              Azamethiphos
                            </SummaryListRow>
                            <SummaryListRow key="Sea" listKey="In-feed sea lice medicine required">Emamectin benzoate</SummaryListRow>
                          </SummaryList>
                          <Heading level="h3">Additional information</Heading>
                          <br />
                          <ActionBoxComplete>Pre-application review</ActionBoxComplete>
                          <ActionBoxComplete>Initial screening report</ActionBoxComplete>
                        </Column>
                      </Row>
                    </AccordionSection>
                    <AccordionSection locked={false} expanded={showAddFilesAccordionTwo} aria-expanded={showAddFilesAccordionTwo ? 'true' : ''} sectionKey="2" heading="Current data" onClick={(e) => { e.preventDefault(); dispatch({ type: TOGGLE_ADD_FILES_ACCORDION_TWO }); }}>
                      <Row>
                        <Column columnWidth="two-thirds">
                          <ActionBox locked={false}>
                            <Heading level="h3">Record feedback for uploaded data</Heading>
                            <FieldSet legend="Does the data upload meet the requirements to move to the next stage?" inBox error={false} errorMessage="">
                              <RadioGroup inline>
                                <Radio id="yes" name="radioReview" value="Yes" checked={dataReviewValue === 'Yes'} onChange={(e) => dispatch({ type: UPDATE_DATA_REVIEW_RADIO, payload: e.target.value })} />
                                <Radio id="no" name="radioReview" value="No" checked={dataReviewValue === 'No'} onChange={(e) => dispatch({ type: UPDATE_DATA_REVIEW_RADIO, payload: e.target.value })} />
                              </RadioGroup>
                              <br />
                            </FieldSet>
                            {
                              dataReviewValue === 'Yes'
                                ? (
                                  <>
                                    <Button href="/application-status-notification">Mark as fit for purpose</Button>
                                    <Paragraph>By marking the data uploaded as ‘fit for purpose’ a notification will be sent to the permitting officer and the applicant.</Paragraph>
                                  </>
                                ) : (
                                  <>
                                    {
                                      dataReviewValue === 'No'
                                        ? (
                                          <>
                                            <Textarea label="Please provide the applicant with feedback and request further information if needed." />
                                            <FileInput />
                                            <Button href="/application-status-notification">Send feedback</Button>
                                          </>
                                        ) : ''
                                    }
                                  </>
                                )
                            }
                          </ActionBox>
                        </Column>
                      </Row>
                    </AccordionSection>
                    <AccordionSection locked expanded={false} sectionKey="3" heading="Modelling" />
                    <AccordionSection locked expanded={false} sectionKey="4" heading="Baseline Survey" />
                  </Accordion>
                </TabPanel>
              </Tabs>
              <Guidance />
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default DataReviewPermitPage;

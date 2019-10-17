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
import PermitSmallList from '../components/PermitSmallList/component';
import PermitSmallListRow from '../components/PermitSmallListRow/component';
import SummaryList from '../components/SummaryList/component';
import SummaryListRow from '../components/SummaryListRow/component';
import Reference from '../components/Reference/component';
import Tabs from '../components/Tabs/component';
import TabList from '../components/TabList/component';
import Tab from '../components/Tab/component';
import TabPanel from '../components/TabPanel/component';
import Accordion from '../components/Accordion/component';
import AccordionSection from '../components/AccordionSection/component';
import ActionBoxComplete from '../components/ActionBoxComplete/component';
import ActionBoxFitForPurpose from '../components/ActionBoxFitForPurpose/component';
import Guidance from '../components/Guidance/component';
import {
  TOGGLE_ADD_FILES_ACCORDION_ONE,
  TOGGLE_ADD_FILES_ACCORDION_TWO,
  TOGGLE_ADD_FILES_ACCORDION_THREE,
} from '../reducers';


const ApplicantReviewedDataPermitPage = () => {
  const showAddFilesAccordionOne = useSelector((state) => state.showAddFilesAccordionOne);
  const showAddFilesAccordionTwo = useSelector((state) => state.showAddFilesAccordionTwo);
  const showAddFilesAccordionThree = useSelector((state) => state.showAddFilesAccordionThree);
  const eastingValue = useSelector((state) => state.eastingValue);
  const northingValue = useSelector((state) => state.northingValue);
  const locationArray = useSelector((state) => state.locationArray);
  const dispatch = useDispatch();

  return (
    <>
      <Header isNotification userName="Oliver Allen" />
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
                        <Column columnWidth="full">
                          <Heading level="h3">90 day data</Heading>
                          <PermitSmallList>
                            <PermitSmallListRow key="1" fileName="CurrentMeterData_siteName_Bottom2019.xlsx" href="/applicant-reviewed-data-permit-page" uploadDate="08/10/2019" date="Download" />
                            <PermitSmallListRow key="2" fileName="CurrentMeterData_siteName_Top2019.xlsx" href="/" uploadDate="08/10/2019" date="Download" />
                            <PermitSmallListRow key="3" fileName="CurrentMeterData_siteName_Surface2019.xlsx" href="/" uploadDate="08/10/2019" date="Download" />
                            <PermitSmallListRow key="4" fileName="CurrentMeterData_siteName_DepthSound2019.xlsx" href="/" uploadDate="08/10/2019" date="Download" />
                            <PermitSmallListRow key="5" fileName="CurrentMeterData_siteName_Modelling2019.xlsx" href="/" uploadDate="08/10/2019" date="Download" />
                          </PermitSmallList>
                        </Column>
                        <Column columnWidth="two-thirds">
                          <ActionBoxFitForPurpose>Current data status</ActionBoxFitForPurpose>
                        </Column>
                      </Row>
                    </AccordionSection>
                    <AccordionSection expanded={false} sectionKey="3" heading="Modelling" aria-expanded={showAddFilesAccordionThree ? 'true' : ''} onClick={(e) => { e.preventDefault(); dispatch({ type: TOGGLE_ADD_FILES_ACCORDION_THREE }); }}>
                      <Heading level="h3">Additional information</Heading>
                    </AccordionSection>
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

export default ApplicantReviewedDataPermitPage;

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
import BackLink from '../components/BackLink/component';
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
import ScrollTo from '../components/ScrollTo/component';
import Toggle from '../components/Toggle/component';
import FileInput from '../components/FileInput/component';
import Paragraph from '../components/Paragraph/component';
import ProgressBar from '../components/ProgressBar/component';
import Details from '../components/Details/component';
import ActionBox from '../components/ActionBox/component';
import Warning from '../components/Warning/component';
import {
  TOGGLE_ADD_FILES_ACCORDION_ONE,
  TOGGLE_ADD_FILES_ACCORDION_TWO,
  TOGGLE_ADD_FILES_SCROLL,
  TOGGLE_ADD_FILES_UPLOADING,
  UPDATE_ADD_FILES_UPLOAD_PROGRESS_VALUE,
} from '../reducers';
import UploadStatus from '../components/UploadStatus/component';


const RequestForDataAddFiles = () => {
  const showAddFilesAccordionOne = useSelector((state) => state.showAddFilesAccordionOne);
  const showAddFilesAccordionTwo = useSelector((state) => state.showAddFilesAccordionTwo);
  const showAddFilesUploading = useSelector((state) => state.showAddFilesUploading);
  const showAddFilesScroll = useSelector((state) => state.showAddFilesScroll);
  const uploadProgressValue = useSelector((state) => state.uploadProgressValue);
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

  const handleFileChosen = (file) => {
    const fileReader = new FileReader();
    fileReader.onloadstart = () => {
      dispatch({ type: TOGGLE_ADD_FILES_UPLOADING });
    };
    fileReader.onprogress = (data) => {
      if (data.lengthComputable) {
        const progress = parseInt(((data.loaded / data.total) * 100), 10);
        dispatch({ type: UPDATE_ADD_FILES_UPLOAD_PROGRESS_VALUE, payload: progress });
      }
    };
    fileReader.onloadend = () => {
      dispatch({ type: TOGGLE_ADD_FILES_UPLOADING });
    };
    fileReader.readAsText(file);
  };

  return (
    <>
      <Header isNotification userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <BackLink href="/request-for-data-start-page" />
        {
          showAddFilesUploading ? <Warning>File uploading. Please don’t close your browser window</Warning> : ''
        }
        <Main>
          <Row>
            <Column columnWidth="two-thirds">
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
                          <Paragraph>This is where you’ll supply current meter data, and other data, which will be used by SEPA for modelling.</Paragraph>
                          <Details title="Guidance">&nbsp;</Details>
                          {
                            showAddFilesScroll
                              ? <ScrollTo /> : ''
                          }
                          <ActionBox locked={false}>
                            <Heading level="h4">Modelling data upload</Heading>
                            <FileInput id="file-upload" onChange={(e) => handleFileChosen(e.target.files[0])} />
                            {
                              showAddFilesUploading
                                ? (
                                  <>
                                    <ProgressBar progressValue={uploadProgressValue} />
                                    <UploadStatus>File uploading. Please don’t close your browser window</UploadStatus>
                                  </>
                                ) : ''
                            }
                          </ActionBox>
                        </Column>
                        <Column columnWidth="one-third">
                          <Heading level="h3">Workflow tasks:</Heading>
                          <Toggle modifier="govuk-right govuk-clear-margin" href="/" className="" onClick={(e) => { e.preventDefault(); dispatch({ type: TOGGLE_ADD_FILES_SCROLL }); }}>Upload modelling data</Toggle>
                        </Column>
                      </Row>
                    </AccordionSection>
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

export default RequestForDataAddFiles;

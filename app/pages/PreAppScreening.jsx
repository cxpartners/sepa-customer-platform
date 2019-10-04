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
import RadioGroup from '../components/RadioGroup/component';
import Radio from '../components/Radio/component';
import ScrollTo from '../components/ScrollTo/component';
import ActionBox from '../components/ActionBox/component';
import FieldSet from '../components/FieldSet/component';
import ActionBoxComplete from '../components/ActionBoxComplete/component';
import Toggle from '../components/Toggle/component';
import { UPDATE_SCREENING_RADIO, TOGGLE_PRE_APP_SCREENING_SCROLL } from '../reducers';

const PermitPage = () => {
  const showPreAppScreeningScroll = useSelector((state) => state.showPreAppScreeningScroll);
  const eastingValue = useSelector((state) => state.eastingValue);
  const northingValue = useSelector((state) => state.northingValue);
  const radioScreeningValue = useSelector((state) => state.radioScreeningValue);
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
      <Header isNotification={false} userName="Craig Reid" />
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
                    <AccordionSection expanded locked={false} sectionKey="1" heading="Pre-application details" aria-expanded="true">
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
                          {
                            showPreAppScreeningScroll
                              ? <ScrollTo /> : ''
                          }
                          <ActionBoxComplete>Pre-application review</ActionBoxComplete>
                          <ActionBox locked={false}>
                            <Heading level="h3">Initial screening report</Heading>
                            <FieldSet legend="Does the pre-application meet the requirements to move to the next stage?" inBox error={false} errorMessage="">
                              <RadioGroup inline>
                                <Radio name="screeningRadio" id="yes" value="Yes" checked={radioScreeningValue === 'Yes'} onChange={(e) => dispatch({ type: UPDATE_SCREENING_RADIO, payload: e.target.value })} />
                                <Radio name="screeningRadio" id="no" value="No" checked={radioScreeningValue === 'No'} onChange={(e) => dispatch({ type: UPDATE_SCREENING_RADIO, payload: e.target.value })} />
                              </RadioGroup>
                              <br />
                            </FieldSet>
                          </ActionBox>
                        </Column>
                        <Column columnWidth="one-third">
                          <Heading level="h3">Workflow tasks:</Heading>
                          <Toggle modifier="govuk-right govuk-clear-margin" href="/" className="" onClick={(e) => { e.preventDefault(); dispatch({ type: TOGGLE_PRE_APP_SCREENING_SCROLL }); }}>Complete initial screening report</Toggle>
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
      <Footer href="/arrives-at-management-dashboard" />
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

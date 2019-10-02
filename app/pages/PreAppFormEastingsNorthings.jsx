/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
import FieldSet from '../components/FieldSet/component';
import Details from '../components/Details/component';
import SummaryListRow from '../components/SummaryListRow/component';
import SummaryList from '../components/SummaryList/component';
import { UPDATE_EASTINGS_VALUE, UPDATE_NORTHINGS_VALUE, TOGGLE_LOCATION_INPUT } from '../reducers';
import TextInput from '../components/TextInput/component';
import Button from '../components/Button/component';
import Paragraph from '../components/Paragraph/component';
import Toggle from '../components/Toggle/component';
import FormGroup from '../components/FormGroup/component';


const PreAppFormEastingNorthing = () => {
  const eastingValue = useSelector((state) => state.eastingValue);
  const northingValue = useSelector((state) => state.northingValue);
  const showLocationInput = useSelector((state) => state.showLocationInput);
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
      <Header isNotification userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <BackLink href="/pre-app-form-water-body-name" />
        <Main>
          <Row>
            <Column columnWidth="full">
              <Heading caption="4/10 – Pre-application form" level="h1">Marine pen fish farm details</Heading>
              <FieldSet inPage legend="Add the Eastings and Northings (at the centre) for each pen">
                <Details title="Question guidance" />
                <SummaryList>
                  {locationArray
                    .map((location) => (
                      <SummaryListRow addLinks addEdit listKey={`Pen ${location.pen}`}>{`X ${location.easting} (Eastings), Y ${location.northing} (Northings)`}</SummaryListRow>
                    ))}
                  {
                    eastingValue && northingValue
                      ? (
                        <SummaryListRow addLinks addEdit listKey="Pen 11">{`X ${eastingValue} (Eastings), Y ${northingValue} (Northings)`}</SummaryListRow>
                      ) : ''
                  }
                </SummaryList>
              </FieldSet>
              {
                showLocationInput
                  ? (
                    <FieldSet>
                      <div className="govuk-date-input" id="expiry">
                        <FormGroup>
                          <div className="govuk-date-input__item">
                            <TextInput
                              type="number"
                              label="Easting"
                              value={eastingValue}
                              inputWidth="full"
                              onChange={(e) => dispatch({ type: UPDATE_EASTINGS_VALUE, payload: e.target.value })}
                            />
                          </div>
                          <div className="govuk-date-input__item">
                            <TextInput
                              type="number"
                              label="Northing"
                              value={northingValue}
                              inputWidth="full"
                              onChange={(e) => dispatch({ type: UPDATE_NORTHINGS_VALUE, payload: e.target.value })}
                            />
                          </div>
                          <Button modifier="govuk-button--secondary" onClick={(e) => { e.preventDefault(); dispatch({ type: TOGGLE_LOCATION_INPUT }); }}>Add</Button>
                        </FormGroup>
                      </div>
                    </FieldSet>
                  ) : (
                    <Toggle href="/" className="" onClick={(e) => { e.preventDefault(); dispatch({ type: TOGGLE_LOCATION_INPUT }); }}>Add one more pen</Toggle>
                  )
                }
              <Button href="/pre-app-form-species">Save and continue</Button>
              <Paragraph>If you cannot finish the form now, all your previously completed answers will be saved.</Paragraph>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default PreAppFormEastingNorthing;

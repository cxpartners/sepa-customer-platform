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
import CheckBox from '../components/CheckBox/component';
import CheckBoxGroup from '../components/CheckBoxGroup/component';
import Button from '../components/Button/component';
import Paragraph from '../components/Paragraph/component';
import Toggle from '../components/Toggle/component';
import { TOGGLE_AZAMETHIPHOS_CHECKED, TOGGLE_CYPERMETHRIN_CHECKED, TOGGLE_DELTAMETHRIN_CHECKED } from '../reducers';

const PreAppFormBathMedicines = () => {
  const azamethiphosChecked = useSelector((state) => state.azamethiphosChecked);
  const cypermethrinChecked = useSelector((state) => state.cypermethrinChecked);
  const deltamethrinChecked = useSelector((state) => state.deltamethrinChecked);
  const dispatch = useDispatch();

  return (
    <>
      <Header isNotification userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <BackLink href="/pre-app-form-feeding-rate" />
        <Main>
          <Row>
            <Column columnWidth="two-thirds">
              <Heading caption="8/10 – Pre-application form" level="h1">Medicine details</Heading>
              <FieldSet inPage legend="Bath sea lice medicines required">
                <Details title="Question guidance">&nbsp;</Details>
                <CheckBoxGroup>
                  <CheckBox value="Cypermethrin" checked={cypermethrinChecked} onChange={(e) => dispatch({ type: TOGGLE_AZAMETHIPHOS_CHECKED, payload: e.target.value })} />
                  <CheckBox value="Deltamethrin" checked={deltamethrinChecked} onChange={(e) => dispatch({ type: TOGGLE_CYPERMETHRIN_CHECKED, payload: e.target.value })} />
                  <CheckBox value="Azamethiphos" checked={azamethiphosChecked} onChange={(e) => dispatch({ type: TOGGLE_DELTAMETHRIN_CHECKED, payload: e.target.value })} />
                </CheckBoxGroup>
                <Toggle href="/">Add a different type of medicine</Toggle>
              </FieldSet>
              <Button href="/pre-app-form-feed-medicines">Save and continue</Button>
              <Paragraph>If you cannot finish the form now, all your previously completed answers will be saved.</Paragraph>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default PreAppFormBathMedicines;

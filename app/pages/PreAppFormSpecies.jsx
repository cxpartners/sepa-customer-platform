/* eslint-disable max-len */
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
import FieldSet from '../components/FieldSet/component';
import Details from '../components/Details/component';
import RadioGroup from '../components/RadioGroup/component';
import Radio from '../components/Radio/component';
import Button from '../components/Button/component';
import Paragraph from '../components/Paragraph/component';

const PreAppFormSpecies = () => {
  const fishValue = useSelector((state) => state.fishValue);

  return (
    <>
      <Header isNotification userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <BackLink href="/pre-app-form-eastings-northings" />
        <Main>
          <Row>
            <Column columnWidth="two-thirds">
              <Heading caption="5/10 – Pre-application form" level="h1">Fish details</Heading>
              <FieldSet inPage legend="Species to be farmed">
                <Details title="Question guidance" />
                <RadioGroup>
                  <Radio name="fishRadio" id="salmon" value="Salmon" checked={fishValue === 'Salmon'} />
                  <Radio name="fishRadio" id="trout" value="Trout" checked={fishValue === 'Trout'} />
                  <Radio name="fishRadio" id="other" value="Other" checked={fishValue === 'Other'} />
                </RadioGroup>
              </FieldSet>
              <Button href="/pre-app-form-weight">Save and continue</Button>
              <Paragraph>If you cannot finish the form now, all your previously completed answers will be saved.</Paragraph>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default PreAppFormSpecies;

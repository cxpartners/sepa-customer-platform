import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Footer from '../components/Footer/component';
import Button from '../components/Button/component';
import PermitList from '../components/PermitList/component';
import PermitListRow from '../components/PermitListRow/component';
import Paragraph from '../components/Paragraph/component';
import {
  PERMITS_FETCH_DATA,
  PERMITS_FETCH_REQUESTING,
  PERMITS_FETCH_FAILED,
  PERMITS_FETCH_SUCCESS,
  PERMITS_FETCH_INVALID,
} from '../reducers';

const Permits = () => {
  const dispatch = useDispatch();
  const permits = useSelector((state) => state.permits);
  const name = 'Salmon & Salmon Ltd';

  const getReviewDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    const newDate = new Date(year + 2, month, day);
    let dd = newDate.getDate();
    let mm = newDate.getMonth() + 1;
    const yyyy = newDate.getFullYear();
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    return `${dd}/${mm}/${yyyy}`;
  };

  const fetchPermitsData = async () => {
    try {
      let data;
      dispatch({
        type: PERMITS_FETCH_DATA,
        readyStatus: PERMITS_FETCH_REQUESTING,
        payload: [],
      });

      const response = await axios(
        'https://online.sepa.org.uk/apex/sepaapps/AQPilot/licences',
      );

      if (response.data.items) {
        data = response.data.items.filter((item) => item.principal_contact === 'CURRIE AQUACULTURE SCOTLAND  LIMITED');
      }

      dispatch({
        type: PERMITS_FETCH_DATA,
        readyStatus: PERMITS_FETCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PERMITS_FETCH_DATA,
        readyStatus: PERMITS_FETCH_FAILED,
        payload: [],
      });
    }
  };

  useEffect(() => {
    if (permits.readyStatus === PERMITS_FETCH_INVALID) {
      fetchPermitsData();
    }
  });

  return (
    <>
      <Header isNotification={false} userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <Main>
          <Row>
            <Column columnWidth="full">
              <Heading caption="Account reference number: 860120" level="h1">{name}</Heading>
              <Button>Create new permit</Button>
              <Heading level="h2">Your permits</Heading>
              { permits.readyStatus === PERMITS_FETCH_FAILED
                && <Paragraph>Loading permits failed</Paragraph>}
              {(permits.readyStatus === PERMITS_FETCH_REQUESTING
                || permits.readyStatus === PERMITS_FETCH_INVALID)
                && (
                  <PermitList caption="Awarded permits" dateColumn="Review date">
                    <PermitListRow loading />
                  </PermitList>
                )}
              {permits.readyStatus === PERMITS_FETCH_SUCCESS
              && (
                <PermitList caption={`Awarded permits (${permits.data.length})`} dateColumn="Review date">
                  { permits && permits.data.map((item) => (
                    <PermitListRow key={item.licence_number} href={`/permit/${encodeURIComponent(item.licence_number)}`} listKey={item.licence_number} siteName={item.site_name} waterBody="Loch Mhòrair" date={getReviewDate(item.licence_status_date)} />
                  ))}
                </PermitList>
              )}
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer href="/permits-time-passes" />
    </>
  );
};

export default Permits;

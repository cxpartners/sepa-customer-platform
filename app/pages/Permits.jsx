import React, { useState, useEffect } from 'react';
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
import Warning from '../components/Warning/component';

const Permit = () => {
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

  const [data, setData] = useState({ licenses: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/api/v1/organisations/CURRIE%20AQUACULTURE%20SCOTLAND%20%20LIMITED/licences',
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header isNotification={false} userName="Rory McCulloch" />
      <Container>
        <PhaseBanner />
        <Main>
          <Row>
            <Column columnWidth="full">
              <Warning>Notification</Warning>
              <Heading caption="Account reference number: 860120" level="h1">{name}</Heading>
              <Button>Create new permit</Button>
              <Heading level="h2">Your permits</Heading>
              {
                !data.licences || !data.licences.length
                  ? (
                    <PermitList caption="Awarded permits" dateColumn="Review date">
                      <PermitListRow loading />
                    </PermitList>
                  )
                  : (
                    <PermitList caption="Awarded permits (24)" dateColumn="Review date">
                      {
                      data.licences && data.licences.map((item) => (
                        <PermitListRow href={`/clas-licences/${encodeURIComponent(item.licence_number)}`} listKey={item.licence_number} siteName={item.site_name} waterBody="TBD" date={getReviewDate(item.licence_status_date)} />
                      ))
                    }
                    </PermitList>
                  )
              }
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default Permit;

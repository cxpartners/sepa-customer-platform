/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Footer from '../components/Footer/component';
import Link from '../components/Link/component';
import Paragraph from '../components/Paragraph/component';

const axios = require('axios');

const LicencesListPage = () => {
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
      <Header />
      <Container>
        <PhaseBanner />
        <Main>
          <Row>
            <Column columnWidth="full">
              {!data.licences || !data.licences.length ? (
                <Paragraph>Loading</Paragraph>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>CAR Number</th>
                      <th>Site name</th>
                      <th>Water body</th>
                      <th>Review date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.licences && data.licences.map((item) => (
                      <tr key={item.licence_number}>
                        <td><Link href={`/clas-licences/${encodeURIComponent(item.licence_number)}`}>{item.licence_number}</Link></td>
                        <td>{item.site_name}</td>
                        <td>TBD</td>
                        <td>{getReviewDate(item.licence_status_date)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default LicencesListPage;

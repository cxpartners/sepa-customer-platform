import React from 'react';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Footer from '../components/Footer/component';
import NotificationList from '../components/NotificationList/component';
import NotificationListRow from '../components/NotificationListRow/component';
import Details from '../components/Details/component';
import BackLink from '../components/BackLink/component';

const Permit = () => {
  const name = 'Notifications';

  return (
    <>
      <Header isNotification userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <BackLink href="/applicant-reviewed-data-permits" />
        <Main>
          <Row>
            <Column columnWidth="full">
              <Heading caption="Account reference number: 860120" level="h1">{name}</Heading>
              <NotificationList caption="New notifications (3)" dateColumn="Last updated">
                <NotificationListRow key="1" listKey="CAR/L/4336581" status="pre-application" isActive href="/applicant-reviewed-data-permit-page" notificationType="Data marked fit for purpose" date="n/a" respondBy="10/10/2019" />
                <NotificationListRow key="2" listKey="CAR/L/4336580" status="pre-application" isActive href="/" notificationType="Data upload" date="16/10/2019" respondBy="02/10/219" />
                <NotificationListRow key="2" listKey="CAR/L/4336580" status="pre-application" isActive href="/" notificationType="Data review" date="02/10/2019" respondBy="18/09/2019" />
              </NotificationList>
              <Details modifier="govuk-!-font-weight-bold" title="Older notifications">&nbsp;</Details>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer href="/permits-time-passes" />
    </>
  );
};

export default Permit;

/* eslint-disable react/jsx-one-expression-per-line */
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
import FieldSet from '../components/FieldSet/component';
import Button from '../components/Button/component';
import TextInput from '../components/TextInput/component';
import Paragraph from '../components/Paragraph/component';
import SummaryList from '../components/SummaryList/component';
import SummaryListRow from '../components/SummaryListRow/component';
import Link from '../components/Link/component';
import { TOGGLE_CREATE_ACCOUNT_COMPANY_DETAILS_FOUND, UPDATE_CREATE_ACCOUNT_COMPANY_DETAILS } from '../reducers';


const CreateAccountAddCompanyDetails = () => {
  const createAccountCompanyDetailsFound = useSelector((state) => state.createAccountCompanyDetailsFound);
  const createAccountCompanyDetailsValue = useSelector((state) => state.createAccountCompanyDetailsValue);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Container>
        <PhaseBanner />
        <Main>
          <Row>
            <Column columnWidth="two-thirds">
              <Heading caption="Step 2/3 - Create account" level="h1">Company details</Heading>
              { createAccountCompanyDetailsFound
                ? (
                  <>
                    <Heading level="h3">Companies house number</Heading>
                    <Paragraph size="small">120934434&nbsp;<Link href="/create-account-add-company-details" onClick={(e) => { e.preventDefault(); dispatch({ type: TOGGLE_CREATE_ACCOUNT_COMPANY_DETAILS_FOUND }); }}>Change</Link></Paragraph>
                    <SummaryList>
                      <SummaryListRow listKey="Organisation name">Salmon &amp; Salmon Ltd</SummaryListRow>
                      <SummaryListRow listKey="Company secretary name">Jonathan Morris</SummaryListRow>
                      <SummaryListRow listKey="Building or street">32 Rowton Drive</SummaryListRow>
                      <SummaryListRow listKey="Town or city">Balmeanach</SummaryListRow>
                      <SummaryListRow listKey="County">Isle of Mull</SummaryListRow>
                      <SummaryListRow listKey="Postcode">PA65 6BA</SummaryListRow>
                      <SummaryListRow listKey="Phone number">01688 232 494</SummaryListRow>
                    </SummaryList>
                    <Paragraph>Please confirm that these are your Company&lsquo;s details before you continue.</Paragraph>
                    <Button href="/create-account-your-details">Continue</Button>
                    <Paragraph>Visit <Link href="/">Companies House</Link> for more information.</Paragraph>
                  </>
                )
                : (
                  <>
                    <FieldSet>
                      <TextInput inputWidth="two-thirds" hint="Type in your organisation’s Companies House number to find and verify the organisation you represent." label="Companies house number" type="number" id="companies-house-number" onChange={(e) => dispatch({ type: UPDATE_CREATE_ACCOUNT_COMPANY_DETAILS, payload: e.target.value })} value={createAccountCompanyDetailsValue} />
                    </FieldSet>
                    <Button onClick={() => dispatch({ type: TOGGLE_CREATE_ACCOUNT_COMPANY_DETAILS_FOUND })}>Find</Button>
                  </>
                )}
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default CreateAccountAddCompanyDetails;

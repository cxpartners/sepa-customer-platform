/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Footer from '../components/Footer/component';
import Button from '../components/Button/component';
import BackLink from '../components/BackLink/component';
import Paragraph from '../components/Paragraph/component';
import Warning from '../components/Warning/component';
import Link from '../components/Link/component';
import UploadStatus from '../components/UploadStatus/component';
import FileUploadStatus from '../components/FileUploadStatus/component';
import FileUploadList from '../components/FileUploadList/component';
import {
  START_ADD_FILE_UPLOAD_VALUES,
  START_ADD_FILE_UPLOADING,
  STOP_ADD_FILE_UPLOADING,
  UPDATE_ADD_FILES_UPLOAD_PROGRESS_VALUE,
  TOGGLE_FILE_SUBMISSION,
  START_ADD_FILES_UPLOADING,
} from '../reducers';
import List from '../components/List/component';
import FileDrop from '../components/FileDrop/component';
import Details from '../components/Details/component';


const RequestForDataAddFiles = () => {
  const showAddFilesUploading = useSelector((state) => state.showAddFilesUploading);
  const filesArray = useSelector((state) => state.files) || [];
  const filesUploading = useSelector((state) => state.filesUploading);
  const dataTypeValue = useSelector((state) => state.dataTypeValue);
  const filesSubmitted = useSelector((state) => state.filesSubmitted);
  const dispatch = useDispatch();

  const handleFileChosen = (files) => {
    dispatch({ type: START_ADD_FILES_UPLOADING });
    for (let i = 0; i < files.length; i++) {
      const fileReader = new FileReader();
      fileReader.onloadstart = () => {
        dispatch({ type: START_ADD_FILE_UPLOADING });
        dispatch({
          type: START_ADD_FILE_UPLOAD_VALUES,
          payload: {
            key: i,
            name: '',
            size: 0,
            progress: 0,
          },
        });
      };
      fileReader.onprogress = (data) => {
        if (data.lengthComputable) {
          dispatch({
            type: UPDATE_ADD_FILES_UPLOAD_PROGRESS_VALUE,
            payload: {
              key: i,
              name: files[i].name,
              size: files[i].size,
              progress: parseInt(((data.loaded / data.total) * 100), 10),
            },
          });
        }
      };
      fileReader.onloadend = () => {
        dispatch({ type: STOP_ADD_FILE_UPLOADING });
      };
      fileReader.readAsText(files[i]);
    }
  };

  return (
    <>
      <Header isNotification={false} userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <BackLink href="/request-for-data-choose-type" />
        {
          (filesUploading > 0) ? <Warning>File uploading. Please don’t close your browser window</Warning> : ''
        }
        <Main>
          <Row>
            <Column columnWidth="full">
              <Heading caption="Current data" level="h1">{dataTypeValue || '90-day data'}</Heading>
            </Column>
          </Row>
          <Row>
            <Column columnWidth="two-thirds">
              <Heading level="h4">Download current data templates</Heading>
              <Paragraph>Download this zip file containing spreadsheet and text file templates:</Paragraph>
              <List>
                <li>
                  <Link href="/">Modelling Data Collection Reporting Templates</Link>
                </li>
              </List>
              <Heading level="h2">Upload files</Heading>
              <Paragraph>Submitted data will be used in the permitting process and included in the Modelling Data Collection report.</Paragraph>
              <Details title="Question guidance">&nbsp;</Details>
              { !filesSubmitted ? <FileDrop onChange={(e) => handleFileChosen(e.target.files)} /> : '' }
              { (filesUploading > 0) ? <UploadStatus>File uploading. Please don’t close your browser window</UploadStatus> : ''}
              {
                (showAddFilesUploading)
                  ? (
                    <FileUploadList>
                      {
                        filesArray.map((file) => (
                          <FileUploadStatus fileName={file.name} fileSize={file.size} uploadProgressValue={file.progress} />
                        ))
                      }
                    </FileUploadList>
                  ) : ''
              }
              { (filesUploading > 0) ? <Paragraph>You can submit your files now while they’re uploading and they’ll automatically be sent to Sepa for review.</Paragraph> : '' }
              { ((filesUploading > 0) && !filesSubmitted) ? <Button onClick={(e) => { e.preventDefault(); dispatch({ type: TOGGLE_FILE_SUBMISSION }); }}>Submit files for review</Button> : '' }
              { (filesUploading > 0) && filesSubmitted ? <Paragraph>Files will be submitted when they have completed uploading <Link onClick={(e) => { e.preventDefault(); dispatch({ type: TOGGLE_FILE_SUBMISSION }); }}>Undo</Link></Paragraph> : ''}
              { showAddFilesUploading && (filesUploading < 1)
                ? filesSubmitted
                  ? <Redirect to="/request-for-data-confirmation-page" />
                  : <Button onClick={(e) => { e.preventDefault(); dispatch({ type: TOGGLE_FILE_SUBMISSION }); }}>Submit files for review</Button>
                : ''}
            </Column>
          </Row>
          <Row>
            <Column columnWidth="two-thirds">
              <Heading level="h3">Need help with your uploads?</Heading>
              <Paragraph>If you’ve got a question about the application process, you can contact the team <Link href="/mailto:permitting@sepa.co.uk">permittingteam@sepa.co.uk</Link></Paragraph>
              <Paragraph>or view the modelling documentation here:</Paragraph>
              <List>
                <li><Link href="/">Regulatory Modelling Process and Reporting Guidance for the Aquaculture Sector</Link></li>
                <li><Link href="/">Regulatory Modelling Guidance for the Aquaculture Sector</Link></li>
              </List>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default RequestForDataAddFiles;

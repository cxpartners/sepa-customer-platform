/* eslint-disable jsx-a11y/anchor-is-valid */
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
import Button from '../components/Button/component';
import BackLink from '../components/BackLink/component';
import FileInput from '../components/FileInput/component';
import ProgressBar from '../components/ProgressBar/component';
import Paragraph from '../components/Paragraph/component';
import Warning from '../components/Warning/component';
import UploadStatus from '../components/UploadStatus/component';
import Link from '../components/Link/component';
import {
  TOGGLE_ADD_FILES_UPLOADING,
  UPDATE_ADD_FILES_UPLOAD_PROGRESS_VALUE,
  TOGGLE_FILE_UPLOAD_COMPLETE,
  TOGGLE_FILE_SUBMISSION,
} from '../reducers';
import List from '../components/List/component';


const RequestForDataAddFiles = () => {
  const showAddFilesUploading = useSelector((state) => state.showAddFilesUploading);
  const uploadProgressValue = useSelector((state) => state.uploadProgressValue);
  const dataTypeValue = useSelector((state) => state.dataTypeValue);
  const fileUploadComplete = useSelector((state) => state.fileUploadComplete);
  const filesSubmitted = useSelector((state) => state.filesSubmitted);
  const dispatch = useDispatch();

  const handleFileChosen = (file) => {
    const fileReader = new FileReader();
    fileReader.onloadstart = () => {
      dispatch({ type: TOGGLE_ADD_FILES_UPLOADING });
    };
    fileReader.onprogress = (data) => {
      if (data.lengthComputable) {
        const progress = parseInt(((data.loaded / data.total) * 100), 10);
        dispatch({ type: UPDATE_ADD_FILES_UPLOAD_PROGRESS_VALUE, payload: progress });
      }
    };
    fileReader.onloadend = () => {
      dispatch({ type: TOGGLE_ADD_FILES_UPLOADING });
      dispatch({ type: TOGGLE_FILE_UPLOAD_COMPLETE });
    };
    fileReader.readAsText(file);
  };

  return (
    <>
      <Header isNotification userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <BackLink href="/request-for-data-choose-type" />
        {
          showAddFilesUploading ? <Warning>File uploading. Please don’t close your browser window</Warning> : ''
        }
        <Main>
          <Row>
            <Column columnWidth="full">
              <Heading caption="Current data" level="h1">{dataTypeValue || '90-day data'}</Heading>
            </Column>
          </Row>
          <Row>
            <Column columnWidth="two-thirds">
              <Heading level="h2">Upload files</Heading>
              <Paragraph>Submitted data will be used in the permitting process and included in the Modelling Data Collection report.</Paragraph>
              <FileInput id="file-upload" onChange={(e) => handleFileChosen(e.target.files[0])} />
              {
                showAddFilesUploading
                  ? (
                    <>
                      <ProgressBar progressValue={uploadProgressValue} />
                      <UploadStatus>File uploading. Please don’t close your browser window</UploadStatus>
                    </>
                  ) : ''
              }
              { showAddFilesUploading ? <Paragraph>Files can be marked as ready for submission before they have completed uploading.</Paragraph> : '' }
              { (showAddFilesUploading && !filesSubmitted) || (filesSubmitted && fileUploadComplete) ? <Button onClick={(e) => { e.preventDefault(); dispatch({ type: TOGGLE_FILE_SUBMISSION }); }}>Submit files for review</Button> : '' }
              { showAddFilesUploading && filesSubmitted ? <Paragraph>Files will be submitted when they have completed uploading <Link onClick={(e) => { e.preventDefault(); dispatch({ type: TOGGLE_FILE_SUBMISSION }); }}>Undo</Link></Paragraph> : ''}
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

/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Heading from '../Heading/component';
import Paragraph from '../Paragraph/component';
import Link from '../Link/component';

const Guidance = () => (
  <>
    <Heading level="h3">Need help?</Heading>
    <Paragraph>If you’ve got a question about the application process, you can:</Paragraph>
    <ul className="govuk-list govuk-list--bullet">
      <li>read more about the process in our <Link href="/">marine pen farm guidance</Link></li>
      <li>contact the team <Link href="/mailto:permitting@sepa.co.uk">permittingteam@sepa.co.uk</Link></li>
    </ul>
  </>
);

export default Guidance;

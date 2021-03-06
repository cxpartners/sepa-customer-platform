import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/component';
import Tag from '../Tag/component';


const IndexListItem = (props) => {
  const {
    children,
    done,
    href,
    image,
    tech,
  } = props;

  return (
    <li>
      <Link href={href}>{children}</Link>
      {
        done ? '' : (
          <>
            &nbsp;&mdash;&nbsp;
            <Tag>TO DO</Tag>
          </>
        )
      }
      {
        image ? (
          <>
            &nbsp;
            <Tag isActive>IMAGE</Tag>
          </>
        ) : ''
      }
      {
        tech ? (
          <>
            &nbsp;
            <Tag isStatus>TECH</Tag>
          </>
        ) : ''
      }
    </li>
  );
};

export default IndexListItem;

IndexListItem.propTypes = {
  children: PropTypes.string.isRequired,
  done: PropTypes.bool,
  image: PropTypes.bool,
  tech: PropTypes.bool,
  href: PropTypes.string.isRequired,
};

IndexListItem.defaultProps = {
  image: false,
  done: false,
  tech: false,
};

import React from 'react';
import PropTypes from 'prop-types';
import Hoc from '../Hoc/Hoc';

const Divider = ({ thick, bottomSpace, percentWidth }) => {
  const myStyle = {
    display: 'block',
    width: `${percentWidth}%`,
    borderTop: `${thick}px solid rgba(78,137,174,0.3)`,
    borderRadius: `${thick}px`,
  };

  return (
    <Hoc>
      <hr style={{ ...myStyle, marginBottom: `${bottomSpace || '0'}px` }} />
    </Hoc>
  );
};

Divider.propTypes = {
  thick: PropTypes.string,
  bottomSpace: PropTypes.string,
  percentWidth: PropTypes.string,
};

export default Divider;

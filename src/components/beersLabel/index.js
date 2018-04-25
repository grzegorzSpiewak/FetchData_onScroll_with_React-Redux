import React from 'react';
import PropTypes from 'prop-types';
/* Components */
import RedirectBtn from 'components/common/redirectBtn';

const beersLabel = (props) => {
  return (
    <li className="beers__list__beer">
      <img
        src={props.image_url}
        alt={`${props.name} Image`}
        className="beers__list__beer__image"
      />
      <h1
        className="beers__list__beer__name">
        {props.name}
      </h1>
      <p className="beers__list__beer__tagline">
        {props.tagline}
      </p>
      <RedirectBtn { ...props } />
    </li>
  )
};

beersLabel.propTypes = {
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
};

export default beersLabel;

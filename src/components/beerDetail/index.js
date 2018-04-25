import React from 'react';
import PropTypes from 'prop-types';

const renderList = (items) => {
  return items.map(item =>
    <li
      key={item}
      className="beer-detail__details__food__item">{item}
    </li>
  )
};

const beerDetail = (props) => {
  return (
    <div className="beer-detail">
      <div className="beer-detail__image">
        <img
          className="beer-detail__image__img"
          src={props.image_url}
          alt={`${props.name} Image`}
        />
      </div>
      <div className="beer-detail__details">
        <h2 className="beer-detail__details__name">{props.name}</h2>
        <h3 className="beer-detail__details__tagline">{props.tagline}</h3>
        <div className="beer-detail__details__prop">
          <p className="beer-detail__details__prop__info">
            <span className="beer-detail__details__prop__info--bold">
            ibu: </span>
            {props.ibu}
          </p>
          <p className="beer-detail__details__prop__info">
            <span className="beer-detail__details__prop__info--bold">
            abv: </span>
            {props.abv} %
          </p>
          <p className="beer-detail__details__prop__info">
            <span className="beer-detail__details__prop__info--bold">
            ebc: </span>
            {props.ebc}
          </p>
        </div>
        <article className="beer-detail__details__descrtiption">{props.description}</article>
        <h4 className="beer-detail__details__recomendation">Best served with:</h4>
        <ul className="beer-detail__details__food">
          {
            renderList(props.food_pairing)
          }
        </ul>
      </div>
    </div>
  )
};

beerDetail.propTypes = {
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  ibu: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  ebc: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default beerDetail;

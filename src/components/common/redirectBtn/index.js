import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class redirectBtn extends Component {

  redirect(e) {
    e.preventDefault();
    let detailsPath = `/details/${this.props.id}`

    this.props.history.push(detailsPath);
  }

  render() {
    return (
      <button
        onClick={this.redirect.bind(this)}
      >Details
      </button>
    )
  }
};

redirectBtn.propTypes = {
  id: PropTypes.number.isRequired,
};

export default withRouter(redirectBtn);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
/* Actions */
import * as beerActions from 'modules/fetchBeer/actions';
/* Components */
import BeerDetail from 'components/beerDetail';
import Spinner from 'components/common/spinner';

const mapStateToProps = ({ beer }) => ({
  beerState: beer
});

const mapDispatchToProps = (dispatch) => ({
  beerActions: bindActionCreators(beerActions, dispatch)
});

class Details extends Component {

  componentWillMount() {
    const { fetchBeerById } = this.props.beerActions;
    const beerId = this.props.match.params.id;
    fetchBeerById(beerId);
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    const { cleanDetails } = this.props.beerActions;
    cleanDetails();
  }

  render() {
    const { beer, loaded } = this.props.beerState;
    return (
      <section id="details">
        {
          loaded ? <BeerDetail {...beer} /> : <Spinner />
        }
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);

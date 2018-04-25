import React, { Component } from 'react';
import { connect } from 'react-redux';
/* Components */
import BeersList from 'components/beersList';

const mapStateToProps = ({ beer }) => ({
  beerState: beer
});

class Home extends Component {
  render() {
    return (
      <section id="home">
        <BeersList />
      </section>
    );
  }
};

export default connect(mapStateToProps)(Home);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { debounce } from 'throttle-debounce';
/* Actions */
import * as beersActions from 'modules/fetchBeers/actions';
/* Components */
import BeerLabel from 'components/beersLabel';
import Spinner from 'components/common/spinner';

const mapStateToProps = ({ beers }) => ({
  beersState: beers,
});

const mapDispatchToProps = (dispatch) => ({
  beersActions: bindActionCreators(beersActions, dispatch),
});

class BeersList extends Component {
  constructor() {
    super();
    this.state = {
      pageToFetch: 1,
      showSpinner: true,
      showBeers: 20,
      ref: 'beers-list',
    }
    this.onScroll = this.onScroll.bind(this)
  }

  componentWillMount() {
    const { beers } = this.props.beersState
    const { fetchBeers } = this.props.beersActions
    const { pageToFetch, showBeers } = this.state

    beers.length > 0 ? null : fetchBeers(pageToFetch, showBeers)
  }

  componentWillReceiveProps() {
    const { beers } = this.props.beersState
    beers ? this.setState({ showSpinner: false }) : null
  }

  componentDidMount() {
    window.addEventListener('scroll', debounce(300, this.onScroll), false);
  }

  componentWillUnmount() {
    this.setState({ showSpinner: false })
    window.removeEventListener('scroll', debounce(300, this.onScroll), false);
  }

  onScroll(e) {
    const { stopFetching } = this.props.beersState
    const listHeight = this.refs[this.state.ref].clientHeight

    stopFetching ? null : window.innerHeight + window.scrollY > listHeight ? this.loadMoreBeers() : null
  }

  loadMoreBeers() {
    this.showSpinner()
    this.setState({ pageToFetch: this.state.pageToFetch += 1 })
    this.props.beersActions.fetchBeers(this.state.pageToFetch, this.state.showBeers)
  }

  showSpinner() {
    this.setState({ showSpinner: true })
  }

  render() {
    const { beers, stopFetching } = this.props.beersState
    const { showSpinner } = this.state

    return (
      <div
        className="beers"
        onScroll={ this.handleScroll }
        ref={ this.state.ref }
      >
        <TransitionGroup
          component="ul"
          className="beers__list"
          role="list"
        >
          {
            beers.map(beer =>
              <CSSTransition
                key={beer.id}
                classNames="slide"
                timeout={500}
              >
                <BeerLabel
                  { ...beer }
                  key={ beer.id }
                />
              </CSSTransition>
            )
          }
        </TransitionGroup>
        {
          showSpinner ? <Spinner /> : null
        }
        {
          stopFetching ? <h1 className="beers__list__name">no more beers</h1> : null
        }
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BeersList);

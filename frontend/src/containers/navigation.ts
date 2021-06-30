import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { State } from '../reducer';

import Component from '../components/navigation';
import { navigated } from '../reducer/actions';

const mapState = ({ categories }: State) => ({ categories: categories.data });

const mapDispatch = (dispatch: Dispatch) => ({
  onChange: () => dispatch(navigated()),
});

export default connect(mapState, mapDispatch)(Component);

import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { State } from '../reducer';

import Component from '../components/navigation';
import { NAVIGATED } from '../reducer/action-types';

const mapState = ({ categories }: State) => ({ categories: categories.data });

const mapDispatch = (dispatch: Dispatch) => ({
  onChange: () => dispatch({ type: NAVIGATED }),
});

export default connect(mapState, mapDispatch)(Component);

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Images from '../components/images';
import * as Actions from '../actions/images';

function mapStateToProps(state) {
  return {
    images: state.images
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);
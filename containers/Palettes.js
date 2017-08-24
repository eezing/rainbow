import { connect } from 'react-redux';
import { insert } from '../store/selected/action-creators';
import PalettesComponent from '../components/Palettes';

const mapStateToProps = state => {
  return {
    palettes: state.palettes,
    selected: state.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectColor: color => dispatch(insert(color))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PalettesComponent);

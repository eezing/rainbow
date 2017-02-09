
import { connect } from 'react-redux';
import { insert } from '../store/selected/action-creators';
import List from '../components/PaletteList';

const mapStateToProps = (state) => {
    return {
        palettes: state.palettes,
        selected: state.selected
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectColor: color => dispatch(insert(color))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
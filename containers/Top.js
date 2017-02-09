
import { connect } from 'react-redux';
import { insert, remove } from '../store/selected/action-creators';
import Bar from '../components/Bar';

const mapStateToProps = (state) => {
    return {
        selected: state.selected
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectColor: color => dispatch(insert(color)),
        deleteColor: color => dispatch(remove(color))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bar);
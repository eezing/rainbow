'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _actionCreators = require('../store/selected/action-creators');

var _PaletteList = require('../components/PaletteList');

var _PaletteList2 = _interopRequireDefault(_PaletteList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        palettes: state.palettes,
        selected: state.selected
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        selectColor: function selectColor(color) {
            return dispatch((0, _actionCreators.insert)(color));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_PaletteList2.default);
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _actionCreators = require('../store/selected/action-creators');

var _Bar = require('../components/Bar');

var _Bar2 = _interopRequireDefault(_Bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        selected: state.selected
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        selectColor: function selectColor(color) {
            return dispatch((0, _actionCreators.insert)(color));
        },
        deleteColor: function deleteColor(color) {
            return dispatch((0, _actionCreators.remove)(color));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Bar2.default);
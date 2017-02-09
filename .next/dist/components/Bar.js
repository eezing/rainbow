'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('/Users/ericzingeler/Desktop/rainbow/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/ericzingeler/Desktop/rainbow/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _ColorTable = require('./ColorTable');

var _ColorTable2 = _interopRequireDefault(_ColorTable);

var _ActiveColor = require('./ActiveColor');

var _ActiveColor2 = _interopRequireDefault(_ActiveColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bar = function Bar(_ref) {
    var selected = _ref.selected,
        selectColor = _ref.selectColor,
        deleteColor = _ref.deleteColor;
    return _react2.default.createElement('div', { className: 'outer-container', 'data-jsx': 1966531733
    }, _react2.default.createElement('div', { className: 'title', 'data-jsx': 1966531733
    }, selected.length ? _react2.default.createElement('h2', {
        'data-jsx': 1966531733
    }, 'Rainbow') : _react2.default.createElement('h1', {
        'data-jsx': 1966531733
    }, 'Rainbow')), _react2.default.createElement('div', { className: 'colors', 'data-jsx': 1966531733
    }, selected.length ? _react2.default.createElement('div', {
        'data-jsx': 1966531733
    }, _react2.default.createElement(_ActiveColor2.default, { selected: selected, deleteColor: deleteColor }), _react2.default.createElement(_ColorTable2.default, { palette: [selected], onColorSelect: selectColor })) : null), _react2.default.createElement('div', { className: 'lines', 'data-jsx': 1966531733
    }), _react2.default.createElement(_style2.default, {
        styleId: 1966531733,
        css: '.outer-container[data-jsx="1966531733"] {width: 100%;position: fixed;background-color: #fff;top: 0;right: 0;left: 0;zIndex: 1030;border-bottom-style: solid;border-bottom-width: 1.5px;border-bottom-color: #000;}.title[data-jsx="1966531733"] {margin: 8px 0 0 10px;}h1[data-jsx="1966531733"],h2[data-jsx="1966531733"] {margin: 0;padding: 0;}.colors[data-jsx="1966531733"] {margin: 0 8px 12px 8px;}.lines[data-jsx="1966531733"] {width: 100%;color: #000;margin-bottom: 6px;border-bottom-style: solid;border-bottom-width: 1.5px;border-bottom-color: #000;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCb0IsQUFDVSx5Q0FDRixZQUNJLGdCQUNPLHVCQUNoQixPQUNFLFNBQ0QsUUFDSyxhQUNjLDJCQUNBLDJCQUNELDBCQUM3QixDQUNPLCtCQUNpQixxQkFDeEIsQ0FDTyxxREFDTSxVQUNDLFdBQ2QsQ0FDUSxnQ0FDa0IsdUJBQzFCLENBQ08sK0JBQ1EsWUFDQSxZQUNPLG1CQUNRLDJCQUNBLDJCQUNELDBCQUM3QiIsImZpbGUiOiJjb21wb25lbnRzL0Jhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpY3ppbmdlbGVyL0Rlc2t0b3AvcmFpbmJvdyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb2xvclRhYmxlIGZyb20gJy4vQ29sb3JUYWJsZSc7XG5pbXBvcnQgQWN0aXZlQ29sb3IgZnJvbSAnLi9BY3RpdmVDb2xvcic7XG5cbmNvbnN0IEJhciA9ICh7IHNlbGVjdGVkLCBzZWxlY3RDb2xvciwgZGVsZXRlQ29sb3IgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItY29udGFpbmVyXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgeyBzZWxlY3RlZC5sZW5ndGggPyA8aDI+UmFpbmJvdzwvaDI+IDogPGgxPlJhaW5ib3c8L2gxPiB9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3JzXCI+XG4gICAgICAgICAgICB7c2VsZWN0ZWQubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxBY3RpdmVDb2xvciBzZWxlY3RlZD17c2VsZWN0ZWR9IGRlbGV0ZUNvbG9yPXtkZWxldGVDb2xvcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPENvbG9yVGFibGUgcGFsZXR0ZT17W3NlbGVjdGVkXX0gb25Db2xvclNlbGVjdD17c2VsZWN0Q29sb3J9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiIC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLm91dGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDMwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDEuNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDAgMCAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDEsIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2xvcnMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCA4cHggMTJweCA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGluZXMge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxLjVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5CYXIucHJvcFR5cGVzID0ge1xuICAgIHNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBzZWxlY3RDb2xvcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkZWxldGVDb2xvcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyO1xuIl19 */\n/*@ sourceURL=components/Bar.js */'
    }));
};

Bar.propTypes = {
    selected: _react2.default.PropTypes.array.isRequired,
    selectColor: _react2.default.PropTypes.func.isRequired,
    deleteColor: _react2.default.PropTypes.func.isRequired
};

exports.default = Bar;
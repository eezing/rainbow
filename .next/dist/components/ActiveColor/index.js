'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('/Users/ericzingeler/Desktop/rainbow/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/ericzingeler/Desktop/rainbow/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _DeleteColor = require('./DeleteColor');

var _DeleteColor2 = _interopRequireDefault(_DeleteColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActiveColor = function ActiveColor(_ref) {
    var selected = _ref.selected,
        deleteColor = _ref.deleteColor;

    var color = selected.filter(function (item) {
        return item.active === true;
    })[0] || {};

    var handleDelete = function handleDelete() {
        return deleteColor(color);
    };

    return _react2.default.createElement('div', { className: color.hex ? '' : 'hide-it', 'data-jsx': 2428537827
    }, _react2.default.createElement('ul', {
        'data-jsx': 2428537827
    }, _react2.default.createElement('li', {
        'data-jsx': 2428537827
    }, _react2.default.createElement(_DeleteColor2.default, { handleOnClick: handleDelete })), _react2.default.createElement('li', {
        'data-jsx': 2428537827
    }, 'hex: ', color.hex)), _react2.default.createElement(_style2.default, {
        styleId: 2428537827,
        css: 'div[data-jsx="2428537827"] {font-family: monospace;text-align: right;}div.hide-it[data-jsx="2428537827"] {visibility: hidden;}ul[data-jsx="2428537827"] {list-style: none;margin: -8px 8px 8px 0;padding: 0;}li[data-jsx="2428537827"] {display: inline;margin-left: 12px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWN0aXZlQ29sb3IvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J3QixBQUNILDRCQUNzQix1QkFDTCxrQkFDckIsQ0FDWSxvQ0FDVSxtQkFDdEIsQ0FDRywyQkFDaUIsaUJBQ00sdUJBQ1osV0FDZCxDQUNHLDJCQUNnQixnQkFDRSxrQkFDckIiLCJmaWxlIjoiY29tcG9uZW50cy9BY3RpdmVDb2xvci9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpY3ppbmdlbGVyL0Rlc2t0b3AvcmFpbmJvdyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEZWxldGVDb2xvciBmcm9tICcuL0RlbGV0ZUNvbG9yJztcblxuY29uc3QgQWN0aXZlQ29sb3IgPSAoeyBzZWxlY3RlZCwgZGVsZXRlQ29sb3IgfSkgPT4ge1xuXG4gICAgY29uc3QgY29sb3IgPSBzZWxlY3RlZC5maWx0ZXIoaXRlbSA9PiBpdGVtLmFjdGl2ZSA9PT0gdHJ1ZSlbMF0gfHwge307XG5cbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiBkZWxldGVDb2xvcihjb2xvcik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29sb3IuaGV4ID8gJycgOiAnaGlkZS1pdCcgfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+PERlbGV0ZUNvbG9yIGhhbmRsZU9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0gLz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5oZXg6IHtjb2xvci5oZXh9PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpdi5oaWRlLWl0IHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLThweCA4cHggOHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5BY3RpdmVDb2xvci5wcm9wVHlwZXMgPSB7XG4gICAgc2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGRlbGV0ZUNvbG9yOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3RpdmVDb2xvcjtcbiJdfQ== */\n/*@ sourceURL=components/ActiveColor/index.js */'
    }));
};

ActiveColor.propTypes = {
    selected: _react2.default.PropTypes.array.isRequired,
    deleteColor: _react2.default.PropTypes.func.isRequired
};

exports.default = ActiveColor;
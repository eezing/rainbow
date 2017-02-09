'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('/Users/ericzingeler/Desktop/rainbow/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/ericzingeler/Desktop/rainbow/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/ericzingeler/Desktop/rainbow/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comp = function Comp(_ref) {
    var children = _ref.children;
    return _react2.default.createElement('div', {
        'data-jsx': 1099348307
    }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
        'data-jsx': 1099348307
    }, 'Colors'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width, user-scalable = no', 'data-jsx': 1099348307
    }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes', 'data-jsx': 1099348307
    }), _react2.default.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent', 'data-jsx': 1099348307
    }), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', href: '/static/favicon.png', 'data-jsx': 1099348307
    }), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/static/icon.png', 'data-jsx': 1099348307
    })), children, _react2.default.createElement(_style2.default, {
        styleId: 1099348307,
        css: '\n            body {\n                font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n            }\n        '
    }));
};

Comp.propTypes = {
    children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element)
};

exports.default = Comp;
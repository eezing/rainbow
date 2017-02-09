
import React from 'react';

export default () => (
    <div>
        <a href="https://github.com/eezing/rainbow" target="_blank">github.com/eezing/rainbow</a>
        <style jsx>{`
            div {
                margin: 2rem 0;
                text-align: center;
            }
            a {
                font-family: monospace;
                text-decoration: none;
                color: #595959;
            }
            a:hover {
                color: #000;
            }
            `}</style>
    </div>
);

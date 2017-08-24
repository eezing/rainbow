import React from 'react';
import PropTypes from 'prop-types';

const PaletteHeader = ({ title, sourceHref }) => {
    return (
        <div>
            {sourceHref
                ? <a href={sourceHref} target="_blank">
                    {title}
                </a>
                : <span>
                    {title}
                </span>}
            <hr />
            <style jsx>{`
        div {
          margin-top: 24px;
        }
        a,
        span {
          text-decoration: none;
          margin-left: 2px;
          text-transform: capitalize;
          color: #373737;
          font-size: 0.90rem;
        }
        a:hover {
          text-decoration: underline;
          color: #000;
        }
        hr {
          margin-top: 2px;
        }
      `}</style>
        </div>
    );
};

PaletteHeader.propTypes = {
    title: PropTypes.string.isRequired,
    sourceHref: PropTypes.string
};

export default PaletteHeader;

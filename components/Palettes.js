
import React from 'react';
import ColorTable from './ColorTable';
import PaletteHeader from './PaletteHeader';

class Palettes extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        const hasSelectedA = nextProps.selected.length > 0;
        const hasSelectedB = this.props.selected.length > 0;
        return (hasSelectedA !== hasSelectedB || nextProps.palettes !== this.props.palettes);
    }

    render() {

        const { palettes, selected, selectColor } = this.props;

        return (
            <div className={selected.length ? 'list push-down' : 'list'}>
                { palettes.map((palette, index) => (
                    <div key={index}>
                        <PaletteHeader title={palette.id} sourceHref={palette.source} />
                        <ColorTable palette={palette.colors} onColorSelect={selectColor} />
                    </div>
                ))}
                <style jsx>{`
                    .list {
                        padding: 62px 12px 0 12px;
                    }
                    .push-down {
                        padding-top: 98px;
                    }
                `}</style>
            </div>
        );
    }
}

Palettes.propTypes = {
    palettes: React.PropTypes.array.isRequired,
    selected: React.PropTypes.array.isRequired,
    selectColor: React.PropTypes.func.isRequired
};

export default Palettes;

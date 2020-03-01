import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../business/actionCreator/actionCreator';
import PropTypes from 'prop-types';
import { footerFilterLinkList } from '../../business/constants';
import { List } from 'semantic-ui-react';
import { autobind } from 'core-decorators';

@connect(
    (state) => ({
        visibilityFilter: state.visibilityFilter
    }),
    (dispatch) => ({
        setVisibilityFilter: (visibilityFilter) => dispatch(setVisibilityFilter(visibilityFilter))
    })
)
@autobind
class FilterLinkSection extends React.Component {
    static propTypes = {
        visibilityFilter: PropTypes.string,
        setVisibilityFilter: PropTypes.func
    };

    render() {
        const filterFooterJSX = footerFilterLinkList
            .map((visibilityFilter, index) => (
                <li
                    key={`footer-filter-list-item-${index}`}
                    onClick={() => this._handleFilterFooterLinkClick(this.populateVisibilityFilter(visibilityFilter))}
                    className={
                        (this.populateVisibilityFilter(visibilityFilter) === this.props.visibilityFilter) ? "filter-link-selected" : "filter-link"}
                >
                    {visibilityFilter}
                </li>
            ));
        return (
            <ul className="filter-link-list">
                {filterFooterJSX}
            </ul>
        );
    }

    _handleFilterFooterLinkClick(visibilityFilter) {
        this.props.setVisibilityFilter(visibilityFilter);
    }

    populateVisibilityFilter(visibilityFilter) {
        return visibilityFilter
            .split(' ')
            .map(item => item.toUpperCase())
            .join('_');
    }
}

export default FilterLinkSection;
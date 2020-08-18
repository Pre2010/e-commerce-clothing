import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {selectIsCollectionFetching} from '../../../redux/shop/shop.selectors';
import WithSpinner from '../../with-spinner/with-spinner';
import OverviewCollection from './overview-collection';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

// compose helps to curry all of these functions together and make it more readable.
// compose works from right to left. so OverviewCollection with WithSpinner, then the output of that to connect
// equivalent to connect(mapStateToProps)(WithSpinner(OverviewCollection))
const OverviewCollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(OverviewCollection);

export default OverviewCollectionContainer;
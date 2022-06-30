import PropTypes from 'prop-types'

const List = ({ list }) => {

}

List.defaultProps = {
  list: [],
}

List.propTypes = {
  list: PropTypes.array(PropTypes.string),
}

export default List;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons'
import filters from './Filters'

const FilterButton = ({ filter, active, onClick }) => {
  const className = active ? 'icon-clicked' : 'icon-unclicked'

  if (filter.icon) {
    return (
      <div>
        
      <FontAwesomeIcon
        className={className}
        onClick={onClick}
        icon={filter.icon}
      />
      {filter.name}
      </div>
    )
  }

  return (
    <button className={className} onClick={onClick}>
      {filter.name}
    </button>
  )
}

const FilterButtons = ({ filters, activeFilters, onFilterChange }) => {
  return (
    <div className="DishesIcons">
      {filters.map((filter) => (
        <FilterButton
          key={filter.name}
          filter={filter}
          active={activeFilters[filter.name]}
          onClick={() => onFilterChange(filter.name)}
        />
      ))}
    </div>
  )
}
export default FilterButtons

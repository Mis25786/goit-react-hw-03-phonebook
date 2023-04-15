import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, cangeFilter }) => {
  return (
    <div className={css.filter}>
      <span className={css['filter-text']}>Find contacts by name</span>

      <input
        className={css.input}
        type="text"
        name="name"
        value={filter}
        onChange={cangeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  cangeFilter: PropTypes.func.isRequired,
};

export default Filter;

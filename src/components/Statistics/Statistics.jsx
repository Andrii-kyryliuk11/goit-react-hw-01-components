import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, data }) => {
  return (
    <section className={css.statistics}>
      
      { title  && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {data.map(item => (
          <li className={css.item} key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
}
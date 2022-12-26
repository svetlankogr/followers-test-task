import PropTypes from 'prop-types';
import css from './Section.module.css';
export const Section = ({ children }) => {
  return <section className={css.followers}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.element,
};

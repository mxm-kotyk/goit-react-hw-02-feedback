import PropTypes from 'prop-types';
import { MainWrapper, StatsWrapper } from './Statictics.styled';

export const Statictics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <MainWrapper>
      <StatsWrapper>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </StatsWrapper>
      <p>Total: {total()}</p>
      <p>Positive Feedback: {positivePercentage()}%</p>
    </MainWrapper>
  );
};

Statictics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

import PropTypes from 'prop-types';
import {
  MainWrapper,
  Title,
  ButtonsWrapper,
  Button,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <MainWrapper>
      <Title>Please leave your feedback</Title>
      <ButtonsWrapper>
        {Object.keys(options).map(reaction => {
          return (
            <Button
              type="button"
              key={reaction}
              onClick={onLeaveFeedback}
              className={reaction}
            ></Button>
          );
        })}
      </ButtonsWrapper>
    </MainWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  reaction: PropTypes.string,
};

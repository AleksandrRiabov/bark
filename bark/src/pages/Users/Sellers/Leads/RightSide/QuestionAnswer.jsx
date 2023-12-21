import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const QuestionAnswer = ({ question, answer }) => {
  return (
    <Box pb={2} pt={1}>
      <Typography variant="body1" color="text.secondary">
        {question}
      </Typography>
      <Typography variant="body1" color="text.dark">
        {answer}
      </Typography>
    </Box>
  );
};

QuestionAnswer.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default QuestionAnswer;

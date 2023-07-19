// Button.js
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
const Button = ({ disabled, eventHandler, title }) => {
	return (
		<>
			<StyledButton onClick={eventHandler} disabled={disabled}>
				{title}
			</StyledButton>
		</>
	);
};

export default Button;

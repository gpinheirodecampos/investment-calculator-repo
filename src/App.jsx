import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

  const isValid = userInput.duration >= 1;

	function handleChange(inputLabel, newValue) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputLabel]: +newValue,
			};
		});
	}

	return (
		<>
			<Header />
			<UserInput input={userInput} onChange={handleChange} />
      {isValid && <Results input={userInput} />}
      {!isValid && <p className="center">Please enter a duration value greater than zero.</p>}
		</>
	);
}

export default App;

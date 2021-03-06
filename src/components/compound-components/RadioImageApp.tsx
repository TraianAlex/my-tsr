import * as React from "react";
import Banner from "./Banner";
import RadioImageForm from "./RadioImageForm";
import DATA from "../../utils/data";

// import './styles.css';

function App() {
  const [value, setValue] = React.useState("");

  const onChange = (value: string): void => {
    setValue(value);
  };

  return (
    <div className="App container">
      <Banner
        title={"React Component Patterns"}
        subtitle={"Compound Components"}
      />
      <div>
        <h1 className="my-5">Parent Value: {value}</h1>
        {/* The parent component that handles the onChange events 
				and managing the state of the currently selected value. */}
        <RadioImageForm onStateChange={onChange}>
          {/* The child, sub-components. 
					Each sub-component is an radio input displayed as an image
					where the user is able to click an image to select a value. */}
          {DATA.map(
            ({ label, value, imgSrc }): React.ReactElement => (
              <RadioImageForm.RadioInput
                label={label}
                value={value}
                name={label}
                imgSrc={imgSrc}
                key={imgSrc}
              />
            )
          )}
        </RadioImageForm>
      </div>
    </div>
  );
}

export default App;

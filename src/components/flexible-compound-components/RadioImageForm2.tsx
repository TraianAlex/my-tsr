import * as React from "react";
import RadioImageFormWrapper from "./RadioImageFormWrapper";

interface Props {
  onStateChange?(e: string): void;
  defaultValue?: string;
}

interface State {
  currentValue: string;
  defaultValue?: string;
}

interface RadioInputProps {
  label: string;
  value: string;
  name: string;
  imgSrc: string;
}

interface SubmitButtonProps {
  onSubmit?(value: string): void;
}

interface ProviderState extends State {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

// Create a RadioImageFormContext with React.createContext
const RadioImageFormContext = React.createContext<ProviderState>({
  currentValue: "",
  defaultValue: undefined,
  onChange: () => {},
});
// Context object accepts a displayName string property.
// React DevTools uses this string to determine what to display
// for the context.
RadioImageFormContext.displayName = "RadioImageForm";

/**
 * @desc RadioImageForm uses flexible compound component pattern with React's Context API.
 * Flexible Compound Components allow to implicitly accept the internal state of our class
 * component regardless of where they're rendered within the level in the component tree.
 * In order to accomplish this we will use the React's Context API.
 * Use case for flexible compound components: When several components need to share state,
 * but the user does not need to know about it.
 * 
 *  1. RadioImageForm - the parent component that manages the entire state
 * 	2. RadioInput - Next, the user can start adding their radio inputs 
 * with the `RadioInput` compound component. A subset component of RadioImageForm. 
 * In the `RadioInput` component, we have abstracted the implementation details of the radio input element, 
 * where the parent component, RadioImageForm, deals with the onChange event actions and updating 
 * the currently checked radio input.
 * @example:
  <RadioImageForm onStateChange={onChange}>
		{DATA.map(
			({ label, value, name, imgSrc }): React.ReactElement => (
				<RadioImageForm.RadioInput
					label={label}
					value={value}
					name={label}
					imgSrc={imgSrc}
					key={imgSrc}
				/>
			),
		)}
	</RadioImageForm>
 * */

// RadioImageForm isn't a React.FC, because
// can't assign extra pros to React.FC
// so no RadioImageForm.SubmitButton = SubmitButton
// if want to use React.FC
// use
/*
export default Object.assign(RadioImageForm, {
  RadioInput,
  SubmitButton,
  CurrentValue,
})
*/
const RadioImageForm = ({
  children,
  defaultValue = "",
  onStateChange,
}: React.PropsWithChildren<Props>) => {
  const [state, setState] = React.useState<State>({
    currentValue: "",
    defaultValue,
  });

  // memoized so that providerState isn't recreated on each render
  const provState = React.useMemo(
    () => ({
      onChange: (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setState({
          currentValue: value,
        });
        onStateChange?.(value);
      },
      ...state,
    }),
    [state, onStateChange]
  );

  return (
    <RadioImageFormWrapper>
      <RadioImageFormContext.Provider value={provState}>
        {children}
      </RadioImageFormContext.Provider>
    </RadioImageFormWrapper>
  );
};

const RadioInput: React.FC<RadioInputProps> = ({
  label,
  value,
  name,
  imgSrc,
}) => {
  const { currentValue, onChange } = React.useContext(RadioImageFormContext);

  return (
    <label className="radio-button-group" key={value}>
      <input
        type="radio"
        name={name}
        value={value}
        aria-label={label}
        onChange={onChange}
        checked={currentValue === value}
        aria-checked={currentValue === value}
      />
      <img alt="" src={imgSrc} />
      <div className="overlay">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-check-circle"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
    </label>
  );
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit }) => {
  const { currentValue } = React.useContext(RadioImageFormContext);

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => onSubmit?.(currentValue)}
      disabled={!currentValue}
      aria-disabled={!currentValue}
    >
      Submit
    </button>
  );
};

const CurrentValue: React.FC = () => {
  const { currentValue } = React.useContext(RadioImageFormContext);

  return currentValue ? (
    <div className="alert current-value">
      <h1>Current Value: {currentValue}</h1>
    </div>
  ) : null;
};

RadioImageForm.RadioInput = RadioInput;
RadioImageForm.SubmitButton = SubmitButton;
RadioImageForm.CurrentValue = CurrentValue;

export default RadioImageForm;

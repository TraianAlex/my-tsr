import * as React from 'react';
import RadioImageFormWrapper from './RadioImageFormWrapper';

interface Props {
	onStateChange?(e: string): void;
	defaultValue?: string;
}

interface State {
	currentValue: string;
	defaultValue?: string;
	onChange(e: React.ChangeEvent<HTMLInputElement>): void;
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

// Create a RadioImageFormContext with React.createContext
const RadioImageFormContext = React.createContext({
	currentValue: '',
	defaultValue: '',
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
});
// Context object accepts a displayName string property.
// React DevTools uses this string to determine what to display
// for the context.
RadioImageFormContext.displayName = 'RadioImageForm';

/**
 * @name RadioImageForm
 * @author Alexi Taylor
 *
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
 * 
 * @props {(e: string): void;} [onStateChange] 
 * @props {string} [defaultValue]
 * 
 * @component RadioInput
 * @props {string} label
 * @props {string} value
 * @props {string} name
 * @props {string} imgSrc
 *
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
export class RadioImageForm extends React.Component<Props, State> {
	static Consumer = RadioImageFormContext.Consumer;

	/**
	 * The static keyword makes it a property of the class RadioImageForm, allowing
	 * the end user to reference them from the RadioImageForm class:
	 * e.g. <RadioImageForm.RadioInput />
	 * Since the RadioInput is a static property, it does not have access to the RadioImageForm instance.
	 * Hence you can not reference state or methods in RadioImageForm class.
	 * e.g. `this.onChange` will not work in the following example:
	 * static RadioInput = ({ onChange, //... }) => //... <input onChange={this.onChange} //...
	 */
	// Each of these compound components use the ToggleContext.Consumer
  // where it gets `currentValue` and `onChange` from the Consumer value.
	static RadioInput = ({ label, value, name, imgSrc }: RadioInputProps) => (
		<RadioImageForm.Consumer>
			{({ currentValue, onChange }) => (
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
			)}
		</RadioImageForm.Consumer>
	);

	static SubmitButton = ({ onSubmit }: SubmitButtonProps) => (
		<RadioImageForm.Consumer>
			{({ currentValue }) => (
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => {
						if(onSubmit) return onSubmit(currentValue)
					}}
					disabled={!currentValue}
					aria-disabled={!currentValue}
				>
					Submit
				</button>
			)}
		</RadioImageForm.Consumer>
	);

	static CurrentValue = () => (
		<RadioImageForm.Consumer>
			{({ currentValue }) => (
				<>
					{!!currentValue && (
						<div className="alert current-value">
							<h1>Current Value: {currentValue}</h1>
						</div>
					)}
				</>
			)}
		</RadioImageForm.Consumer>
	);

	onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value;
		this.setState(
			{
				currentValue: value,
			},
			() => {
				this.props.onStateChange && this.props.onStateChange(value);
			},
		);
	};

	// Because we'll be passing state into context value, we need to add the
  // onChange function to state.
	state = {
		currentValue: '',
		onChange: this.onChange,
		defaultValue: this.props.defaultValue || '',
	};

	render(): React.ReactElement {
		const { children } = this.props;
		// When ever the this value changes to something else it will re-render itself and all of its consumers.
    // React is constantly rendering so by passing an object to value prop it will re-render all of the consumers,
    // because the object is being reallocated on each render (creating a new object on each render).
    // This could be a performance problem.
    // e.g. NOT THIS: <RadioImageFormContext.Provider value={{ currentValue: this.state.currentValue, onChange: this.onChange }}>
    // Instead pass this.state
    // Exposing the currentValue state and onChange method as properties in the context value (the value prop)
		return (
			<RadioImageFormWrapper>
				<RadioImageFormContext.Provider value={this.state}>
					{children}
				</RadioImageFormContext.Provider>
			</RadioImageFormWrapper>
		);
	}
}

export default RadioImageForm;

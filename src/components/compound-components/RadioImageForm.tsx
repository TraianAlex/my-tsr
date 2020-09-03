import * as React from "react";
import RadioImageFormWrapper from "./RadioImageFormWrapper";

interface Props {
  onStateChange?(e: string): void;
  defaultValue?: string;
}

interface State {
  currentValue: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

interface RadioInputProps {
  label: string;
  value: string;
  name: string;
  imgSrc: string;
  key: string | number;
  currentValue?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

/**
 * @name RadioImageForm
 * @author Alexi Taylor
 *
 * @desc RadioImageForm uses compound component pattern. 
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

class RadioImageForm extends React.Component<Props, State> {
  /**
   * The static keyword makes it a property of the class RadioImageForm, allowing
   * the end user to reference them from the RadioImageForm class:
   * e.g. <RadioImageForm.RadioInput />
   * Since the RadioInput is a static property, it does not have access to the RadioImageForm instance.
   * Hence you can not reference state or methods in RadioImageForm class.
   * e.g. `this.onChange` will not work in the following example:
   * static RadioInput = ({ onChange, //... }) => //... <input onChange={this.onChange} //...
   */
  static RadioInput = ({
    currentValue,
    onChange,
    label,
    value,
    name,
    imgSrc,
    key,
  }: RadioInputProps): React.ReactElement => (
    <label className="radio-button-group" key={key}>
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

  onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    this.setState(
      {
        currentValue: value,
      },
      () => {
        this.props.onStateChange && this.props.onStateChange(value);
      }
    );
  };

  state = {
    currentValue: "",
    onChange: this.onChange,
    defaultValue: this.props.defaultValue || "",
  };

  render(): React.ReactElement {
    /**
     *
     * We're trying to let the consumer of our component to render the components they want within the
     * RadioImageForm component. But the RadioInput components will need access to the internal state,
     * the internal `onChange` function and as well the user's props for them to work properly. But how do
     * we pass this data to the subset component? This is where React.Children.map and React.cloneElement
     * comes into play.
     *
     * To do this, we can use:
     * 1. React.Children.map: https://reactjs.org/docs/react-api.html#reactchildrenmap
     * 2. React.cloneElement: https://reactjs.org/docs/react-api.html#cloneelement
     */
    const { currentValue, onChange, defaultValue } = this.state;
    // If only one child exist then this.props.children will contain an element and not an array
    // so it is important to use React.Children.map() here.
    return (
      <RadioImageFormWrapper>
        <form>
          {
            // So here we can take all this.props.children and make a copy of them that has those props.
            React.Children.map(
              this.props.children as React.ReactElement,
              (child: React.ReactElement) =>
                // Clone and return a new React element using element as the starting point.
                // The resulting element will have the original element’s props with the
                // new props merged in shallowly. New children will replace existing children.
                React.cloneElement(child, {
                  currentValue,
                  onChange,
                  defaultValue,
                })
            )
          }
        </form>
      </RadioImageFormWrapper>
    );
  }
}

export default RadioImageForm;

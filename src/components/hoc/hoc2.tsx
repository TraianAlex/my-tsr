import { ComponentType, useEffect } from 'react';
import { ListItem, SimpleButton } from './buttons';

type Base = { onClick: () => void };

const withLoggingOnClick =
  <TProps extends Base>(Component: ComponentType<TProps>) =>
  (props: TProps) => {
    const onClick = () => {
      console.log('Log on click something');
      props.onClick();
    };

    return <Component {...props} onClick={onClick} />;
  };

const ButtonWithLoggingOnClick = withLoggingOnClick(SimpleButton);
const ListItemWithLoggingOnClick = withLoggingOnClick(ListItem);

const withLoggingOnClickWithParams =
  <TProps extends Base>(
    Component: ComponentType<TProps>,
    // adding some params as a second argument to the function
    params: { text: string },
  ) =>
  (props: TProps) => {
    const onClick = () => {
      // accessing params that we passed as an argument here
      // everything else stays the same
      console.log('Log on click: ', params.text);
      props.onClick();
    };

    return <Component {...props} onClick={onClick} />;
  };

const withLoggingOnClickWithProps =
  <TProps extends Base>(Component: ComponentType<TProps>) =>
  (props: TProps & { logText: string }) => {
    const onClick = () => {
      console.log('Log on click: ', props.logText);
      props.onClick();
    };

    return <Component {...props} onClick={onClick} />;
  };

const ButtonWithLoggingOnClickWithParams = withLoggingOnClickWithParams(
  SimpleButton,
  { text: 'button component' },
);
const ButtonWithLoggingOnClickWithProps =
  withLoggingOnClickWithProps(SimpleButton);

const withLoggingOnMount =
  <TProps extends Base>(Component: ComponentType<TProps>) =>
  (props: TProps) => {
    useEffect(() => {
      console.log('log on mount');
    }, []);

    return <Component {...props} />;
  };

const withLoggingOnMountWithParams =
  <TProps extends Base>(
    Component: ComponentType<TProps>,
    params: { text: string },
  ) =>
  (props: TProps) => {
    useEffect(() => {
      console.log('log on mount: ', params.text);
    }, []);

    return <Component {...props} />;
  };

const withLoggingOnMountWithProps =
  <TProps extends Base>(Component: ComponentType<TProps>) =>
  (props: TProps & { logText: string }) => {
    useEffect(() => {
      console.log('log on mount: ', props.logText);
    }, [props.logText]);

    return <Component {...props} />;
  };

const ButtonWithLoggingOnMount = withLoggingOnMount(SimpleButton);
const ButtonWithLoggingOnMountWithParams = withLoggingOnMountWithParams(
  SimpleButton,
  { text: 'button component' },
);
const ButtonWithLoggingOnMountWithProps =
  withLoggingOnMountWithProps(SimpleButton);
export const SuperButton = withLoggingOnClick(
  withLoggingOnClickWithParams(
    withLoggingOnClickWithProps(
      withLoggingOnMount(
        withLoggingOnMountWithParams(
          withLoggingOnMountWithProps(SimpleButton),
          { text: 'button component' },
        ),
      ),
    ),
    { text: 'button component' },
  ),
);

export const Hoc2 = () => {
  const onClickCallback = () => console.log('on click callback');

  return (
    <div>
      <ButtonWithLoggingOnClick onClick={() => console.log('log click')}>
        [Button with log]
      </ButtonWithLoggingOnClick>
      <ListItemWithLoggingOnClick onClick={() => console.log('log click')}>
        [List with log]
      </ListItemWithLoggingOnClick>
      <h4>Buttons logging on click examples</h4>
      <ButtonWithLoggingOnClick onClick={onClickCallback}>
        With logging on click
      </ButtonWithLoggingOnClick>
      <ButtonWithLoggingOnClickWithParams onClick={onClickCallback}>
        With logging on click with params
      </ButtonWithLoggingOnClickWithParams>
      <ButtonWithLoggingOnClickWithProps
        onClick={onClickCallback}
        logText="this is Page button"
      >
        With logging on click with props
      </ButtonWithLoggingOnClickWithProps>
      <h4>Buttons logging on mount examples</h4>
      <ButtonWithLoggingOnMount onClick={onClickCallback}>
        With logging on mount
      </ButtonWithLoggingOnMount>
      <ButtonWithLoggingOnMountWithParams onClick={onClickCallback}>
        With logging on mount with params
      </ButtonWithLoggingOnMountWithParams>
      <ButtonWithLoggingOnMountWithProps
        onClick={onClickCallback}
        logText="this is Page button"
      >
        With logging on mount with props
      </ButtonWithLoggingOnMountWithProps>

      <h4>Buttons with EVERYTHING</h4>
      <SuperButton logText="everything button" onClick={onClickCallback}>
        With EVERYTHING
      </SuperButton>
    </div>
  );
};

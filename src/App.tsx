import * as React from "react";
import "./styles.css";
import { useMemo } from "react";

const App = () => {
  const [usernameErrorMessage, setUsernameErrorMessage] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState(false);
  const [userName, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const debounce = <T, K>(callback: (args: T) => K, duration: number) => {
    let timer: string | number | NodeJS.Timeout | undefined;
    return (args: T): K | void => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(args), duration);
    };
  };

  const debouncedValidateUsername = useMemo(
    () =>
      debounce(
        (value: string): void =>
          setUsernameErrorMessage(
            Boolean(value && !value.match(/^[a-zA-Z0-9_]+$/))
          ),
        300
      ),
    []
  );

  const validateUsername = (value: string): void => {
    const parsedValue = value.trim();
    setUsername(parsedValue);
    debouncedValidateUsername(parsedValue.trim());
  };

  const debounceValidatePassword = useMemo(
    () =>
      debounce(
        (value: string) =>
          setPasswordErrorMessage(
            Boolean(
              value &&
                !value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
            )
          ),
        500
      ),
    []
  );

  const validatePassword = (value: string): void => {
    setPassword(value);
    debounceValidatePassword(value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !usernameErrorMessage &&
      !passwordErrorMessage &&
      userName &&
      password
    ) {
      console.log({ userName, password });
    } else {
      console.log("error");
    }
  };

  return (
    <div className="form__wrapper">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={userName}
            onChange={(e) => validateUsername(e.target.value.trimEnd())}
          />

          <div
            className={`form__error-message ${
              usernameErrorMessage ? "" : "hidden"
            }`}
          >
            The username must only contain letter, numbers and underscores
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => validatePassword(e.target.value.trimEnd())}
          />

          <div
            className={`form__error-message ${
              passwordErrorMessage ? "" : "hidden"
            }`}
          >
            The password must be 8 characters long, with at least 1 uppercase
            letter, 1 lowercase and one number
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

export const TOGGLE_REDIRECT_YOUR_NAME = 'TOGGLE_REDIRECT_YOUR_NAME';
export const UPDATE_YOUR_NAME = 'UPDATE_YOUR_NAME';
export const TOGGLE_YOUR_NAME_ERROR = 'TOGGLE_YOUR_NAME_ERROR';
export const TOGGLE_REDIRECT_RADIO = 'TOGGLE_REDIRECT_RADIO';
export const UPDATE_RADIO = 'UPDATE_RADIO';
export const TOGGLE_RADIO_ERROR = 'TOGGLE_RADIO_ERROR';
export const TOGGLE_CREATE_ACCOUNT_CHOOSE_PASSWORD = 'TOGGLE_CREATE_ACCOUNT_CHOOSE_PASSWORD';

const initialState = {
  radioValue: '',
  radioError: false,
  radioRedirect: false,
  yourNameValue: '',
  yourNameError: false,
  yourNameRedirect: false,
  createAccountChoosePasswordFilled: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_YOUR_NAME:
      return {
        ...state,
        yourNameValue: action.payload,
      };
    case TOGGLE_YOUR_NAME_ERROR:
      return {
        ...state,
        yourNameError: !state.yourNameError,
      };
    case UPDATE_RADIO:
      return {
        ...state,
        radioValue: action.payload,
      };
    case TOGGLE_RADIO_ERROR:
      return {
        ...state,
        radioError: !state.radioError,
      };
    case TOGGLE_CREATE_ACCOUNT_CHOOSE_PASSWORD:
      return {
        ...state,
        createAccountChoosePasswordFilled: !state.createAccountChoosePasswordFilled,
      };
    default:
      return state;
  }
};

export const updateYourName = () => (dispatch) => {
  dispatch({ type: UPDATE_YOUR_NAME });
};

export const toggleYourNameError = () => (dispatch) => {
  dispatch({ type: TOGGLE_YOUR_NAME_ERROR });
};

export const updateRadio = () => (dispatch) => {
  dispatch({ type: UPDATE_RADIO });
};

export const toggleRadioError = () => (dispatch) => {
  dispatch({ type: TOGGLE_RADIO_ERROR });
};

export const toggleCreateAccountChoosePassword = () => (dispatch) => {
  dispatch({ type: TOGGLE_CREATE_ACCOUNT_CHOOSE_PASSWORD });
};

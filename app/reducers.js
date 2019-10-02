export const TOGGLE_REDIRECT_YOUR_NAME = 'TOGGLE_REDIRECT_YOUR_NAME';
export const UPDATE_YOUR_NAME = 'UPDATE_YOUR_NAME';
export const TOGGLE_YOUR_NAME_ERROR = 'TOGGLE_YOUR_NAME_ERROR';
export const TOGGLE_REDIRECT_RADIO = 'TOGGLE_REDIRECT_RADIO';
export const UPDATE_RADIO = 'UPDATE_RADIO';
export const UPDATE_REVIEW_RADIO = 'UPDATE_REVIEW_RADIO';
export const TOGGLE_RADIO_ERROR = 'TOGGLE_RADIO_ERROR';
export const TOGGLE_CREATE_ACCOUNT_CHOOSE_PASSWORD = 'TOGGLE_CREATE_ACCOUNT_CHOOSE_PASSWORD';
export const TOGGLE_CREATE_ACCOUNT_COMPANY_DETAILS_FOUND = 'TOGGLE_CREATE_ACCOUNT_COMPANY_DETAILS_FOUND';
export const UPDATE_CREATE_ACCOUNT_COMPANY_DETAILS = 'UPDATE_CREATE_ACCOUNT_COMPANY_DETAILS';
export const UPDATE_CREATE_ACCOUNT_YOUR_DETAILS_NAME = 'UPDATE_CREATE_ACCOUNT_YOUR_DETAILS_NAME';
export const UPDATE_CREATE_ACCOUNT_YOUR_DETAILS_NUMBER = 'UPDATE_CREATE_ACCOUNT_YOUR_DETAILS_NUMBER';
export const UPDATE_SIGN_UP_EMAIL_VALUE = 'UPDATE_SIGN_UP_EMAIL_VALUE';
export const UPDATE_CONTACT_DETAILS_RADIO = 'UPDATE_CONTACT_DETAILS_RADIO';
export const UPDATE_EASTINGS_VALUE = 'UPDATE_EASTINGS_VALUE';
export const UPDATE_NORTHINGS_VALUE = 'UPDATE_NORTHINGS_VALUE';
export const TOGGLE_LOCATION_INPUT = 'TOGGLE_LOCATION_INPUT';
export const TOGGLE_PRE_APP_SCREENING_SCROLL = 'TOGGLE_PRE_APP_SCREENING_SCROLL';
export const TOGGLE_PRE_APP_REVIEW_SCROLL = 'TOGGLE_PRE_APP_REVIEW_SCROLL';
export const TOGGLE_LOCATION_ROW = 'TOGGLE_LOCATION_ROW';

const initialState = {
  radioValue: '',
  radioError: false,
  radioRedirect: false,
  radioReviewValue: null,
  yourNameValue: '',
  yourNameError: false,
  yourNameRedirect: false,
  signUpEmailValue: '',
  createAccountChoosePasswordFilled: false,
  createAccountCompanyDetailsFound: false,
  createAccountCompanyDetailsValue: '',
  createAccountYourDetailsNameValue: '',
  createAccountYourDetailsNumberValue: '',
  contactDetailsValue: 'Oliver Allen',
  siteNameValue: 'Loch Mhòrair Salmon Farm',
  waterBobyNameValue: 'Loch Mhòrair',
  eastingValue: '',
  northingValue: '',
  showLocationInput: false,
  showLocationRow: false,
  weightValue: '186,786',
  fishValue: 'Salmon',
  feedingRateValue: '7',
  showPreAppScreeningScroll: false,
  showPreAppReviewScroll: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REVIEW_RADIO:
      return {
        ...state,
        radioReviewValue: action.payload,
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
    case UPDATE_SIGN_UP_EMAIL_VALUE:
      return {
        ...state,
        signUpEmailValue: action.payload,
      };
    case TOGGLE_CREATE_ACCOUNT_CHOOSE_PASSWORD:
      return {
        ...state,
        createAccountChoosePasswordFilled: !state.createAccountChoosePasswordFilled,
      };
    case TOGGLE_CREATE_ACCOUNT_COMPANY_DETAILS_FOUND:
      return {
        ...state,
        createAccountCompanyDetailsFound: !state.createAccountCompanyDetailsFound,
      };
    case UPDATE_CREATE_ACCOUNT_COMPANY_DETAILS:
      return {
        ...state,
        createAccountCompanyDetailsValue: action.payload,
      };
    case UPDATE_CREATE_ACCOUNT_YOUR_DETAILS_NAME:
      return {
        ...state,
        createAccountYourDetailsNameValue: action.payload,
      };
    case UPDATE_CREATE_ACCOUNT_YOUR_DETAILS_NUMBER:
      return {
        ...state,
        createAccountYourDetailsNumberValue: action.payload,
      };
    case UPDATE_CONTACT_DETAILS_RADIO:
      return {
        ...state,
        contactDetailsValue: action.payload,
      };
    case UPDATE_EASTINGS_VALUE:
      return {
        ...state,
        eastingValue: action.payload,
      };
    case UPDATE_NORTHINGS_VALUE:
      return {
        ...state,
        northingValue: action.payload,
      };
    case TOGGLE_LOCATION_INPUT:
      return {
        ...state,
        showLocationInput: !state.showLocationInput,
      };
    case TOGGLE_LOCATION_ROW:
      return {
        ...state,
        showLocationRow: !state.showLocationRow,
      };
    case TOGGLE_PRE_APP_SCREENING_SCROLL:
      return {
        ...state,
        showPreAppScreeningScroll: !state.showPreAppScreeningScroll,
      };
    case TOGGLE_PRE_APP_REVIEW_SCROLL:
      return {
        ...state,
        showPreAppReviewScroll: !state.showPreAppReviewScroll,
      };
    default:
      return state;
  }
};

export const updateSignUpEmailValue = () => (dispatch) => {
  dispatch({ type: UPDATE_SIGN_UP_EMAIL_VALUE });
};

export const updateRadio = () => (dispatch) => {
  dispatch({ type: UPDATE_RADIO });
};

export const updateReviewRadio = () => (dispatch) => {
  dispatch({ type: UPDATE_REVIEW_RADIO });
};

export const toggleRadioError = () => (dispatch) => {
  dispatch({ type: TOGGLE_RADIO_ERROR });
};

export const toggleCreateAccountChoosePassword = () => (dispatch) => {
  dispatch({ type: TOGGLE_CREATE_ACCOUNT_CHOOSE_PASSWORD });
};

export const updateCreateAccountCompanyDetails = () => (dispatch) => {
  dispatch({ type: UPDATE_CREATE_ACCOUNT_COMPANY_DETAILS });
};

export const updateCreateAccountYourDetailsName = () => (dispatch) => {
  dispatch({ type: UPDATE_CREATE_ACCOUNT_YOUR_DETAILS_NAME });
};

export const updateCreateAccountYourDetailsNumber = () => (dispatch) => {
  dispatch({ type: UPDATE_CREATE_ACCOUNT_YOUR_DETAILS_NUMBER });
};

export const updateContactDetailsRadio = () => (dispatch) => {
  dispatch({ type: UPDATE_CONTACT_DETAILS_RADIO });
};

export const toggleLocationInput = () => (dispatch) => {
  dispatch({ type: TOGGLE_LOCATION_INPUT });
};

export const toggleLocationRow = () => (dispatch) => {
  dispatch({ type: TOGGLE_LOCATION_ROW });
};

export const togglePreAppScreeningScroll = () => (dispatch) => {
  dispatch({ type: TOGGLE_PRE_APP_SCREENING_SCROLL });
};

export const togglePreAppReviewScroll = () => (dispatch) => {
  dispatch({ type: TOGGLE_PRE_APP_REVIEW_SCROLL });
};

export const updateEastingsValue = () => (dispatch) => {
  dispatch({ type: UPDATE_EASTINGS_VALUE });
};

export const updateNorthingsValue = () => (dispatch) => {
  dispatch({ type: UPDATE_NORTHINGS_VALUE });
};

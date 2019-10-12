/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-confusing-arrow */
export const TOGGLE_REDIRECT_YOUR_NAME = 'TOGGLE_REDIRECT_YOUR_NAME';
export const UPDATE_YOUR_NAME = 'UPDATE_YOUR_NAME';
export const TOGGLE_YOUR_NAME_ERROR = 'TOGGLE_YOUR_NAME_ERROR';
export const TOGGLE_REDIRECT_RADIO = 'TOGGLE_REDIRECT_RADIO';
export const UPDATE_RADIO = 'UPDATE_RADIO';
export const UPDATE_REVIEW_RADIO = 'UPDATE_REVIEW_RADIO';
export const UPDATE_SCREENING_RADIO = 'UPDATE_SCREENING_RADIO';
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
export const UPDATE_PRE_APP_FORM_SITE_NAME = 'UPDATE_PRE_APP_FORM_SITE_NAME';
export const UPDATE_PRE_APP_FORM_WATER_BODY_NAME = 'UPDATE_PRE_APP_FORM_WATER_BODY_NAME';
export const UPDATE_PRE_APP_FORM_FISH_VALUE_NAME = 'UPDATE_PRE_APP_FORM_FISH_VALUE_NAME';
export const UPDATE_PRE_APP_FORM_WEIGHT_VALUE = 'UPDATE_PRE_APP_FORM_WEIGHT_VALUE';
export const UPDATE_PRE_APP_FORM_FEEDING_RATE_VALUE = 'UPDATE_PRE_APP_FORM_FEEDING_RATE_VALUE';
export const TOGGLE_AZAMETHIPHOS_CHECKED = 'TOGGLE_AZAMETHIPHOS_CHECKED';
export const TOGGLE_CYPERMETHRIN_CHECKED = 'TOGGLE_CYPERMETHRIN_CHECKED';
export const TOGGLE_DELTAMETHRIN_CHECKED = 'TOGGLE_DELTAMETHRIN_CHECKED';
export const TOGGLE_EMAMECTIN_BENZOATE_CHECKED = 'TOGGLE_EMAMECTIN_BENZOATE_CHECKED';
export const TOGGLE_ADD_FILES_ACCORDION_ONE = 'TOGGLE_ADD_FILES_ACCORDION_ONE';
export const TOGGLE_ADD_FILES_ACCORDION_TWO = 'TOGGLE_ADD_FILES_ACCORDION_TWO';
export const UPDATE_DATA_TYPE_VALUE = 'UPDATE_DATA_TYPE_VALUE';
export const START_ADD_FILES_UPLOADING = 'START_ADD_FILES_UPLOADING';
export const START_ADD_FILE_UPLOAD_VALUES = 'START_ADD_FILE_UPLOAD_VALUES';
export const TOGGLE_ADD_FILES_UPLOADING = 'TOGGLE_ADD_FILES_UPLOADING';
export const UPDATE_ADD_FILES_UPLOAD_PROGRESS_VALUE = 'UPDATE_ADD_FILES_UPLOAD_PROGRESS_VALUE';
export const START_ADD_FILE_UPLOADING = 'START_ADD_FILE_UPLOADING';
export const STOP_ADD_FILE_UPLOADING = 'STOP_ADD_FILE_UPLOADING';
export const TOGGLE_FILE_SUBMISSION = 'TOGGLE_FILE_SUBMISSION';
export const PERMITS_FETCH_DATA = 'PERMITS_FETCH_DATA';
export const PERMITS_FETCH_REQUESTING = 'PERMITS_FETCH_REQUESTING';
export const PERMITS_FETCH_INVALID = 'PERMITS_FETCH_INVALID';
export const PERMITS_FETCH_SUCCESS = 'PERMITS_FETCH_SUCCESS';
export const PERMITS_FETCH_FAILED = 'PERMITS_FETCH_FAILED';
export const PERMIT_FETCH_DATA = 'PERMIT_FETCH_DATA';
export const PERMIT_FETCH_REQUESTING = 'PERMIT_FETCH_REQUESTING';
export const PERMIT_FETCH_INVALID = 'PERMIT_FETCH_INVALID';
export const PERMIT_FETCH_SUCCESS = 'PERMIT_FETCH_SUCCESS';
export const PERMIT_FETCH_FAILED = 'PERMIT_FETCH_FAILED';

let easting = 182980;
let northing = 790973;

const initialState = {
  radioValue: '',
  radioError: false,
  radioRedirect: false,
  radioReviewValue: null,
  radioScreeningValue: null,
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
  waterBodyNameValue: 'Loch Mhòrair',
  eastingValue: '',
  northingValue: '',
  showLocationInput: false,
  showLocationRow: false,
  weightValue: '186,786',
  fishValue: 'Salmon',
  feedingRateValue: '7',
  showPreAppScreeningScroll: false,
  showPreAppReviewScroll: false,
  azamethiphosChecked: true,
  cypermethrinChecked: true,
  deltamethrinChecked: true,
  emamectinBenzoateChecked: true,
  showAddFilesAccordionOne: false,
  showAddFilesAccordionTwo: true,
  permits: {
    readyStatus: PERMITS_FETCH_INVALID,
    data: [],
  },
  permit: {
    readyStatus: PERMIT_FETCH_INVALID,
    license: {},
    contacts: [],
    conditions: [],
    locations: [],
  },
  locationArray: [],
  files: [],
  filesUploading: 0,
  showAddFilesUploading: false,
  dataTypeValue: null,
  fileUploadComplete: false,
  filesSubmitted: false,
  uploadFileName: '',
  uploadFileSize: 0,
};

// fake some locations

let x = 0;
do {
  initialState.locationArray.push({
    pen: x + 1,
    easting: easting += x * 2,
    northing: northing += x * 3,
  });
  x += 1;
} while (x < 10);


export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REVIEW_RADIO:
      return {
        ...state,
        radioReviewValue: action.payload,
      };
    case UPDATE_SCREENING_RADIO:
      return {
        ...state,
        radioScreeningValue: action.payload,
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
    case UPDATE_PRE_APP_FORM_SITE_NAME:
      return {
        ...state,
        siteNameValue: action.payload,
      };
    case UPDATE_PRE_APP_FORM_WATER_BODY_NAME:
      return {
        ...state,
        waterBodyNameValue: action.payload,
      };
    case UPDATE_PRE_APP_FORM_FISH_VALUE_NAME:
      return {
        ...state,
        fishValue: action.payload,
      };
    case UPDATE_PRE_APP_FORM_WEIGHT_VALUE:
      return {
        ...state,
        weightValue: action.payload,
      };
    case UPDATE_PRE_APP_FORM_FEEDING_RATE_VALUE:
      return {
        ...state,
        feedingRateValue: action.payload,
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
    case TOGGLE_AZAMETHIPHOS_CHECKED:
      return {
        ...state,
        azamethiphosChecked: !state.azamethiphosChecked,
      };
    case TOGGLE_CYPERMETHRIN_CHECKED:
      return {
        ...state,
        cypermethrinChecked: !state.cypermethrinChecked,
      };
    case TOGGLE_DELTAMETHRIN_CHECKED:
      return {
        ...state,
        deltamethrinChecked: !state.deltamethrinChecked,
      };
    case TOGGLE_EMAMECTIN_BENZOATE_CHECKED:
      return {
        ...state,
        emamectinBenzoateChecked: !state.emamectinBenzoateChecked,
      };
    case TOGGLE_ADD_FILES_ACCORDION_ONE:
      return {
        ...state,
        showAddFilesAccordionOne: !state.showAddFilesAccordionOne,
      };
    case TOGGLE_ADD_FILES_ACCORDION_TWO:
      return {
        ...state,
        showAddFilesAccordionTwo: !state.showAddFilesAccordionTwo,
      };
    case UPDATE_DATA_TYPE_VALUE:
      return {
        ...state,
        dataTypeValue: action.payload,
      };
    case TOGGLE_ADD_FILES_UPLOADING:
      return {
        ...state,
        showAddFilesUploading: !state.showAddFilesUploading,
      };
    case START_ADD_FILES_UPLOADING:
      return {
        ...state,
        showAddFilesUploading: true,
      };
    case TOGGLE_FILE_SUBMISSION:
      return {
        ...state,
        filesSubmitted: !state.filesSubmitted,
      };
    case UPDATE_ADD_FILES_UPLOAD_PROGRESS_VALUE:
      return {
        ...state,
        files: state.files.map((file) => file.key === action.payload.key ? {
          key: action.payload.key,
          progress: action.payload.progress,
          size: action.payload.size,
          name: action.payload.name,
        } : file),
      };
    case START_ADD_FILE_UPLOADING:
      return {
        ...state,
        filesUploading: state.filesUploading + 1,
      };
    case START_ADD_FILE_UPLOAD_VALUES:
      return {
        ...state,
        files: [
          ...state.files,
          action.payload,
        ],
      };
    case STOP_ADD_FILE_UPLOADING:
      return {
        ...state,
        filesUploading: state.filesUploading - 1,
      };
    case PERMITS_FETCH_DATA:
      return {
        ...state,
        permits: {
          readyStatus: action.readyStatus,
          data: action.payload,
        },
      };
    case PERMIT_FETCH_DATA:
      return {
        ...state,
        permit: {
          readyStatus: action.readyStatus,
          license: action.license,
          contacts: action.contacts,
          conditions: action.conditions,
          locations: action.locations,
        },
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

export const updateScreeningRadio = () => (dispatch) => {
  dispatch({ type: UPDATE_SCREENING_RADIO });
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

export const updatePreAppFormSiteName = () => (dispatch) => {
  dispatch({ type: UPDATE_PRE_APP_FORM_SITE_NAME });
};

export const updatePreAppFormWaterBodyName = () => (dispatch) => {
  dispatch({ type: UPDATE_PRE_APP_FORM_WATER_BODY_NAME });
};

export const updatePreAppFormFishValueName = () => (dispatch) => {
  dispatch({ type: UPDATE_PRE_APP_FORM_FISH_VALUE_NAME });
};

export const updatePreAppFormWeightValue = () => (dispatch) => {
  dispatch({ type: UPDATE_PRE_APP_FORM_WEIGHT_VALUE });
};

export const updatePreAppFormFeedingRateValue = () => (dispatch) => {
  dispatch({ type: UPDATE_PRE_APP_FORM_FEEDING_RATE_VALUE });
};

export const updateDataTypeValue = () => (dispatch) => {
  dispatch({ type: UPDATE_DATA_TYPE_VALUE });
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

export const toggleAzamethiphosChecked = () => (dispatch) => {
  dispatch({ type: TOGGLE_AZAMETHIPHOS_CHECKED });
};

export const toggleCypermethrinChecked = () => (dispatch) => {
  dispatch({ type: TOGGLE_CYPERMETHRIN_CHECKED });
};

export const toggleDeltamethrinChecked = () => (dispatch) => {
  dispatch({ type: TOGGLE_DELTAMETHRIN_CHECKED });
};

export const toggleEmamectinBenzoateChecked = () => (dispatch) => {
  dispatch({ type: TOGGLE_EMAMECTIN_BENZOATE_CHECKED });
};

export const updateEastingsValue = () => (dispatch) => {
  dispatch({ type: UPDATE_EASTINGS_VALUE });
};

export const updateNorthingsValue = () => (dispatch) => {
  dispatch({ type: UPDATE_NORTHINGS_VALUE });
};

export const toggleAddFilesAccordionOne = () => (dispatch) => {
  dispatch({ type: TOGGLE_ADD_FILES_ACCORDION_ONE });
};

export const toggleAddFilesAccordion = () => (dispatch) => {
  dispatch({ type: TOGGLE_ADD_FILES_ACCORDION_TWO });
};

export const toggleAddFilesUploading = () => (dispatch) => {
  dispatch({ type: TOGGLE_ADD_FILES_UPLOADING });
};

export const startAddFilesUploading = () => (dispatch) => {
  dispatch({ type: START_ADD_FILES_UPLOADING });
};

export const startAddFileUploadValues = () => (dispatch) => {
  dispatch({ type: START_ADD_FILE_UPLOAD_VALUES });
};

export const toggleFileSubmission = () => (dispatch) => {
  dispatch({ type: TOGGLE_FILE_SUBMISSION });
};

export const startAddFileUploading = () => (dispatch) => {
  dispatch({ type: START_ADD_FILE_UPLOADING });
};

export const stopAddFileUploading = () => (dispatch) => {
  dispatch({ type: STOP_ADD_FILE_UPLOADING });
};

export const updateAddFilesUploadProgressValue = () => (dispatch) => {
  dispatch({ type: UPDATE_ADD_FILES_UPLOAD_PROGRESS_VALUE });
};

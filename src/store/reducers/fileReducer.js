const initialState = {
    loading: false,
    error: null,
    uploadedFile: null,
  };
  
  const fileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPLOAD_FILE_REQUEST':
      case 'DOWNLOAD_FILE_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'UPLOAD_FILE_SUCCESS':
        return {
          ...state,
          loading: false,
          uploadedFile: action.payload,
        };
      case 'DOWNLOAD_FILE_SUCCESS':
        return {
          ...state,
          loading: false,
        };
      case 'UPLOAD_FILE_FAILURE':
      case 'DOWNLOAD_FILE_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default fileReducer;
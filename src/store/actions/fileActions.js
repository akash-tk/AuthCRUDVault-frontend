import axios from 'axios';

export const uploadFile = (file) => async (dispatch) => {
  dispatch({ type: 'UPLOAD_FILE_REQUEST' });
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post('http://localhost:3000/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({ type: 'UPLOAD_FILE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPLOAD_FILE_FAILURE', payload: error.response?.data?.message || error.message });
  }
};

export const downloadFile = (filename) => async (dispatch) => {
  dispatch({ type: 'DOWNLOAD_FILE_REQUEST' });
  try {
    const response = await axios.get(`http://localhost:3000/api/download/${filename}`, {
      responseType: 'blob',
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    dispatch({ type: 'DOWNLOAD_FILE_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'DOWNLOAD_FILE_FAILURE', payload: error.response?.data?.message || error.message });
  }
};
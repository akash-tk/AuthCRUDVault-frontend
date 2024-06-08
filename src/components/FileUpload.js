import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from '../store/actions/fileActions';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const { loading, error, uploadedFile } = useSelector((state) => state.file);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      dispatch(uploadFile(file));
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" disabled={loading}>Upload</button>
      </form>
      {error && <p>Error: {error}</p>}
      {uploadedFile && <p>File uploaded successfully: {uploadedFile.file.filename}</p>}
    </div>
  );
};

export default FileUpload;
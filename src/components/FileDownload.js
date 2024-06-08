import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { downloadFile } from '../store/actions/fileActions';

const FileDownload = () => {
  const [filename, setFilename] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.file);

  const handleDownload = () => {
    if (filename) {
      dispatch(downloadFile(filename));
    }
  };

  return (
    <div>
      <h2>File Download</h2>
      <input
        type="text"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
        placeholder="Enter filename"
      />
      <button onClick={handleDownload} disabled={loading}>Download</button>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default FileDownload;
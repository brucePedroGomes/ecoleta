import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './styles.css';

export default function Dropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(onDrop);
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p> Drop the files here</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}

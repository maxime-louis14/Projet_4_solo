import * as React from 'react';
import { useDropzone } from "react-dropzone";

type Props = {
  onDrop: (acceptedFiles: File[], fileRejections: FileRejection[]) => void;
  accept : any
};

const DragdropComponent: React.FC<Props> = ({ onDrop, accept }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop, accept,
  });

  return (
    <div className="dropzone-div" {...getRootProps()}>
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content">Release to drop the files here</p>
        ) : (
          <p className="dropzone-content">
            Drag 'n' drop some files here, or click to select files
          </p>
        )}
      </div>
    </div>
  );
};

export default DragdropComponent;

import React, { useEffect, useState } from "react";
import path from "path";
import firebase from "../../../_firebase";
import Folder from "./Folder";
import File from "./File";
import FileUpload from "../FileUpload";

function FileSystem(props) {
  const [currentPath, setCurrentPath] = useState(null);
  const [folders, setFolders] = useState(null);
  const [files, setFiles] = useState(null);

  useEffect(() => {
    if (currentPath == null) {
      setCurrentPath(props.path ?? "");
    }

    firebase.storage.listAll(currentPath).then((result) => {
      setFiles(result.items);
      setFolders(result.prefixes);
    });
  }, [currentPath]);

  const changeToParent = () => {
    setCurrentPath(currentPath.substring(0, currentPath.lastIndexOf(path.sep)));
  };

  const openFolder = (name) => {
    if (props.onSelectFolder) {
      props.onSelectFolder();
    } else {
      setCurrentPath(currentPath + path.sep + name);
    }
  };

  const selectFile = (file) => {
    if (props.onSelectFile) {
      props.onSelectFile(file);
    }
  };

  return (
    <div className="file-system">
      <div className="navigation flex-row">
        <div>Current Path: hacs{currentPath + path.sep}</div>
        {currentPath ? (
          <button className="level-up-button icon" onClick={changeToParent}>
            <i className="fas fa-level-up-alt" />
          </button>
        ) : null}
      </div>
      <div className="flex">
        <div className="folder-contents flex">
          {folders?.map((folder) => (
            <Folder
              name={folder.name}
              key={folder.name}
              handleClick={openFolder}
            />
          ))}
          {files?.map((file) => (
            <File
              name={file.name}
              path={currentPath}
              key={file.name}
              handleClick={selectFile}
            />
          ))}
        </div>
      </div>

      <FileUpload path={currentPath} onUploadFile={selectFile} />
    </div>
  );
}

export default FileSystem;
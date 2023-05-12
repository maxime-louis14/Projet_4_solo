
import React, { useCallback } from "react";
import DragdropComponent from "../Components/DragdropComponent/DragdropComponent";
// Import the dropzone component


function Dragdrop() {
    // onDrop function  
    const onDrop = useCallback((acceptedFiles: any) => {
        // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
        console.log(acceptedFiles);
    }, []);

    // We pass onDrop function and accept prop to the component. It will be used as initial params for useDropzone hook
    return (
        <main className="App">
            <h1 className="text-center">Drag and Drop Example</h1>
            <DragdropComponent onDrop={onDrop} accept={"image/*"} />
        </main>
    );
}


export default Dragdrop;
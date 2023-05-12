import React from "react";

function BouttonComponent() {
    function handleclickboutton(){
        alert("message");
    }
    return (<>
    <button onClick={handleclickboutton}>coucou</button>
    </>  );
}

export default BouttonComponent;
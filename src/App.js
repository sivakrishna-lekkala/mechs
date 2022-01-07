import React, { Suspense, useEffect, useState } from "react";

import "./App.css";
import Main from "./components/main/Main";

function App() {
  return (
    <Suspense fallback={<div>hello</div>}>
      <Main />
    </Suspense>
  );
}

export default App;

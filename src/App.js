import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
const English = React.lazy(() => import("./English"));
const Persian = React.lazy(() => import("./Persian"));

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route index element={
                    <Suspense fallback={"Loading .."}>
                        <English />
                    </Suspense>
                } />
                <Route path="fa" element={
                    <Suspense fallback={"درحال بارگذاری .."}>
                        <Persian />
                    </Suspense>
                } />
            </Routes>
        </HashRouter>
    )
}

export default App;

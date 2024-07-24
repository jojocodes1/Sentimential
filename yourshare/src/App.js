import React from "react";
import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { AddItemPage } from "./pages/AddItemPage";
import { CommunityPage } from "./pages/CommunityPage";
import { BorrowItemPage } from "./pages/BorrowItemPage";
import { SignupPage } from "./pages/SignupPage";  
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/AddItemPage" element={<AddItemPage />} />
        <Route path="/CommunityPage" element={<CommunityPage />} />
        <Route path="/BorrowItemPage" element={<BorrowItemPage />} />
        <Route path="/WelcomePage" element={<WelcomePage />} />
      </Routes>
    </div>
  );
}

export default App;

// export const pages = {
//   WelcomePage: "WelcomePage",
//   CommunityPage: "CommunityPage",
//   AddItemPage: "AddItemPage",
//   BorrowItemPage: "BorrowItemPage",
//   SignupPage: "SignupPage",
// };

// function App() {
//   const [currentPage, setCurrentPage] = React.useState(pages.SignupPage);

//   const componentToShow = React.useMemo(() => {
//     let whichComponentToShow;

//     console.log("currentPage: " + currentPage);
//     switch (currentPage) {
//       case pages.CommunityPage:
//         whichComponentToShow = <CommunityPage changePage={setCurrentPage} />;
//         break;
//       case pages.AddItemPage:
//         whichComponentToShow = <AddItemPage changePage={setCurrentPage} />;
//         break;
//       case pages.BorrowItemPage:
//         whichComponentToShow = <BorrowItemPage changePage={setCurrentPage} />;
//         break;
//       case pages.SignupPage:
//         whichComponentToShow = <SignupPage changePage={setCurrentPage} />;
//         break;
//       case pages.WelcomePage:
//       default:
//         whichComponentToShow = <WelcomePage changePage={setCurrentPage} />;
//         break;
//     }
//     return whichComponentToShow;
//   }, [currentPage, setCurrentPage]);

//   return <div className="App">{componentToShow}</div>;
// }

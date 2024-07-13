import React from "react";
import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { AddItemPage } from "./pages/AddItemPage";
import { CommunityPage } from "./pages/CommunityPage";

export const pages = {
  WelcomePage: "WelcomePage",
  CommunityPage: "CommunityPage",
  AddItemPage: "AddItemPage",
};

function App() {
  const [currentPage, setCurrentPage] = React.useState(pages.AccountPage);

  const componentToShow = React.useMemo(() => {
    let whichComponentToShow;

    console.log("currentPage: " + currentPage);
    switch (currentPage) {
      case pages.CommunityPage:
        whichComponentToShow = <CommunityPage changePage={setCurrentPage} />;
        break;
      case pages.AddItemPage:
        whichComponentToShow = <AddItemPage changePage={setCurrentPage} />;
        break;
      case pages.WelcomePage:
      default:
        whichComponentToShow = <WelcomePage changePage={setCurrentPage} />;
        break;
    }
    return whichComponentToShow;
  }, [currentPage, setCurrentPage]);

  return <div className="App">{componentToShow}</div>;
}

export default App;

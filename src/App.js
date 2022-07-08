import { Spin } from "antd";
import { lazy, Suspense } from "react";
import { RiLoader2Fill } from "react-icons/ri";
import { connect } from "react-redux";
import "./App.css";

const Mainpage = lazy(() => import("./components/MainPage"));
const Sidebar = lazy(() => import("./components/Sidebar/Sidebar"));

const App = ({ currentMode }) => {
  const renderLoader = () => (
    <div className="w-full h-screen flex justify-center items-center">
      <Spin indicator={<RiLoader2Fill className="animate-spin" />} spinning tip="Loading..." />
    </div>
  );

  return (
    <Suspense fallback={renderLoader()}>
      <div className={`flex w-full h-screen md:h-full sm:h-full ${currentMode}`}>
        <Sidebar />
        <Mainpage />
      </div>
    </Suspense>
  );
};

export default connect(({ app }) => ({ ...app }))(App);

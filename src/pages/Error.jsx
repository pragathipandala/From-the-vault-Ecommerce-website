import { NavLink } from "react-router-dom";
import Button_1 from "../components/Button_1";
const Error = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-40 text-text">
        <h1 className="text-[50px]">404 Error</h1>
        <h4 className="text-2xl">Page not found</h4>
        <NavLink to="/">
          <Button_1 label="Go back to Home" />
        </NavLink>
      </div>
    </>
  );
};
export default Error;

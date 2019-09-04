import React from "react";
import { NotFound, HelperSection } from "./style";
import { HOME } from "../../constants/routes";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <NotFound src="/404.svg" />
      <HelperSection>
        <p>
          Lost? return <Link to={HOME}>Home</Link>
        </p>
      </HelperSection>
    </>
  );
};

export default NotFoundPage;

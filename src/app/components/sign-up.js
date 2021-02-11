import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadPositions } from "../../actions";
import { withApiService } from "../hoc/withApiService";
import ErrorIndicator from "../utility/error-indicator";
import Spinner from "../utility/spinner";
import Form from "./form";

function SignUp({ apiService }) {
  const [fetch, setFetch] = useState({ loading: true, error: false });
  const positions = useSelector((state) => state.positions);
  const dispatch = useDispatch();
  useEffect(() => {
    let mount = true;
    apiService
      .getPositions()
      .then((data) => {
        if (mount) {
          dispatch(loadPositions(data.positions));
          setFetch({ loading: false, error: false });
        }
      })
      .catch((e) => {
        console.log(e);
        if (mount) setFetch({ loading: false, error: true });
      });
    return () => {
      mount = false;
    };
  }, [apiService, dispatch]);
  if (fetch.loading) {
    return <Spinner />;
  }
  if (fetch.error) {
    return <ErrorIndicator />;
  }
  return (
    <section id="sign-up" className="sign-up section-padding">
      <div className="container">
        <h2 className="sign-up__title title">Register to get a work</h2>
        <p className="sign-up__subtitle p">
          Attention! After successful registration and alert, update the list of
          users in the block from the top
        </p>
        <Form positions={positions} />
      </div>
    </section>
  );
}
export default withApiService()(SignUp);

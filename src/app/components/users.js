import React, { useEffect, useState } from "react";
import User from "./user";
import { withApiService } from "../hoc/withApiService";
import Spinner from "../utility/spinner";
import ErrorIndicator from "../utility/error-indicator";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../../actions";
function Users({ apiService }) {
  const [fetch, setFetch] = useState({ loading: true, error: false });
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [pageCounter, setPageCounter] = useState(1);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    let mount = true;
    setFetch({ loading: true, error: false });
    apiService
      .getUsers(pageCounter)
      .then((data) => {
        console.log(data);
        if (mount) dispatch(addUsers(data.users));
        setMaxPage(data.total_pages);
        setFetch({ loading: false, error: false });
      })
      .catch((e) => {
        console.log(e);
        if (mount) setFetch({ loading: false, error: true });
      });
    return () => {
      mount = false;
    };
  }, [apiService, dispatch, pageCounter]);

  if (fetch.error) {
    return <ErrorIndicator />;
  }

  const onShowMore = () => {
    setPageCounter(pageCounter + 1);
  };
  return (
    <section className="users section-padding">
      <div className="container">
        <h2 className="users__title title">Our cheerful users</h2>
        <p className="users__subtitle p">
          Attention! Sorting users by registration date
        </p>
        <div className="users__list">
          {fetch.loading && !users && <Spinner />}
          {users?.map((user) => (
            <User key={user.id} userData={user} />
          ))}
        </div>
        {fetch.loading && <Spinner />}
        {pageCounter < maxPage && (
          <button onClick={onShowMore} className="users__button button">
            Show more
          </button>
        )}
      </div>
    </section>
  );
}
export default withApiService()(Users);

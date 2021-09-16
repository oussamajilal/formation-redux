import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions/usersAction";

const Users = () => {
  const dispatch = useDispatch();
  const { loading, error, users } = useSelector(
    (state: any) => state.usersList
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      {loading
        ? "Loading..."
        : error
        ? error.message
        : users.map((u: any) => (
            <h3 key={u.id}>
              {u.firstName} {u.lastName}
            </h3>
          ))}
    </>
  );
};

export default Users;

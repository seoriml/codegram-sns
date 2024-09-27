import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { executeRequest } from "../redux/apiSlice";

const useAPI = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.api);

  // 이미지 호출할 땐 content-type에 "multipart/form-data"

  const executeRequestThunk = useCallback(
    (url, method = "GET", body = null, contentType = null, token = null) => {
      return dispatch(executeRequest({ url, method, body, contentType, token }));
    },
    [dispatch]
  );

  const get = useCallback(
    (url, contentType, token) => executeRequestThunk(url, "GET", null, contentType, token),
    [executeRequestThunk]
  );
  const post = useCallback(
    (url, body, contentType, token) => executeRequestThunk(url, "POST", body, contentType, token),
    [executeRequestThunk]
  );
  const put = useCallback(
    (url, body, contentType, token) => executeRequestThunk(url, "PUT", body, contentType, token),
    [executeRequestThunk]
  );
  const del = useCallback(
    (url, contentType, token) => executeRequestThunk(url, "DELETE", null, contentType, token),
    [executeRequestThunk]
  );

  return { data, loading, error, get, post, put, del };
};

export default useAPI;

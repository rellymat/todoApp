import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { activeInterval, testSubject } from "../store/actions/rxjsAction";

const RxjsCom = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(testSubject());
    dispatch(activeInterval());
  }, []);

  return <></>;
};
export default RxjsCom;

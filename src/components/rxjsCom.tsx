import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { activeInterval, testSubject } from "../store/actions/rxjsAction";
import { initState } from "../store/actions/taskActionCreator";

const RxjsCom = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initState());
    dispatch(testSubject());
    // dispatch(activeInterval());
  }, []);

  return <></>;
};
export default RxjsCom;

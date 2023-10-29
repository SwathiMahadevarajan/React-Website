import { useState, useEffect } from "react";
import useSetStatus from "api/sections/useUpdateStatus";
import useGetStatus from "api/sections/useGetStatus.js";
import "./markDoneStyle.css";
import { useSection } from "components/Layout/Section/useSection";

export default function MarkAsDone({ chapterId, lessonId }) {
  const { update, setUpdate } = useSection();
  let checked = false;
  const getStatus = useGetStatus({ lessonId });

  const setStatus = useSetStatus({
    chapterId,
    lessonId,
  });

  const handleClick = (event) => {
    setStatus.action({ payload: { completed: event.target.checked } });
    setUpdate(!update);
  };

  useEffect(() => {
    getStatus.action();
  }, [setStatus.loading, lessonId, chapterId]);

  return (
    <div className="markDone">
      <label htmlFor="checkBox">
        <input
          type={"checkbox"}
          id="checkBox"
          className="checkbox"
          onClick={handleClick}
          checked={
            getStatus.data && !getStatus.loading
              ? getStatus.data[chapterId - 1].completed
              : checked
          }
        />
        <p className="checkboxToggle"></p>
        Completed
      </label>
    </div>
  );
}

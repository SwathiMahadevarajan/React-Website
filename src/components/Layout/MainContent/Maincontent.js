import { Suspense } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import "./mainContentStyle.css";
import MarkAsDone from "./MarkAsDone";

export default function MainContent({ children }) {
  return (
    <div className="contents">
      <BreadCrumbs />
      {children.chapterId ? (
        <MarkAsDone
          lessonId={children.lessonId}
          chapterId={children.chapterId}
        />
      ) : (
        ""
      )}
      <div className="desc">
        <Suspense fallback="loading....">
          <children.component />
        </Suspense>
      </div>
    </div>
  );
}

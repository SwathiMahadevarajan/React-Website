import MainContent from "../../components/Layout/MainContent/Maincontent";
import DocLayout from "./DocLayout";
import { useParams } from "react-router-dom";
import Homepage from "pages/DocsPage/homepage";
import { sections } from "./data";

export default function DocPages() {
  const { lesson, chapter } = useParams();
  let children = { title: "", component: Homepage };

  if (chapter === undefined || lesson === undefined)
    children.component = Homepage;
  else {
    sections.map((sectionItem, index) => {
      if (sectionItem.heading === lesson) {
        sectionItem.chapters.map((sectionItemChapter) => {
          if (sectionItemChapter.title === chapter) {
            children = {
              lessonId: index,
              chapterId: sectionItemChapter.id,
              title: sectionItemChapter.title,
              component: sectionItemChapter.component,
            };
          }
        });
      }
    });
  }
  return (
    <DocLayout>
      <MainContent children={children} />
    </DocLayout>
  );
}

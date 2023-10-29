import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Section from "components/Layout/Section/Section";
import "./sidebarStyle.css";
import useGetStatus from "api/sections/useGetStatus.js";
import { useSection } from "components/Layout/Section/useSection";
export default function SideBar({
  sections,
  toggleMenu,
  setToggleMenu,
  update,
}) {
  const sideBarContent = [];

  sections.map((section, index) => {
    sideBarContent.push(
      <DocSection
        key={index}
        defaultToggle={section.defaultToggle}
        heading={section.heading}
        sectionContent={section.chapters}
        index={index}
        update={update}
      />
    );
  });

  return (
    <div className={toggleMenu ? " menu Open" : " menu "}>
      <div className="sidebar">
        <div className="navbar">
          <span
            onClick={() => setToggleMenu(!toggleMenu)}
            className={"hamburger"}
            style={{ color: "white", fontSize: "25px" }}
          >
            {"\u2630"}
          </span>
          <img src="../../logo192.png" id="logo" alt="hi" />
          <span>
            <h3>React</h3>
          </span>
        </div>
        <ul className="nav">{sideBarContent}</ul>
      </div>
    </div>
  );
}

function DocSection({ sectionContent, heading, defaultToggle, index }) {
  const { update } = useSection();
  let [activeTab, setActiveTab] = useState();
  const statusData = useGetStatus({ lessonId: index });
  const urlLocation = useLocation().pathname.split("/");
  const sectionContentItem = [];

  if (urlLocation[urlLocation.length - 1]) {
    defaultToggle = urlLocation[urlLocation.length - 2] === heading;
  }

  sectionContent.map((sectionItem, index) => {
    if (sectionItem.title === urlLocation[urlLocation.length - 1]) {
      activeTab = sectionItem.id;
    }
    sectionContentItem.push(
      <DocSectionItem
        key={index}
        heading={heading}
        chapterName={sectionItem}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        status={
          !statusData.loading && statusData.data ? statusData.data[index] : ""
        }
      />
    );
  });

  useEffect(() => {
    statusData.action();
  }, [update]);

  return (
    <>
      <li>
        <Section heading={heading} defaultToggle={defaultToggle}>
          {sectionContentItem}
        </Section>
      </li>
    </>
  );
}

function DocSectionItem({
  chapterName,
  heading,
  activeTab,
  setActiveTab,
  status,
}) {
  return (
    <>
      <li
        className={activeTab === chapterName.id ? "active" : ""}
        key={chapterName.id}
        onClick={() => setActiveTab(chapterName.id)}
      >
        <Link
          to={`/Docs/${heading}/${chapterName.title}`}
          className={status != "" && status.completed ? "completed" : ""}
        >
          {chapterName.id}. {chapterName.title}{" "}
          {status.completed ? "\u2713" : ""}
        </Link>
      </li>
    </>
  );
}

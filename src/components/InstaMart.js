import { useState } from "react";

const Section = ({ title, descripition, visible, setVisible }) => {
  return (
    <div className="p-[1rem] m-[1rem] flex flex-col gap-y-[1rem]   border border-black">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl ">{title}</h1>
        {visible ? (
          <button
            className="text-white bg-blue-500 font-bold p-[.3rem] folt-bold rounded-md"
            onClick={() => {
              setVisible(false);
            }}
          >
            Hide
          </button>
        ) : (
          <button
            className="text-white bg-blue-500 font-bold p-[.3rem] folt-bold rounded-md"
            onClick={() => {
              setVisible(true);
            }}
          >
            Show
          </button>
        )}
      </div>
      <div className="">{visible === true ? <p>{descripition}</p> : ""}</div>
    </div>
  );
};
const InstaMart = () => {
  const [visibleStatus, setVisibleStatus] = useState("about");
  return (
    <div className="">
      <Section
        title={"About InstaMart"}
        descripition={
          "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph."
        }
        visible={visibleStatus === "about"}
        setVisible={() => {
          if (visibleStatus === "about") {
            setVisibleStatus(true);
          } else {
            setVisibleStatus("about");
          }
        }}
      />
      <Section
        title={"Team InstaMart"}
        descripition={
          "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph."
        }
        visible={visibleStatus === "team"}
        setVisible={() => {
          if (visibleStatus === "team") {
            setVisibleStatus(true);
          } else {
            setVisibleStatus("team");
          }
        }}
      />
      <Section
        title={"Career InstaMart"}
        descripition={
          "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph."
        }
        visible={visibleStatus === "career"}
        setVisible={() => {
          if (visibleStatus === "career") {
            setVisibleStatus(true);
          } else {
            setVisibleStatus("career");
          }
        }}
      />
    </div>
  );
};

export default InstaMart;

import * as React from "react";
import "./styles.css";
import { useState } from "react";

const Accordion = ({
  title,
  content,
}: {
  title: string;
  content: string | React.ReactElement;
}) => {
  const [showContent, setShowContent] = useState(true);

  return (
    <div className="accordion__wrapper">
      <button
        className="accordion__header"
        onClick={() => setShowContent((v: boolean) => !v)}
      >
        {title}
      </button>
      {showContent && <div className="accordion__content">{content}</div>}
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Accordion title="test" content="test" />
      <Accordion title="test" content="test" />
    </div>
  );
}

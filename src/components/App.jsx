import React from "react";

import Header from "./Header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";

let App = () => {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;

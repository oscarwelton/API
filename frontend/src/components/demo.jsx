import { useState, useEffect } from "react";
import axios from "axios";

function Demo() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");

  const regex = /^[a-zA-Z]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target[0].value.toLowerCase().trim();

    if (regex.test(query)) {
      axios
        .get("http://localhost:5000/api", {
          params: {
            query: query,
          },
        })
        .then((res) => {
          setData(JSON.stringify(res.data, null, 2));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="demo">
      <h3 className="demo-title">Try Me:</h3>
      <div className="demo-form">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="search word"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setData("");
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="demo-output">
        <h4>Output:</h4>
        <pre style={{ whiteSpace: "pre-wrap", tabSize: 4 }}>{data}</pre>
      </div>
    </div>
  );
}

export default Demo;

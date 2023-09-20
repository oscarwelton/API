import { useState, useEffect } from "react";
import axios from "axios";

function Demo() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");

  const regex = /^[a-zA-Z]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
    const query = e.target[0].value.toLowerCase().trim();

    if (regex.test(query)) {
      axios
        .get("http://localhost:5000/api", {
          params: {
            query: query,
          },
        })
        .then((res) => {
          setData(res.data);
          console.log(data);
        });
    }
  };

  return (
    <div className="demo">
      <h3 className="demo-title">Live Demo</h3>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="search word"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Demo;

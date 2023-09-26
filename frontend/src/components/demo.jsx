import { useState } from "react";
import axios from "axios";

function Demo() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState("Search for a word to view its meaning!");

  const regex = /^[a-zA-Z]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target[0].value.toLowerCase().trim();

    if (regex.test(query)) {
      axios
        .get("http://localhost:5000/demo", {
          params: {
            query,
          },
        })
        .then((res) => {
          const response = res.data;

          if (response.length === 0) {
            setData(
              JSON.stringify(
                {
                  error: "No Word Found",
                  message:
                    "Sorry pal, we couldn't find definitions for the word you were looking for.",
                  resolution:
                    "You can try the search again at later time or head to the web instead.",
                },

                null,
                2
              )
            );
            return;
          }

          setData(JSON.stringify(res.data, null, 2));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="demo">
      <h3 className="demo-title">Try Me</h3>
      <div className="demo-form">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="search word"
            value={query}
            required={true}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <h4>Output:</h4>
      <div className="demo-output">
        <pre style={{ whiteSpace: "pre-wrap", tabSize: 4 }}>{data}</pre>
      </div>
    </div>
  );
}

export default Demo;

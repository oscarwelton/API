// import { JSONTree } from "react-json-tree";

const json = {
  array: [1, 2, 3],
  object: {
    foo: "bar",
  },
};

function Demo() {
  return (
    <div className="demo">
      <h3 className="demo-title">Live Demo</h3>

      <div className="demo-content">
        <p>this will be a json file</p>
      </div>
    </div>
  );
}

export default Demo;

import React, { useState } from "react";

function CodeExample() {
  const [language, setLanguage] = useState("javascript");

  const renderCode = () => {
    switch (language) {
      case "javascript":
        return (
          <pre>
            {`fetch('https://wordweb.app/api/words?apikey=your_api_key&word=your_word_query')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });`}
          </pre>
        );

      case "python":
        return (
          <pre>
            {`import requests
  response = requests.get('https://wordweb.app/api/words',
  params={
    'apikey': your_api_key,
    'word': your_word_query
  })
  print('Response:', response.json())`}
          </pre>
        );
      case "ruby":
        return (
          <pre>
            {`require 'net/http'
  require 'json'

  url = URI('https://wordweb.app/api/words')
  params = {
    apikey: your_api_key,
    word: your_word_query
  }
  response = Net::HTTP.get_response(url, params)

  if response.is_a?(Net::HTTPSuccess)
    data = JSON.parse(response.body)
    puts 'Response:', data
  else
    puts 'Error:', response.code, response.body
  end`}
          </pre>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <button onClick={() => setLanguage("javascript")}>JavaScript</button>
      <button onClick={() => setLanguage("python")}>Python</button>
      <button onClick={() => setLanguage("ruby")}>Ruby</button>

      <div
        className="demo-output"
        style={{ whiteSpace: "pre-wrap", tabSize: 4 }}
      >
        {renderCode()}
      </div>
    </div>
  );
}

export default CodeExample;

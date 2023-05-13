import React, { useState } from 'react';
import * as d3 from 'd3'; // Import D3 library
import * as FileSaver from 'file-saver'; // Import FileSaver library

function App() {
  const [data, setData] = useState([]); // State to store the histogram data

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://www.terriblytinytales.com/test.txt'
      ); // Fetch text file
      const text = await response.text(); // Convert response to text
      const words = text.trim().split(/\s+/); // Split text into array of words
      const frequency = d3.rollup(
        // Calculate frequency of each word using D3
        words,
        (v) => v.length,
        (d) => d.toLowerCase()
      );
      const sortedData = Array.from(frequency, ([word, count]) => ({
        word,
        count,
      })) // Convert map to array of objects
        .sort((a, b) => b.count - a.count) // Sort by count in descending order
        .slice(0, 20); // Take top 20 words
      setData(sortedData); // Update state with histogram data
    } catch (error) {
      console.error(error);
    }
  };

  const handleExport = () => {
    const csvData = data.map((d) => `${d.word},${d.count}`).join('\n'); // Convert data to CSV format
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' }); // Create blob object
    FileSaver.saveAs(blob, 'histogram.csv'); // Download file
  };

  return (
    <div style={{ backgroundColor: 'pink' }}>
      <button style={{ backgroundColor: 'pink' }} onClick={fetchData}>
        Submit
      </button>
      {data.length > 0 && (
        <>
          <svg width={500} height={500}>
            {/* Render histogram using D3 */}
          </svg>
          <button style={{ backgroundColor: 'pink' }} onClick={handleExport}>
            Export
          </button>
        </>
      )}
    </div>
  );
}

export default App;

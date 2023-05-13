# react-word-csv
NAME:GULABCHAND KUMAR GUPTA 
ASSIGNMENTGIVEN BY:TERRIBLY TINY TALES
**********************************************************


Develop a frontend in Reactjs or Nextjs, which does the following:
On first load, only has a Submit button
On clicking on Submit, it will fetch the contents of https://www.terriblytinytales.com/test.txt
Parse the content and find the frequency of occurrence of each word (some words will occur only once, some twice and so on, and some will occur N times)
Then on the frontend, plot a histogram of the 20 most occurring words.
Also build an "Export" button, which when clicked will download a CSV file of the histogram data.
X-axis = top 20 words with highest occurrence Y-axis = how many times they occurred in the file


************************************************************************************************************


EXPLANATION:
Word Frequency Histogram
This is a React web application that fetches a text file from the internet, calculates the frequency of each word in the file using D3.js, and displays the top 20 words in a histogram. The user can export the histogram data to a CSV file.


Libraries and Plugins Used
The following libraries and plugins were used in this project:


React: A JavaScript library for building user interfaces.
D3.js: A JavaScript library for visualizing data using SVG, Canvas, and HTML.
FileSaver.js: A JavaScript library for saving files in the browser.
Axios: A JavaScript library for making HTTP requests from the browser.
React Chart.js 2: A React wrapper for the Chart.js 2 library, which is used for rendering the histogram.






[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-ts-aj5nxi)
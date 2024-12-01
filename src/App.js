import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <h1>Lab10 part C</h1>
      <h2>Installing and building:</h2>
      <div id = "p1">To install this framework I installed node and npm. 
        After verifying their versions, running "npx create-react-app ." 
        set up the basic project layout and folder structure. From this point creating the webpage is no different than previous labs. 
        Modiying the css in App.css for style and HTML in App.js for functionality and content.
        To host the webpage, I used github pages. This requires the gh-pages package from npm. 
        Once the code is pushed to the github it can be hosted for free.</div>

        <h2>Difficulties:</h2>
      <div id = "p2">The set up and creation of this webpage wasn't too hard.
        The main difficulty I encountered was in setting up the project. Once I had set up the project with the npx command, I had 8 vulnerabilities.
        I tried to run the reccomended fix options but that ended with over 156 vulnerabilities. With no other option I had to start over again and see what else I could try.
        Upon investigation, it seemed that the vulnerabilities were due to problems with specific versions of the libraries installed.
        Installing specific verisons of the libraries helped to fix some of these problems. In addition, getting the website deployed to github pages had some probelms.
        At first the webpage wouldn't show up even though the build was successful. It turned out that because my github repo was named caleb.eng.github.io,
        my homepage path was incorrect in the package.json. Modiying this path fixed the problem with deployment.
      </div>
      </header>
    </div>
  );
}

export default App;

import "./styles.css";
import Row from "./Row";
import requests from "./requests";
import Navbar from "./Navbar";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Row
        title="What's trending"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
export default App;

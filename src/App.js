import Header from "./Header"
import Card from "./Card"
import data from "./data"


function App() {
  return (
    <>
    <Header />
    <Card data={data}/>   
    </>
  );
}

export default App;

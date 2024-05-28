import './App.css';

function App() {
  return (
    <div className="App">
      <div className={`zaglushka_header`}>
          Сайт әлегә эшләнә.
      </div>
      <div className={`zaglushka_content`}>
          <div className={`zaglushka_image1`}>
              <img src="/tataraltari.png" alt=""/>
              <img src="/Asset 3 1.png" className={`second_img`} alt=""/>
          </div>
          <div className={`zaglushka_middle`}>
              <img src="/Asset%201@4x%201.png" className={`zaglushka_middle_image1`} alt=""/>
              <img className={`pacan`} src="/Asset 4@4x 1.png" alt=""/>
          </div>
          <div className={`zaglushka_image2`}>
              <img src="/Asset 3 1.png" alt=""/>
          </div>
      </div>
    </div>
  );
}

export default App;

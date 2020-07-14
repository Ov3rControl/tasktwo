import React, { useState } from 'react';
import './App.css';

const IMAGES = {
  IMAGE_ONE:
    'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA',
  IMAGE_TWO:
    'https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0',
  IMAGE_THREE:
    'https://i.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60',
};

function App() {
  const { IMAGE_ONE, IMAGE_TWO, IMAGE_THREE } = IMAGES;
  const [currImage, setCurrImage] = useState<string>(IMAGE_ONE);

  const randomImages = () => {
    const randomImages = Object.entries(IMAGES)[
      Math.floor(Math.random() * 3) + 0
    ][1];
    setCurrImage(randomImages);
  };

  return (
    <div className="App">
      <div style={btnContainer}>
        <button
          style={currImage === IMAGE_ONE ? btnActive : btn}
          onClick={() => setCurrImage(IMAGE_ONE)}
        >
          Image One
        </button>
        <button
          style={currImage === IMAGE_TWO ? btnActive : btn}
          onClick={() => setCurrImage(IMAGE_TWO)}
        >
          Image Two
        </button>
        <button
          style={currImage === IMAGE_THREE ? btnActive : btn}
          onClick={() => setCurrImage(IMAGE_THREE)}
        >
          Image Three
        </button>
      </div>
      <div style={imgContainer}>
        <img
          onClick={() => randomImages()}
          width="200"
          height="200"
          src={currImage}
          alt="dummyPic"
        ></img>
      </div>
    </div>
  );
}
const btnActive = {
  color: 'white',
  padding: 10,
  cursor: 'pointer',
  backgroundColor: 'grey',
  border: 0,
  borderRadius: 5,
};
const btn = {
  color: 'white',
  padding: 10,
  cursor: 'pointer',
  backgroundColor: 'green',
  border: 0,
  borderRadius: 5,
};
const btnContainer = {
  display: 'flex',
  justifyContent: 'space-between',
};
const imgContainer = {
  marginTop: 20,
  cursor: 'pointer',
};
export default App;

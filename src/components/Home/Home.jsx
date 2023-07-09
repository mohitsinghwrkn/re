import React, { useState } from 'react';
import './Home.css';
import Tiles from './Tiles';
import Blog from '../Blogs/Blog';
import img1 from '../../assets/devt.png';
import img2 from '../../assets/deb.png';
import img3 from '../../assets/kal.png';
import img4 from '../../assets/arc.png';
import img5 from '../../assets/sud.png';
import img6 from '../../assets/fsf.png';
import img7 from '../../assets/ker.png';
import img8 from '../../assets/py.png';
import img9 from '../../assets/rpc.png';
import img10 from '../../assets/rpc1.png';

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [anotherImage, setAnotherImage] = useState(0);

  const images = [
    {
      src: img1,
      alt: 'Home Image 1',
    },
    {
      src: img2,
      alt: 'Home Image 2',
    },
    {
      src: img3,
      alt: 'Home Image 3',
    },
    {
      src: img4,
      alt: 'Home Image 4',
    },
    {
      src: img5,
      alt: 'Home Image 5',
    },
    {
      src: img6,
      alt: 'Home Image 6',
    },
    {
      src: img7,
      alt: 'Home Image 7',
    },
    {
      src: img8,
      alt: 'Home Image 8',
    },
    {
      src: img9,
      alt: 'Home Image 8',
    },
    {
      src: img10,
      alt: 'Home Image 8',
    },
  ];

  const handlePrevClick = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    setAnotherImage(anotherImage === images.length - 1 ? 0 : anotherImage + 1);
  };

  const handleNextClick = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    setAnotherImage(anotherImage === 0 ? images.length - 1 : anotherImage - 1);
  };

  return (
    <>
      <div className='home'>
        <br />
        <div className='image-box'>
          <img src={images[currentImage].src} alt={images[currentImage].alt} className="home-image1" />
          {/* <img src={images[anotherImage].src} alt={images[anotherImage].alt} className="home-image1" />   */}
        </div>
        <br />
        <div className='button-container'>
          <button className="prev-button " onClick={handlePrevClick}>
            Prev
          </button>
          <button className="next-button" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
      <Tiles />
      <div style={{ margin: "auto 10vw auto 10vw" }}>
        <Blog />
      </div>
    </>
  );
}

export default Home; 

import {  View } from 'react-native';
import ViewComponent from './components/View/View';
import TextExample1 from './components/Text/TextExample1';
import TextExample2 from './components/Text/TextExample2';
import TextExample3 from './components/Text/TextExample3';
import ImageExample1 from './components/Image/ImageExample1';
import ImageExample2 from './components/Image/ImageExample2';

export default function App() {
  return (
    <>
      {/* 1.View Component */}
      {/* <ViewComponent/> */}

      {/* 2.Text Component */}
        {/* 2.1. text without Text Component */}
        {/* <TextExample1/> */}
        {/* 2.2. text with Text Component */}
        {/* <TextExample2/> */}
        {/* 2.3. text with Text Component inside View Component */}
        {/* <TextExample3/> */}

      {/* 3.Image Component */}
        {/* 3.1. image without View Component */}
        {/* <ImageExample1/> */}
        {/* 3.2. image with View Component */}
        <ImageExample2/>


    </>
  );
}


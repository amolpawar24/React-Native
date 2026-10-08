import {  View } from 'react-native';
import ViewComponent from './components/View/View';
import TextExample1 from './components/Text/TextExample1';
import TextExample2 from './components/Text/TextExample2';
import TextExample3 from './components/Text/TextExample3';
import ImageExample1 from './components/Image/ImageExample1';
import ImageExample2 from './components/Image/ImageExample2';
import ImageCenter from './components/Image/Image-Center';
import ImageContain from './components/Image/Image-Contain';
import ImageCover from './components/Image/Image-Cover';
import ImageNone from './components/Image/Image-None';
import ImageRepeat from './components/Image/Image-Repeat';
import ImageStretch from './components/Image/Image-Stretch';
import ImageBackground1 from './components/ImageBackground/ImageBackground1';
import ImageBackground2 from './components/ImageBackground/ImageBackground2';
import ScrollViewExmaple1 from './components/ScrollView/ScrollViewExample1';
import ScrollViewExmaple2 from './components/ScrollView/ScrollViewExample2';
import ButttonExample from './components/Button/Buttton';
import PressableExample from './components/Pressable/Pressable';
import ModalExample from './components/Modal/Modal';
import StatusBarExample from './components/StatusBar/StatusBar';
import ActivityIndicatorExample from './components/ActivityIndicator/ActivityIndicator';
import ActivityIndicatorColor from './components/ActivityIndicator/Props/Color/ActivityIndicatorColor';
import ActivityIndicatorSize from './components/ActivityIndicator/Props/size/ActivityIndicatorSize';
import ActivityIndicatorAnimating from './components/ActivityIndicator/Props/Animating/ActivityIndicatorAnimating';

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
        {/* <ImageExample2/> */}
        {/* 3.3. Remote Image */}
        {/* <ImageCenter/> */}
        {/* <ImageContain/> */}
        {/* <ImageCover/> */}
        {/* <ImageNone/> */}
        {/* <ImageRepeat/> */}
        {/* <ImageStretch/> */}

      {/* 4.ImageBackground Component */}
        {/* <ImageBackground1/> */}
        {/* <ImageBackground2/> */}

      {/* 5.ScrollView Component */}
        {/* <ScrollViewExmaple1/> */}
        {/* <ScrollViewExmaple2/> */}

      {/* 6.Button */}
        {/* <ButttonExample/> */}

      {/* 7.Pressable */}
        {/* <PressableExample/> */}

      {/* 8.Modal */}
        {/* <ModalExample/> */}

      {/* 9.StatusBar */}
        {/* <StatusBarExample/> */}

      {/* 10.ActivityIndicator */}
        {/* <ActivityIndicatorExample/> */}
        {/* <ActivityIndicatorColor/> */}
        {/* <ActivityIndicatorSize/> */}
        <ActivityIndicatorAnimating/>


    </>
  );
}


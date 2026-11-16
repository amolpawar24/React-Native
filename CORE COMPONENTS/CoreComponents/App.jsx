import ButtonComponent from "./components/Button/ButtonComponent";
import ButtonWithAlert from "./components/Button/ButtonWithAlert";
import ButtonWithState from "./components/Button/ButtonWithState";
import MultipleButtons from "./components/Button/MultipleButtons";
import ButtonAccessibility from "./components/Button/props/ButtonAccessibility";
import ButtonColor from "./components/Button/props/ButtonColor";
import ButtonDisabled from "./components/Button/props/ButtonDisabled";
import ButtonOnPress from "./components/Button/props/ButtonOnPress";
import ButtonTitle from "./components/Button/props/ButtonTitle";
import LocalImage from "./components/Image/Local/LocalImage";
import LocalImage1 from "./components/Image/Local/LocalImage1";
import RemoteImage1 from "./components/Image/Remote/RemoteImage1";
import RemoteImage2 from "./components/Image/Remote/RemoteImage2";
import CenterImage from "./components/Image/ResizeModes/CenterImage";
import ContainImage from "./components/Image/ResizeModes/ContainImage";
import CoverImage from "./components/Image/ResizeModes/CoverImage";
import NoneImage from "./components/Image/ResizeModes/NoneImage";
import RepeatImage from "./components/Image/ResizeModes/RepeatImage";
import StretchImage from "./components/Image/ResizeModes/StretchImage";
import StaticImage from "./components/Image/Static/StaticImage";
import LocalBackground from "./components/ImageBackground/LocalBackground";
import BasicPressable from "./components/Pressable/BasicPressable";
import PressableWithImage from "./components/Pressable/PressableWithImage";
import PressableDelayLongPress from "./components/Pressable/Props/PressableDelayLongPress";
import PressableDisabled from "./components/Pressable/Props/PressableDisabled";
import PressableHitSlop from "./components/Pressable/Props/PressableHitSlop";
import PressableOnLongPress from "./components/Pressable/Props/PressableOnLongPress";
import PressableOnPress from "./components/Pressable/Props/PressableOnPress";
import PressableOnPressIn from "./components/Pressable/Props/PressableOnPressIn";
import PressableOnPressOut from "./components/Pressable/Props/PressableOnPressOut";
import DisableScroll from "./components/ScrollView/props/DisableScroll";
import HideHorizontalIndicator from "./components/ScrollView/props/HideHorizontalIndicator";
import HideVerticalIndicator from "./components/ScrollView/props/HideVerticalIndicator";
import HorizontalScroll from "./components/ScrollView/props/HorizontalScroll";
import NestedScroll from "./components/ScrollView/props/NestedScroll";
import PagingEnabled from "./components/ScrollView/props/PagingEnabled";
import ScrollToTop from "./components/ScrollView/props/ScrollToTop";
import VerticalScroll from "./components/ScrollView/props/VerticalScroll";
import ScrollViewComponent1 from "./components/ScrollView/ScrollViewComponent1";
import ScrollViewComponent2 from "./components/ScrollView/ScrollViewComponent2";
import ScrollViewTask1 from "./components/ScrollView/Tasks/ScrollViewTask1";
import NestingTextComponent from "./components/Text/NestingTextComponent";
import TextComponent1 from "./components/Text/TextComponent1";
import TextComponent2 from "./components/Text/TextComponent2";
import TextErrorDemo from "./components/Text/TextErrorDemo";
import MultipleViews from "./components/View/MultipleViews";
import NestingView from "./components/View/NestingView";
import NormalViewComponent from "./components/View/NormalViewComponent";

export default function App() {
  return (
    <>
        {/* 1.View Component */}
          {/* <NormalViewComponent/> */}
          {/* <NestingView/> */}
          {/* <MultipleViews/> */}
        
        {/* 2.Text Component */}
          {/* <TextErrorDemo/> */}
          {/* <TextComponent1/> */}
          {/* <TextComponent2/> */}
          {/* <NestingTextComponent/> */}

        {/* 3.Image Component */}
          {/* <StaticImage/> */}
          {/* <LocalImage/> */}
          {/* <LocalImage1/> */}
          {/* <RemoteImage1/> */}
          {/* <RemoteImage2/> */}
          {/* <CenterImage/> */}
          {/* <ContainImage/> */}
          {/* <CoverImage/> */}
          {/* <NoneImage/> */}
          {/* <RepeatImage/> */}
          {/* <StretchImage/> */}

        {/* 4.ImageBackground Component */}
          {/* <LocalBackground/> */}
        
        {/* 5.ScrollView Component */}
          {/* <ScrollViewComponent1/> */}
          {/* <ScrollViewComponent2/> */}
          {/* <ScrollViewTask1/> */}
          {/* <VerticalScroll/> */}
          {/* <HorizontalScroll/> */}
          {/* <NestedScroll/> */}
          {/* <HideVerticalIndicator/> */}
          {/* <HideHorizontalIndicator/> */}
          {/* <DisableScroll/> */}
          {/* <ScrollToTop/> */}
          {/* <PagingEnabled/> */}

        {/* 6.Button Component */}
          {/* <ButtonComponent/> */}
          {/* <ButtonWithAlert/> */}
          {/* <MultipleButtons/> */}
          {/* <ButtonWithState/> */}
          {/* <ButtonTitle/> */}
          {/* <ButtonColor/> */}
          {/* <ButtonDisabled/> */}
          {/* <ButtonAccessibility/> */}
          {/* <ButtonOnPress/> */}
        
        {/* 7.Pressable Component */}
          {/* <PressableWithImage/> */}
          {/* <BasicPressable/> */}
          {/* <PressableOnPress/> */}
          {/* <PressableOnLongPress/> */}
          {/* <PressableOnPressIn/> */}
          {/* <PressableOnPressOut/> */}
          {/* <PressableDisabled/> */}
          {/* <PressableHitSlop/> */}
          <PressableDelayLongPress/>

    </>
  );
}

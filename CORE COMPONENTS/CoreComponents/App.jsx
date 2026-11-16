import LocalImage from "./components/Image/Local/LocalImage";
import LocalImage1 from "./components/Image/Local/LocalImage1";
import RemoteImage1 from "./components/Image/Remote/RemoteImage1";
import RemoteImage2 from "./components/Image/Remote/RemoteImage2";
import StaticImage from "./components/Image/Static/StaticImage";
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
          <LocalImage1/>
          {/* <RemoteImage1/> */}
          {/* <RemoteImage2/> */}
    </>
  );
}

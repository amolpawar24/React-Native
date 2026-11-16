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
          <NestingTextComponent/>
    </>
  );
}

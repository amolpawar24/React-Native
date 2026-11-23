import MultipleStyles from "./components/MultipleStyles/MultipleStyles";
import MultipleStylesUsingArray from "./components/MultipleStyles/MultipleStylesUsingArray";
import ExternalStyle from "./components/StylingTypes/External/ExternalStyle";
import InlineStyle from "./components/StylingTypes/Inline/InlineStyle";
import InternalStyle from "./components/StylingTypes/Internal/InternalStyle";

export default function App() {
  return (
    <>
      {/* 1.Inline Styling */}
        {/* <InlineStyle/> */}

      {/* 2. Internal Styling */}
        {/* <InternalStyle/> */}

      {/* 3. External Styling */}
        {/* <ExternalStyle/> */}

      {/*  Multiple Styles */}
        {/* <MultipleStyles/> */}
          <MultipleStylesUsingArray/>
    </>
  );
}


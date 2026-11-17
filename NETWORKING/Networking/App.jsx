import GetRequestByFetch from "./components/FetchAPI/Get/GetRequestByFetch";
import PostRequestByFetch from "./components/FetchAPI/Post/PostRequestByFetch";
import PullToRefresh from "./components/PullToRefresh/PullToRefresh";

export default function App() {
  return (
    <>
      {/* 1. Fetch API */}
        {/* <GetRequestByFetch/> */}
        {/* <PostRequestByFetch/> */}
        <PullToRefresh/>
    </>
  );
}


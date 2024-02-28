import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";

function App() {
  return (
    <>
      <Box>
        <h1>LIVE</h1>
        <ReactPlayer
          url={
            "https://d3nvdnvywolj6.cloudfront.net/output/capture.m3u8"
          }
          id="MainPlay"
          playing={true}
          loop={true}
          controls={true}
          muted={true}
          width="600px"
          height="360px"
          style={{float: 'left'}}
        />
        <ReactPlayer
          url={
            "https://d3nvdnvywolj6.cloudfront.net/output/capture (2).m3u8"
          }
          id="MainPlay"
          playing={true}
          loop={true}
          controls={true}
          muted={true}
          width="600px"
          height="360px"
          style={{float: 'left'}}
        />
        <ReactPlayer
          url={
            "https://d3nvdnvywolj6.cloudfront.net/output/capture (8).m3u8"
          }
          id="MainPlay"
          playing={true}
          loop={true}
          controls={true}
          muted={true}
          width="600px"
          height="360px"
          style={{float: 'left'}}
        />
        <ReactPlayer
          url={
            "https://d3nvdnvywolj6.cloudfront.net/output/capture (9).m3u8"
          }
          id="MainPlay"
          playing={true}
          loop={true}
          controls={true}
          muted={true}
          width="600px"
          height="360px"
          style={{float: 'left'}}
        />
        <ReactPlayer
          url={
            "https://d3nvdnvywolj6.cloudfront.net/output/capture (10).m3u8"
          }
          id="MainPlay"
          playing={true}
          loop={true}
          controls={true}
          muted={true}
          width="600px"
          height="360px"
          style={{float: 'left'}}
        />
        <ReactPlayer
          url={
            "https://d3nvdnvywolj6.cloudfront.net/output/capture (11).m3u8"
          }
          id="MainPlay"
          playing={true}
          loop={true}
          controls={true}
          muted={true}
          width="600px"
          height="360px"
          style={{float: 'left'}}
        />
      </Box>
    </>
  );
}
export default App;

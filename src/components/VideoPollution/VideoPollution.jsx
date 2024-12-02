import { useVideoTexture } from "@react-three/drei";
import { useCallback, useState } from "react";

const VideoPollution = (props) => {
  const texture = useVideoTexture("/videos/pollution.mp4", {
    muted: false  ,
    loop: true,
    start: false,
  });

  const [pause, setPause] = useState(false);

  const handleVideo = useCallback(
    (e) => {
      e.stopPropagation();
      pause ? texture.image.play() : texture.image.pause();
      setPause(!pause);
    },
    [pause, setPause, texture]
  );

  return (
    <mesh {...props} onClick={handleVideo}>
      <planeGeometry args={[2, 1]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

export default VideoPollution;
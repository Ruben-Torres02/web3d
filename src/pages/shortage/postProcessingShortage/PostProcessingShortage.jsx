import { EffectComposer, Noise, Pixelation, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const PostProcessingShortage = () => {
    return (
        <EffectComposer>
           <Vignette 
            offset={0.8}
            darkness={0.8}
            eskil={false}
            blendFunction={BlendFunction.LIGHTEN}

           />
           
       
           
        </EffectComposer>
    )

}

export default PostProcessingShortage;
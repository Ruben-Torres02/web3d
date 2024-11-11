import { Environment } from "@react-three/drei"


const Staging = () => {
    return (
        <>
            <Environment
                ground={{
                    height: 20,
                    radius: 1000,
                    scale: 3000,
                }}
                files={"/hdris/sky/sky_2k.hdr"}
                background={true} />
        </>
    );
};
export default Staging;
import { Canvas } from "@react-three/fiber"
import { Earth3d } from "../../components/earth3d/Earth3d"
import { PresentationControls } from "@react-three/drei"
import useAuthStore from "../../stores/use-auth-store"
import { useCallback, useEffect } from "react"
import "./Home.css"
import { getDocs, query, where } from "firebase/firestore"
import UserDAO from "../../daos/userDAO"
import Button from "../../components/Button/Button"
import ButtonLogOut from "../../components/ButtonLogOut/ButtonLogOut"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const { user, logout } = useAuthStore()
  useEffect(() => {
    const getEmail = async () => {
      const queryEmail = query(UserDAO.collectionRef, where("email", "==", user.email));
      const email = await getDocs(queryEmail);

      if (user && email.empty) {

        const newUser = {
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
        };
        UserDAO.createUser(newUser);
      }

    }
    getEmail()
  }, [user]);
  const handlelogout = useCallback(() => {
    logout();
  }, [logout]);
  const navigate = useNavigate ()
  const handleNavigateStart = useCallback ( () => {
    navigate("/Start");
  }

  ) 
  return (
    <>
      <ButtonLogOut />
      <div className="container">
        <div className="container-left">
          <h1 className="container-left-welcome">¡Hola! {user.displayName}</h1>
          <p className="container-left-slogan">Bienvenido a innovaVerde,</p>
          <p className="container-left-slogan">"Hasta la ultima gota"</p>
          {/* <button onClick={handlelogout}>Cerrar Sesion</button> */}
          <Button text={"Iniciar"} onClick={handleNavigateStart}/>
        </div>
        <Canvas>
          <ambientLight />
          <directionalLight position={[10, 10, 10]} intensity={5} />
          <PresentationControls enabled={true}>
            <Earth3d />
          </PresentationControls>
        </Canvas>
      </div>
    </>
  )

}

export default Home


import Image from "next/future/image"
import useTaqueria from "../hooks/useTaqueria"
const Sidebar = () => {
  const {hola} = useTaqueria()
  console.log(hola)  
  return (
    <>
        <Image src={"/assets/img/logo.jpg"} alt="imagen logo" width={250} height={100}/>
    </>
  )
}

export default Sidebar
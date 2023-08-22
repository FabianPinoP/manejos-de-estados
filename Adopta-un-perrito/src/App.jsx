import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import Descripcion from "./components/Descripcion";

function App() {
  return (
    <>
      <Header title="Adopta un perrito" />
      <div className="galeria">
        <MyCard
          image="https://images.pexels.com/photos/3726315/pexels-photo-3726315.jpeg?auto=compress&cs=tinysrgb&w=600"
          nombre="Bartolo"
          desc="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
          tag="Husky"
          colorTag="success"
        />
        <MyCard
          image="https://media.istockphoto.com/id/93392743/es/foto/bobtail.jpg?s=612x612&w=0&k=20&c=3RvxzR_kp11bo5a2GTChfGnU90ybnIPjBfj46iPc8QI="
          nombre="Messi"
          desc="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
          tag="Bobtail"
          colorTag="primary"
        />
        <MyCard
          image="https://images.pexels.com/photos/12287391/pexels-photo-12287391.jpeg?auto=compress&cs=tinysrgb&w=600"
          nombre="Gohan"
          desc="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
          tag="Shar Pei"
          colorTag="danger"
        />
        <MyCard
          image="https://images.pexels.com/photos/1000602/pexels-photo-1000602.jpeg?auto=compress&cs=tinysrgb&w=600"
          nombre="Princesa"
          desc="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
          tag="Beagle"
          colorTag="warning"
        />
      </div>
      <Footer text="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre." />
      <Descripcion descripcion='esto es un ejemplo para react tools'/>
    </>
  );
}

export default App;

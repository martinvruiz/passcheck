
import { Info } from "./components/Info/Info";
import { InfoTips } from "./components/InfoTips/InfoTips";
import { PassInput } from "./components/PassInput/PassInput";

function App() {
  return (
    <div className="bg-blue-500 font-parkinsans min-w-full min-h-screen flex flex-col items-center">
      <PassInput/>
      <section className="flex justify-center">
        <InfoTips 
        title="Tips" 
        text2="Algunos tips que te podemos dar son:"
        />
        <Info 
        title="Como probar tus contraseñas?" 
        text1="¿Sabías que una buena contraseña puede hacer toda la diferencia para proteger tus cuentas? En este lugar podes probar para que sean únicas, súper seguras y fáciles de recordar." 
        text2="En el rectangulo principal tenes un recuadro para probar las contraseñas que uses diariamente. Abajo de ese recuadro, tenes las principales combinaciones para hacer tu/s contraseña/s mas seguras. Cuando cumplas alguna de estas, se podra de color verde, mientras mas cumplas mas segura tu contraseña!" 
        text3="No guardamos ningun tipo de dato, la app solo chequea que tu contraseña cumpla con estos requisitos. No hay un limite para probar estas, podes dejar volar tu imaginacion para que sean seguras!"
        />
      </section>
    </div>
  );
}

export default App;

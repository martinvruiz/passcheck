


export const InfoTips = ({text1,text2,text3, title})=>{

    const tips = [
        "Usa una combinación de letras mayúsculas y minúsculas, números y símbolos.",
        "Asegúrate de que la contraseña tenga al menos 8 caracteres.",
        "Evita usar información personal como nombres, fechas o palabras comunes.",
        "Crea frases únicas y fáciles de recordar que no tengan relación directa con tu vida.",
        "Utiliza una contraseña diferente para cada cuenta.",
        "Considera usar un gestor de contraseñas para generar y almacenar claves seguras.",
        "Cambia tus contraseñas con regularidad, sobre todo si sospechas que tu cuenta puede estar comprometida.",
        "Activa la autenticación en dos pasos (2FA) para mayor seguridad."
      ];

    return <div className="bg-white rounded-xl flex flex-col justify-center text-center w-2/5 m-2 p-2">

        <h2 className="text-2xl font-bold my-1">{title}</h2>
        <p className="py-2">{text1}</p>
        <p className="py-2">{text2}</p>
        <ul>
            {tips.map((tip, index) => (
                <li className="p-2" key={index}>{tip}</li>
            ))}
        </ul>
    </div>
}
import { useState } from "react"


export const PassInput =()=>{

    const [pass, setPass] = useState('')

    const req = [
        { id: 1, text: 'Al menos 8 caracteres', valid: pass.length >= 8 },
        { id: 2, text: 'Al menos una letra mayúscula', valid: /[A-Z]/.test(pass) },
        { id: 3, text: 'Al menos una letra minúscula', valid: /[a-z]/.test(pass) },
        { id: 4, text: 'Al menos un número', valid: /\d/.test(pass) },
        { id: 5, text: 'Al menos un simbolo', valid: /[!@#$%^&*(),.?":{}|<>]/.test(pass) },
    ]

    const handlePass = (e) => setPass(e.target.value)

    return <div className=" bg-white border-4 rounded-xl lg:w-2/4 w-3/4 my-4">

        <form action="password-check" className= "flex flex-col justify-center items-center">
            <label htmlFor="pass" className="my-2 border-b-2 border-black lg:text-3xl p-2">Password Check</label>
            <input type="password" name="pass" id="pass" value={pass} onChange={handlePass} placeholder="Ingresa tu contraseña" className=" my-2 p-3 rounded-xl border-2 border-black "/>
        </form>
        <div className="text-center my-4">
            <ul>
                {

                    req.map((req)=>(
                        <li key={req.id} style={{color: req.valid ? 'green' : 'red'}}>
                            {req.text}
                        </li>
                    )

                    )

                }
            </ul>
        </div>

    </div>
}
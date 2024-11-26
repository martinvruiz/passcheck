

export const Info = ({text1,text2,text3, title})=>{

    return <div className="bg-white rounded-xl text-center w-2/5 m-2 p-2">

        <h2 className="text-2xl font-bold my-1">{title}</h2>
        <p className="p-4">{text1}</p>
        <p className="p-4">{text2}</p>
        <p className="p-4">{text3}</p>
    </div>
}
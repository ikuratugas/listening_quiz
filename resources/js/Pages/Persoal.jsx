import { data } from "autoprefixer";
import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

function Persoal(props){
    const { speak } = useSpeechSynthesis();

    // mengambil nilai input
    const [tampungJawaban, setTampungJawaban] = useState()
    const [jawaban, setJawaban] = useState()

    // increment percobaan bila salah | batas 3x percobaan
    const [increCobaJwb, setIncreCobaJwb] = useState(0)

    //
    const [salah1, setSalah1] = useState(false)
    const [salah2, setSalah2] = useState(false)
    const [salah3, setSalah3] = useState(false)

    const [benar1, setBenar1] = useState(false)
    const [benarjwb, setBenarjwb] = useState(false)

    const cek1 = (jwb_db)=> {
        if (jawaban === jwb_db){
            setBenar1(true)
            setBenarjwb(true)
            setIncreCobaJwb(0)
        } else {
            setSalah1(true)
            if (increCobaJwb === 1){
                setSalah2(true)
            } else if (increCobaJwb === 2){
                setBenar1(true)
                setSalah3(true)
                setIncreCobaJwb(0)
            }
        }
        setIncreCobaJwb(increCobaJwb+1)
    }

    return (
        <div className="flex flex-col border-white">
            <div className='flex justify-end'>
                <input className='bg-transparent z-10 cursor-pointer text-green-500 border-green-950 transition hover:border-green-500 duration-500' onClick={() => speak({ text: props.datadb })}  type="button" value="    🔊    "/>
                <input onChange={(e) => setJawaban(e.target.value)}  className='text-lg -ml-11  pl-12 bg-green-900 text-green-500 rounded-lg placeholder-green-800 border-green-900 transition hover:border-green-500 duration-500' type="text" placeholder='jawaban' name="" id="" />
            </div>

            <div className="flex justify-between">
                {!benar1 &&  <input onClick={()=> cek1(props.datadb)}  className='bg-green-900  text-green-500 mt-2 font-black rounded-lg py-2 px-6 cursor-pointer border border-green-950 transition hover:border-green-500 duration-500' type="button" value="Cek"/>}
                {salah3 && <h1  className="text-lg text-green-500 ml-2 mt-4 px-2 rounded-md cursor-default border border-green-950 transition hover:border-green-500 hover:text-green-300 duration-500">{props.datadb}</h1>}
                <div className="flex flex-grow mt-2 pr-4 justify-start gap-12 flex-row-reverse  items-center">
                    {salah1 && <span className="text-lg">x</span>}
                    {salah2 && <span className="text-lg">x</span>}
                    {salah3 && <span className="text-lg">x</span>}
                    {benarjwb && <span className="text-lg">o</span>}
                </div>
            </div>
        </div>
    )
}

export default Persoal

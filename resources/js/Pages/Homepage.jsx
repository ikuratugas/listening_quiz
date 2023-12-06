import Navbar from "@/Components/Navbar"
import { data } from "autoprefixer";
import { useState } from "react";
import Persoal from "./Persoal";
import { Head } from '@inertiajs/react';

function Homepage(props){
    // const datajawaban = [
    //     {
    //         id:1,
    //         jawaban: "conciously"
    //     },
    //     {
    //         id:2,
    //         jawaban: "try"
    //     },
    //     {
    //         id:3,
    //         jawaban: "rahmat"
    //     },
    // ];

    // // increment percobaan bila salah | batas 3x percobaan
    // const [increCobaJwb, setIncreCobaJwb] = useState(0)

    // //
    // const [salah1, setSalah1] = useState(false)
    // const [salah2, setSalah2] = useState(false)
    // const [salah3, setSalah3] = useState(true)

    // const [benar1, setBenar1] = useState(false)

    // const cek1 = (jwb_db)=> {
    //     if (jawaban === jwb_db){
    //        // setBenar1(true)
    //         return
    //     } else {
    //         setSalah1(true)
    //         if (increCobaJwb === 1){
    //             setSalah2(true)
    //         } else if (increCobaJwb === 2){
    //             setIncreCobaJwb(0)
    //             setSalah3(false)
    //         }
    //     }
    //     setIncreCobaJwb(increCobaJwb+1)
    // }

    // const { speak } = useSpeechSynthesis();

    return (
        <>

            <div className="h-screen overflow-auto flex items-center flex-col gap-2 font-sans bg-gray-950">
            <Head title="Menu Utama" />
                {/* ini navbarnya */}
                <Navbar user={props.auth.user} />
                {/* batas navbar */}

                <div className="w-3/4 flex flex-wrap mt-2 justify-around gap-5  border-green-500">
                    {/* class tampilan */}
                    {props.data_db.map((db_jwb, index)=>{
                        return (
                            <div key={index}>
                                <Persoal datadb={db_jwb.jawaban}/>
                            </div>
                        )
                    })}
                    {/* batas class tampilan */}
                </div>
            </div>
        </>
    )

}

export default Homepage

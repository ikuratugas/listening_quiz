import React from 'react';
// import './Appl.css'
import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
// import navbar dari folder Components
import Navbar from '@/Components/Navbar'
// import untuk autosikasi
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';
import { Link } from "@inertiajs/react";

function Buatsoal(props) {
    // const datajawaban = [
    //     {
    //         id:1,
    //         jawaban: "Hearing"
    //     },
    //     {
    //         id:2,
    //         jawaban: "Try"
    //     },
    // ];

    const [tambahJawaban, setTambahJawaban] = useState("")

    const kirimJawaban = (e)=>{
        e.preventDefault()
        router.post('/buat-soal-tambah', {jawaban: tambahJawaban});
    }

    // ini untuk membuat text ke audio
    const { speak } = useSpeechSynthesis();
    return (
    < >
    <AuthenticatedLayout
            user={props.auth.user}
    >

    <div className='h-screen overflow-auto flex items-center flex-col gap-2 font-sans bg-gray-950'>
    {/* navbar */}
      {/* <Navbar /> */}
    {/* /navbar  */}

        <div className='my-12'>

            <h2 className='font-bold text-green-500 text-3xl '>Tambah Soal 📃</h2>

            <div>
            <form onSubmit={kirimJawaban}  className='w-full p-0 m-0' action="" method="post">
                <input onChange={(e) => setTambahJawaban(e.target.value)} className='h-10 text-lg rounded-lg my-5 bg-green-900 text-green-500 placeholder-green-800 border-green-900 transition hover:border-green-500 duration-500' type="text" placeholder='jawaban' name="" id="" />
                <div className='flex justify-end'>
                <button className='bg-green-900  text-green-500 -mt-1 font-black rounded-lg py-2 px-6 border border-green-950 transition hover:border-green-500 duration-500' type="submit">Buat 🖊️</button>
                </div>
            </form>
            </div>

            <div className=''>
                <ul className='flex flex-col gap-2 mt-4 py-2 px-2 rounded-lg border  border-green-900'>
                    {props.data_db.map((jwb, k)=>{
                    return (
                    <li key={k}>
                        <div className='flex justify-between py-4 px-2 text-base text-green-500 font-medium bg-green-900 rounded-lg hover:bg-green-800'>
                        {/* klik ini untuk mendengar suarnaya */}
                        <p className='cursor-pointer text-green-500  hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block  bg-clip-text' onClick={() => speak({ text: jwb.jawaban })}>{jwb.jawaban}</p>

                        {/* <Link href={route('deljwb')}  method='post'><a className="font-black text-xl cursor-pointer hover:text-green-300" >-x-</a></Link> */}

                        <Link href={route('answer.destroy')} method='post' data={{ id: jwb.id}}  className="font-black text-xl cursor-pointer hover:text-green-300"  as="button">-x-</Link>

                        </div>
                    </li>
                    )
                    })}
                </ul>
            </div>
        </div>
    </div>
    </AuthenticatedLayout>
    </>
    )
}

export default Buatsoal

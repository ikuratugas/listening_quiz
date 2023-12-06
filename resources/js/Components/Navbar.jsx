import { Link, } from "@inertiajs/react";
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';





function Navbar({user}){
    // console.log("ini user :", user)
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">イクラル</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    {!user ?
                        <>
                        <li><Link href={route('login')} as="button">⤵️ Login</Link></li>
                        <li><Link href={route('register')} as="button">⛩️ Register</Link></li>
                        </>
                        :
                        <>
                        <li>
                            <Link className="justify-between" href={route('buatsoal')} as="button">
                                📝 Buat Soal
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        {/* <li><Link>Settings</Link></li> */}
                        <li><Link href={route('logout')} method="post">🔚 Logout</Link></li>
                        </>
                    }
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-slate-900">
            <div>
                <Link href="/">
                    {/* <ApplicationLogo className="w-20 h-20 fill-current text-green-500" /> */}
                    <h1  className="text-4xl w-20 h-20 fill-current text-green-500">イクラル</h1>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-green-600 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}

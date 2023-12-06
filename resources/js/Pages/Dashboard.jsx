import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}

        >
            <Head title="Login Berhasil" />


            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-green-600 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Yeah.. Berhasil Login</div>
                    </div>
                </div>
            </div>



        </AuthenticatedLayout>
    );
}

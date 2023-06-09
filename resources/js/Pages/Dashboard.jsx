import AuthenticatedLayout from '@/Layouts/Auth';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight p-5 rounded-md " style={{background:"#5B06E5",color:"white"}}>Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg">
                        <h1 style={{ fontSize:"50px",textAlign:'left' }}>You're logged in!</h1>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

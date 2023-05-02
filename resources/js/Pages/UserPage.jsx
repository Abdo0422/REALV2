import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-white-600  dark:text-white-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                        
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-white-600  dark:text-white-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-white-600  dark:text-white-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <h1>userpage</h1>

                
        </>
    );
}

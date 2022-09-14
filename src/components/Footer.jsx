import { Link } from "react-router-dom";

export default () => {
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link to="" className="flex items-center mb-4 sm:mb-0">
                    <img src="/logo/logo-black.png" className="mr-3 h-8" alt="Shoe Logo" />
                </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link to="" className="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link to="" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                    </li>
                    <li>
                        <Link to="" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link
                to={''}
                onClick={() => window.location.href = 'https://muhammad-anas.vercel.app/'}
                className="hover:underline">Shoe™</Link>. All Rights Reserved.
            </span>
        </footer>
    );
}

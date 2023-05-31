import Link from 'next/link';

const Navbar = () => {
    return (
        <header className='z-20 w-full mx-auto px-10 max-w-screen-xl backdrop-blur-md fixed'>
            <nav className='my-5'>
                <Link className='font-bold text-4xl bg-white text-green-400 px-2 ' href={''} > NSMS </Link>
            </nav>
        </header>

    );
};
export default Navbar;

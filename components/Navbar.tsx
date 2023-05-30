import Link from 'next/link';

const Navbar = () => {
    return (
        <header className=' backdrop-blur-md fixed w-full'>
            <nav className='my-5 z-20  w-full'>
                <Link className='font-bold text-4xl bg-white text-green-400 px-2 ' href={''} > NSMS </Link>
            </nav>
        </header>

    );
};
export default Navbar;

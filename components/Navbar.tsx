import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='my-5 z-20 fixed backdrop-blur-md'>
            <Link className='font-bold text-4xl bg-white text-green-400 px-2 ' href={''} > NSMS </Link>
        </nav>
    );
};
export default Navbar;

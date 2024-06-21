import Icono from './assets/icono-60.png';

export default function Navbar() {
    return (
        <div className="mx-16 flex h-20 items-center justify-center md:justify-start">
            <img width="36" height="36" src={Icono} />
            <h1 className="ml-2 font-anonymouspro text-3xl font-semibold tracking-wide text-[#7E27A3]">
                YKN
            </h1>
        </div>
    );
}

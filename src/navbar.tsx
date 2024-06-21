import Icono from './assets/icono-60.png';

export default function Navbar() {
    return (
        <div className="h-20 flex md:justify-start items-center justify-center">
            <img width="36" height="36" src={Icono} />
            <h1 className="text-3xl ml-2 font-semibold tracking-wide text-[#7E27A3] font-anonymouspro">
                YKN
            </h1>
        </div>
    );
}

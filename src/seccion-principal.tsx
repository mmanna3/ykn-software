import Caja from './assets/caja.svg';

export default function SeccionPrincipal() {
    return (
        <div className="h-[100%] items-center md:mx-56 flex flex-col md:flex-row mx-24 md:gap-48 gap-8 my-12 md:my-0 text-left md:text-center">
            <div>
                <h1 className="text-left font-bold tracking-wide text-wrap w-full md:align-left text-3xl text-[#7E27A3] mb-6">
                    Software Boutique a tu medida.
                </h1>
                <p className="w-full text-lg pb-8 text-justify">
                    En YKN, entendemos las necesidades únicas de software de cada negocio. Somos una
                    empresa boutique que ofrece soluciones personalizadas y de alta calidad,
                    adaptadas a los objetivos específicos de cada cliente.
                </p>
                <p className="w-full text-lg text-justify pb-10">
                    Creamos software funcional, intuitivo, eficiente y atractivo. Nos mantenemos a
                    la vanguardia para asegurarnos de que nuestros clientes tengan las mejores
                    soluciones.
                </p>
            </div>
            <img className="size-48" src={Caja} />
        </div>
    );
}

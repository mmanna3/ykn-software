import Caja from './assets/caja.svg';

export default function SeccionPrincipal() {
    return (
        <div className="h-[100%] items-center flex flex-col mx-16 my-12 text-left md:text-center">
            <h1 className="font-bold tracking-wide text-wrap w-full text-3xl text-[#7E27A3] mb-6">
                Software Boutique. A tu alcance.
            </h1>
            <p className="align-left w-full text-lg pb-8 text-justify">
                En YKN, entendemos las necesidades únicas de software de cada negocio. Somos una
                empresa boutique que ofrece soluciones personalizadas y de alta calidad, adaptadas a
                los objetivos específicos de cada cliente.
            </p>
            <p className="align-left w-full text-lg text-justify pb-10">
                Creamos software funcional, intuitivo, eficiente y atractivo. Nos mantenemos a la
                vanguardia para asegurarnos de que nuestros clientes tengan las mejores soluciones.
            </p>
            <img className="size-48" src={Caja} />
        </div>
    );
}

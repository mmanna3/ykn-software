import Caja from './assets/caja.svg';

export default function SeccionPrincipal() {
    return (
        <div className="mx-16 my-12 flex h-[100%] flex-col items-center gap-8 text-left md:my-0 md:flex-row md:gap-32 md:text-center lg:gap-48 xl:mx-56">
            <div>
                <h1 className="md:align-left mb-8 w-full text-wrap text-left text-4xl font-bold leading-tight tracking-wide text-[#7E27A3]">
                    Software Boutique a medida
                </h1>
                <p className="w-full pb-10 text-justify text-lg tracking-wide text-gray-700 md:pb-10">
                    {/* En YKN, entendemos las necesidades únicas de software de cada negocio. Somos una
                    empresa boutique que ofrece soluciones personalizadas y de alta calidad,
                    adaptadas a los objetivos específicos de cada cliente. */}
                    Hace más de 10 años diseñamos software adaptado a las necesidades del cliente.
                    Mostramos software funcionando quincenalmente para que la transparencia en los
                    avances sea total. Trabajamos con scrum para hacer el doble de trabajo en la
                    mitad de tiempo.
                </p>
                <p className="w-full pb-10 text-justify text-lg tracking-wide text-gray-700">
                    {/* Creamos software funcional, intuitivo, eficiente y atractivo. Nos mantenemos a
                    la vanguardia para asegurarnos de que nuestros clientes tengan las mejores
                    soluciones. */}
                    Nos apoyamos en tests automatizados que simulan las interacciones del usuario
                    final para lograr la mejor calidad. En toda nuestra historia, nunca tuvimos un
                    cliente insatisfecho.
                </p>
            </div>
            <img className="size-48" src={Caja} />
        </div>
    );
}

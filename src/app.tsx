import './App.css';
import Footer from './footer';
import Navbar from './navbar';
import SeccionPrincipal from './seccion-principal';

function App() {
    return (
        <>
            <div className="w-full font-roboto">
                <div className="mx-auto w-full max-w-[1200px]">
                    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
                        <Navbar />
                        {/* <main className="overflow-auto text-negro"> */}
                        <main className="text-negro">
                            <SeccionPrincipal />
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

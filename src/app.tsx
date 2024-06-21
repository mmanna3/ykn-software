import './App.css';
import Footer from './footer';
import Navbar from './navbar';
import SeccionPrincipal from './seccion-principal';

function App() {
    return (
        <>
            <div className="w-full font-roboto">
                <div className="absolute">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="604"
                        height="624"
                        viewBox="0 0 604 624"
                        fill="none">
                        <g filter="url(#filter0_f_78_672)">
                            <path
                                d="M272.756 292.27C165.292 246.325 -32.7125 127.528 34.9856 19.8963C102.684 -87.7355 221.707 156.632 272.756 292.27Z"
                                fill="#7E27A3"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_f_78_672"
                                x="-309.802"
                                y="-337.746"
                                width="913.558"
                                height="961.016"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                />
                                <feGaussianBlur
                                    stdDeviation="165.5"
                                    result="effect1_foregroundBlur_78_672"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
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

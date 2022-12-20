import { useRouter } from "next/router";
import useQuiosco from "../hooks/useQuiosco";

const pasos = [
    { paso: 1, nombre: 'Menu', url: '/' },
    { paso: 2, nombre: 'Resumen', url: '/resumen' },
    { paso: 3, nombre: 'Datos y Total', url: '/total' },
]

const Pasos = () => {

    const { handleChangePaso } = useQuiosco();

    const calcularProgreso = () => {
        let valor = 100;
        if (router.pathname === "/") {
            valor = 5;
        } else if (router.pathname === '/resumen') {
            valor = 50;
        }
        return valor
    }

    const router = useRouter();

    return (
        <>
            <div className=" flex justify-between mb-5">
                {pasos.map(paso => (
                    <button
                        onClick={() => {
                            router.push(paso.url)
                            handleChangePaso(paso.paso)
                        }}
                        className="text-2xl font-bold"
                        key={paso.paso}
                    >
                        {paso.nombre}
                    </button>
                ))}
            </div>
            <div className="bg-gray-100 mb-10">
                <div
                    className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-10"
                    style={{ width: `${calcularProgreso()}%` }}
                >

                </div>
            </div>
        </>
    )
}

export default Pasos
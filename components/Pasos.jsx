import { useRouter } from "next/router";
import useQuiosco from "../hooks/useQuiosco";

const pasos = [
    { paso: 1, nombre: 'Menu', url: '/' },
    { paso: 2, nombre: 'Resumen', url: '/resumen' },
    { paso: 3, nombre: 'Datos y Total', url: '/total' },
]

const Pasos = () => {

    const { handleChangePaso, paso } = useQuiosco();

    const calcularProgreso = () => {
        return (paso / 3) * 100;
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
import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import { useRouter } from "next/router";


const Categoria = ({ categoria }) => {

    const router = useRouter();
    const handleClick = () => {
        router.push('/')
    }

    const { categoriaActual, handleClickCategoria } = useQuiosco();
    const { nombre, icono, id } = categoria;
    return (
        <div className={
            `${categoriaActual?.id === id && 'bg-amber-400'}
            flex items-center gap-4 w-full border p-5 hover:bg-amber-400 hover:cursor-pointer`}
            onClick={() => {
                handleClickCategoria(id)
                handleClick()
            }}
        >
            <Image
                width={70}
                height={70}
                src={`/assets/img/icono_${icono}.svg`}
                alt="Image Icono"
            />
            <p
                type="button"
                className="text-2xl font-bold"
            >
                {nombre}
            </p>
        </div>
    )
}

export default Categoria
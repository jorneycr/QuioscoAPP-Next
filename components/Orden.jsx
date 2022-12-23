import Image from "next/image";
import { formatearDinero } from "../helpers";

const Orden = ({ orden }) => {
    const { id, nombre, total, pedido } = orden;

    return (
        <div className=" border p-10 space-y-5">
            <h3 className="text-2xl font-bold">Orden: {id}</h3>
            <p className="text-lg my-10 font-bold">Cliente: {nombre}</p>
            <div className="">
                {pedido.map(plato => (
                    <div key={plato.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                        <div className="w-32">
                            <Image
                                width={400}
                                height={500}
                                src={`/assets/img/${plato.imagen}.jpg`}
                                alt={`Imagen Plato ${plato.nombre}`}
                            />
                        </div>
                        <div className="p-5 space-y2">
                            <h4 className="text-xl font-bold text-amber-500">{plato.nombre}</h4>
                            <p className="text-lg font-bold">Cantidad: {plato.cantidad}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="md:flex md:items-center md:justify-between my-10">
                <p className="mt-5 font-black text-4xl text-amber-500">
                    Total a pagar: {formatearDinero(total)}
                </p>
            </div>
        </div>
    )
}

export default Orden

const Orden = ({ orden }) => {
    const { id, nombre, total, pedido } = orden;

    return (
        <div className=" border p-10 space-y-5">
            <h3 className="text-2xl font-bold">Orden: {id}</h3>
            <p className="text-lg my-10 font-bold">Cliente: {nombre}</p>
        </div>
    )
}

export default Orden
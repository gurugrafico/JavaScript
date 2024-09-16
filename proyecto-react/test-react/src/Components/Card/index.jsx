const Card = () => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 text-black text-xs m-2 px-3 py-0.5">Categoría</span>
                <img className="w-full h-full object-cover rounded-lg"
                src="https://images.pexels.com/photos/245035/pexels-photo-245035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen"/>
                <div className="absolute top-0 right-0 flex justify-center bg-white w-6 h-6 rounded-full m-2 p-1">+</div>
            </figure>
            <p>
                <span>Nombre del artículo</span>
                <span>Precio</span>
            </p>
        </div>
    )
}

export default Card
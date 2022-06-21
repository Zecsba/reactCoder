import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import db from '../utils/FirebaseConfig'

const LeerDatos = () =>{

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [src, setSrc] = useState('')
    const [descriptionOne, setDescriptionOne] = useState('')
    const [descriptionTwo, setDescriptionTwo] = useState('')
    const [idCategory, setIdCategory] = useState('')

    const [error, setError] = useState(false)

    const objetoTelas = {
        title, 
        price, 
        stock, 
        src, 
        descriptionOne,
        descriptionTwo,
        idCategory
    }

    const hanleSubmit = (e) =>{
        e.preventDefault()
        if([title, price, stock, src, descriptionOne, descriptionTwo, idCategory].includes('') || idCategory == 0){
            setError(true)
            console.log('Todos los campos son obligatorios')
            return;
        }     

        subir()
        .then(result => alert('Se subio con exito el producto'))
        .catch(err => console.log(err))
    }


    const subir = async () =>{
        const products = doc(collection(db, 'products'))
        await setDoc(products, objetoTelas)
    }

    

    return(
        <div className="flex flex-col w-full">
            <form onSubmit={hanleSubmit} className="w-6/12 m-auto">
                {error && <p className="p-3 bg-red-700 text-white rounded-lg m-4 text-center uppercase">Todos los campos son obligatorios</p>} 
                    <div className="mb-5">
                        <label htmlFor="title" 
                        className="block text-gray-700 uppercase font-bold">Nombre de la tela:</label>
                        <input 
                        id="title" 
                        type="text" 
                        placeholder="Nombre de la tela" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="price" 
                        className="block text-gray-700 uppercase font-bold">Precio</label>
                        <input 
                        id="price" 
                        type="text" 
                        placeholder="price" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="stock" 
                        className="block text-gray-700 uppercase font-bold">Cantidad que quieres subir</label>
                        <input 
                        id="stock" 
                        type="stock" 
                        placeholder="stock de unidades" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="URL"
                        className="block text-gray-700 uppercase font-bold">URL de la imagen: </label>
                        <input
                        id="URL" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={src}
                        onChange={ (e) => setSrc(e.target.value)}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="descriptionOne" 
                        className="block text-gray-700 uppercase font-bold">Descripcion una: </label>
                        <textarea 
                        id="descriptionOne"  
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        placeholder="Describe los descriptionOne"
                        value={descriptionOne}
                        onChange={(e) => setDescriptionOne(e.target.value)}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="descriptionTwo" 
                        className="block text-gray-700 uppercase font-bold">Descripcion Dos del producto: </label>
                        <textarea 
                        id="descriptionTwo"  
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        placeholder="Describe el producto"
                        value={descriptionTwo}
                        onChange={(e) => setDescriptionTwo(e.target.value)}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="descriptionTwo" className="block text-gray-700 uppercase font-bold">Tu tela es:</label>
                        <select 
                        id="descriptionTwo" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value={idCategory} 
                        onChange={(e) => setIdCategory(e.target.value)}
                        >

                            <option value="0">Escoge</option>
                            <option value="rugosa">Rugosa</option>
                            <option value="fina">Fina</option>

                        </select>
                        
                    </div>

                    <input 
                    type="submit" 
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
                    value="Agregar paciente" />
            </form>
        </div>
    )
}

export default LeerDatos
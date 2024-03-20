import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import Footer from './components/Footer';


export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'Peaky Blinders' ]);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
    

    return (
        <>

            <h1>Busca tus Gifs Favoritos</h1>

    
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }
           <Footer></Footer>
        </>
    )
}

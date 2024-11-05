import { createContext, useEffect, useState } from 'react';
import { MyAxios } from './MyAxios';

//import axios from "axios"; ide nem kell mert a myaxiosba importáltam be


export const ApiContext = createContext("")
export const ApiProvider = ({children})=>{
    const [termekLista, setTermekLista]=useState([])

    //axiosszal aszinkron módon get lkérést injdítunk a végpont felé
    const getAdat= async (vegpont)=>{
        //várunk a szervernél meg kell adni egy végpontot ami az axiosgethez is beírjuk uganezt a végpontot, ez lesz az a végpont amit a termékek lekérésénél használunk
        //megcímezzük, erről a vpontról kérjükk le az adatokat, 
        //getadat egy fv ami megkapja ezt a végpontot itt történik meg a get kérés ezen a ponton
        //ha sikerül elérnem a vpontot akko r kapok egy választ. ha nem sikerül kapok egy huibaüzenetet
        try {
            const response = await MyAxios.get(vegpont);
            //console.log("adat: ", response.data);
            setTermekLista(response.data)
          } catch (err) {
            console.log("Hiba történt az adat elküldésekor. ", err);
          }finally{

          }
        }

        //let vegpont = "https://fakestoreapi.com/products"
        //USE EFFECT hook segitségével hívjuk meg az azinkron get kéréseket
        //== aszinkron hivások esetén ne végtelen sokszor fusson le a kérés csak akkor ha a függgőséglistában változás történik
        useEffect(()=>{
            getAdat("/products");
        },[])
    return (
        //összekkötöm contextet providerrel
        <ApiContext.Provider value={{termekLista}}>
            {children}
        </ApiContext.Provider>

    )
        
}
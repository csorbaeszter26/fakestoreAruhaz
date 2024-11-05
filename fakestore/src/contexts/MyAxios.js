//axios konfigurációs fileja lesz 
//nem axios get van mostantól hanem a myaxios, ez a saját izébigyonk

import axios from 'axios';

export const MyAxios = axios.create({
    //axios példány létrehozása és konfigurálása

    baseURL: 'https://fakestoreapi.com',
    timeout: 10000,
    headers: {
        'Content-Type' : 'application/json',
    },
}) ;
  


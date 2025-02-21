import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function About() {
    const products = [
        {code:'1', name: 'Laranja', categoria: 'Fruta', quantidade: 100},
        {code:'2', name: 'Banana', categoria: 'Fruta', quantidade: 100},
        {code:'3', name: 'Manga', categoria: 'Fruta', quantidade: 100},
        {code:'4', name: 'Maracujá', categoria: 'Fruta', quantidade: 100},
        {code:'5', name: 'Abacaxi', categoria: 'Fruta', quantidade: 100},
    ]

    return (
        <div>
            <h1>Tabela de produtos (Usando PrimeReact)</h1>
            <DataTable value={products} showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Nome" headerStyle={{backgroundColor: 'lightblue'}}></Column>
                <Column field="categoria" header="Categoria" headerStyle={{backgroundColor: 'lightblue'}}></Column>
                <Column field="quantidade" header="Quantidade" headerStyle={{backgroundColor: 'lightblue'}}></Column>
            </DataTable>
    
        </div>
        
    )
}


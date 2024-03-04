import * as React from 'react';
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css'

export default function Table() {
    const aqui = useFetch('https://valorant-api.com/v1/agents')
    const createDataState = dataState => {
        return {
            result: process(aqui.slice(0), dataState),
            dataState: dataState
        };
    };
    let initialState = createDataState({
        take: 8,
        skip: 0
    });
    const [color, setColor] = useState('#007bf7');
    const [result, setResult] = useState(initialState.result);
    const [dataState, setDataState] = useState(initialState.dataState);
    const dataStateChange = event => {
        let updatedState = createDataState(event.dataState);
        setResult(updatedState.result);
        setDataState(updatedState.dataState);
    };
    
    const displayIconCell = (props) => {
        return props.dataItem.displayIcon ? (<img className='icon' src={props.dataItem.displayIcon} alt={props.dataItem.displayName} style={{ maxWidth: '100%', height: 'auto' }} />) : null;
    };
    
    const fillArray = () => {
        setResult(initialState.result)
        setColor('green');
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>

                <h2 style={{ justifySelf: 'center', margin: '0' }}>Agentes Valorant</h2>
                <Button id='botao' onClick={() => {fillArray()}} style={{ marginLeft: 'auto', backgroundColor: color, color: 'white' }}>
                    Carregar Agentes
                </Button>
            </div>
            <Grid data={result} {...dataState} onDataStateChange={dataStateChange} sortable={true} pageable={true} filterable={true}>
                <Column field="displayIcon" title="Ícone" cell={displayIconCell} width="80px" filterable={false}/>
                <Column field="uuid" title="ID" width="250px" />
                <Column field="displayName" title="Nome" width="200px" />
                <Column field="developerName" title="Desenvolvedor" width="200px" />
                <Column field="description" title="Descrição" />
            </Grid>
        </div>
    )
};
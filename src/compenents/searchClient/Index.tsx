import React, {useState} from 'react';
import axios from "axios";
import {Input, TextField} from '@mui/material';
import styles from '@/styles/disable.module.scss'

const Index = () => {
    const [number,setNumber] = useState(999999999)
    const getNumber = (event:any )=>{
        setNumber(event.target.value)
    }
    const getInfo=async ():Promise<any>=>{
        const result = await axios.get(`https://api.exline.systems/public/v1/tracking?waybill=${number}`)
        console.log(result.data)
    }

    console.log(number)
    return (
        <div>
            <TextField type={'number'}
                       label="Номер номеклатуры"

                       variant="filled"
                       className={styles.numberInput}
                       onChange={(e) => setNumber(parseInt(e.target.value))}
                       value={number}

            />
            <button onClick={()=>getInfo()}>click</button>
        </div>
    );
};

export default Index;
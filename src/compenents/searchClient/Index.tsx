import React, {useState} from 'react';
import axios from "axios";
import {Button, Input, Modal, TextField, Typography} from '@mui/material';
import styles from '@/styles/disable.module.scss'
import {Box} from "@mui/system";


const Index = () => {
    const [number,setNumber] = useState(999999999)
    const [waybill ,setWaybill ]=useState<any>({})
    const [open, setOpen] = React.useState(false);
    console.log(waybill)
    const getNumber = (event:any )=>{
        setNumber(event.target.value)
    }
    const handleClose = () => setOpen(false);
    const getInfo=async ():Promise<any>=>{
        const result = await axios.get(`https://api.exline.systems/public/v1/tracking?waybill=${number}`)
        setWaybill(result.data.waybill)
        setOpen(true)
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#fff',
        border: '2px solid #fff',
        boxShadow: 1000,
        p: 4,
        borderRadius:'20px',
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'column',
        height:200
    };
    return (
        <div className={styles}>
            <TextField type={'number'}
                       label="Номер номеклатуры"

                       variant="filled"
                       color={'secondary'}
                       className={styles.numberInput}
                       onChange={(e) => setNumber(parseInt(e.target.value))}
                       value={number}

            />
            <Button onClick={()=>getInfo()}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Номер накладной {waybill.code}
                    </Typography>
                    <p>Отправитель:{waybill.sender?.title}</p>
                    <p>Адресс отправления:{waybill.dest_region} {waybill.orig_address}</p>
                    <p>Получатель:{waybill.receiver?.title}</p>
                    <p>Вес поссылки:{waybill.weight}</p>
                </Box>
            </Modal>
        </div>
    );
};

export default Index;
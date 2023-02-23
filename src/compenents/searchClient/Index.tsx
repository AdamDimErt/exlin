import React, {useState} from 'react';
import axios from "axios";
import {Button, Input, Modal, TextField, Typography} from '@mui/material';
import styles from '@/styles/disable.module.scss'
import {Box} from "@mui/system";


const Index = () => {
    const [number,setNumber] = useState(999999999)
    const [waybill ,setWaybill ]=useState<any | null>({})
    const [open, setOpen] = React.useState(false);
    console.log(waybill)

    console.log(waybill)
    const getNumber = (event:any )=>{
        setNumber(event.target.value)
    }
    const handleClose = () => setOpen(false);
    const getInfo=async ():Promise<any>=>{
        const result = await axios.get(`https://api.exline.systems/public/v1/tracking?waybill=${number}`)
        if (result.data && result.data.waybill) {
            setWaybill(result.data.waybill)
            setOpen(true)
        } else {
            setWaybill(null)
        }
    }
    console.log(waybill)

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: 900,
        bgcolor: '#fff',
        border: '2px solid #fff',
        boxShadow: 1000,
        p: 4,
        borderRadius:'20px',
        display:'flex',
        justifyContent:'space-around',
        flexDirection:'row',

        height:300,
        '@media (max-width: 600px)': {
            flexDirection: 'column',
            height: 'auto',
            maxWidth: 300,
        },
        '@media (max-width: 400px)': {
            width: 300,
            maxWidth: '100%',
        },
        '@media (max-width: 360px)': {
            width: 200,
            maxWidth: '100%',
        },
    };
    return (
      <>
<div className={styles.numberBox}>
    <TextField type={'number'}
               label="Номер номеклатуры"

               variant="filled"
               color={'secondary'}
               className={styles.numberInput}
               onChange={(e) => setNumber(parseInt(e.target.value))}
               value={number}

    />
    <Button style={{color:'#Fff'}} onClick={()=>getInfo()}>Посмотреть Накладную</Button>

</div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
    <div className={styles.box}>
        <Typography variant="h6" component="h2">
            Детали накладной
        </Typography>
        <p id="modal-modal-title">
            Номер накладной: {waybill?.code}
        </p>
        <p>Отправитель:{waybill?.sender?.title}</p>
        <p>Адресс отправления:{waybill?.dest_region} {waybill?.orig_address}</p>
        <p>Получатель:{waybill?.receiver?.title}</p>
        <p>Вес поссылки:{waybill?.weight}</p>
    </div>
                    <div className="">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Детали доставки
                        </Typography>
                        {waybill?.deliveries?.map((delivery:any) => (
                            <div className={styles.searchBox} key={delivery.status}>
                               <p>Статус: {delivery.status == 'success'?  'Доставленно':  'Не доставленно'}</p>
                                <p>{delivery.status == 'success'? `Принял товар:${delivery.receiver_name}`:  `Причина недоставки${delivery.description}`}</p>
                                <div className={delivery.status == 'success'?styles.underlineGreen:styles.underlineRed}></div>
                            </div>

                        ))}
                    </div>
                </Box>

            </Modal>
</>
    );
};

export default Index;
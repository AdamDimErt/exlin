import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import styles from '@/styles/calc.module.scss'
import {Button, TextField} from "@mui/material";


type City = {
    id: number;
    title: string;
    cached_path: string;
};
type IOption ={
    value: string | null;
    label: string | null;
}
const serviceOption:IOption[]  =[
    { value: 'standard ', label: 'Стандарт' },
    { value: 'express', label: 'Экспресс' },

]

type ApiResponse = {
    regions: City[];
    meta: {
        total: number;
    };
};

type FormData = {
    origin: City | null;
    destination: City | null;
    weight: number ;
    height: number;
    length: number;
    width:number;
    service: string ;
    declared_value:number;
};
type IPrice = {
    "price": number|null|undefined
    "fuel_surplus": number|null|undefined,
    "declared_value_fee": number|null|undefined,
    "human_range": string
    "min": string
    "max": string
}

const Index = () => {
    const [sendCities, setSendCities] = useState<City[]>([]);
    const [getCities, setGetCities] = useState<City[]>([]);
    const [price,setPrice] = useState<IPrice | undefined | null | any>({})

    console.log(price)
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();




    const SendCities = async (inputValue: string) => {
        try {
            const response = await axios.get<ApiResponse>(
                `https://api.exline.systems/public/v1/regions/origin?title=${inputValue}`
            );
            setSendCities(response.data.regions);
        } catch (error) {
            console.error(error);
        }
    };
    const GetCities = async (inputValue: string) => {
        try {
            const response = await axios.get<ApiResponse>(
                `https://api.exline.systems/public/v1/regions/destination?title=${inputValue}`
            );
            setGetCities(response.data.regions);
        } catch (error) {
            console.error(error);
        }
    };
    const handleInputGetChange = (inputValue: string) => {
        GetCities(inputValue);
    };
    const handleInputSendChange = (inputValue: string) => {
        SendCities(inputValue);
    };

    const PostData = async (data:FormData)=>{
        try {
            console.log(data)

            const response = await
                axios.get(`https://api.exline.systems/public/v1/calculate?origin_id=
                ${data.origin?.id}
                &destination_id=${data.destination?.id}
                &service=${data.service}
                &weight=${data.weight}
                &w=${data.width}
                &l=${data.length}
                &h=${data.height}
                &declared_value=${data.declared_value}`)

            setPrice(response.data.calculation)
        }catch (e){
            console.log(e)
        }


    }
    // @ts-ignore
    return (
        <div id={'#Calc'} className={styles.calc}>
            <h1 className={'title'}>Калькулятор</h1>
            <div className={styles.calc__container}>
                <form className={styles.calc__form} onSubmit={handleSubmit((data) => PostData(data))}>
                    <div className={styles.calc__box}>
                        {/*Поиск населенных пунктов отправки */}
                            <div className={styles.calc__box_input}>
                                <label htmlFor="">От куда</label>
                                <Controller
                                    name="origin"
                                    control={control}
                                    defaultValue={null}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={sendCities}
                                            getOptionLabel={(option) => option.title}
                                            getOptionValue={(option) => option.id.toString()}
                                            isClearable
                                            placeholder="Выберите город отправления"
                                            onInputChange={handleInputSendChange}
                                            className={styles.calc__inputMap}

                                            noOptionsMessage={() => "Нету городов"}
                                        />
                                    )}
                                />
                                {errors.origin && <p className={styles.calc__error}>Поле "Город отправления" обязательно для заполнения</p>}
                            </div>
                        {/*Поиск населенных пунктов доставки*/}
                            <div className={styles.calc__box_input}>
                                <label htmlFor="">куда</label>
                                <Controller
                                    name="destination"
                                    control={control}
                                    defaultValue={null}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={getCities}
                                            getOptionLabel={(option) => option.title}
                                            getOptionValue={(option) => option.id.toString()}
                                            isClearable
                                            placeholder="Выберите город назначения"
                                            onInputChange={handleInputGetChange}
                                            className={styles.calc__inputMap}
                                            noOptionsMessage={() => "Нету городов"}
                                        />
                                    )}
                                />
                                {errors.destination && <p className={styles.calc__error}>Поле "Город доставки" обязательно для заполнения</p>}
                            </div>
                    </div>
                    {/*Выбор сервиса доставки*/}
                    <label htmlFor="">Услуга</label>
                    <Controller
                        name="service"
                        control={control}
                        defaultValue={''}
                        render={({ field: { onChange, value } }) => (
                            <Select
                                options={serviceOption}
                                value={serviceOption.find((option) => option.value === value)}
                                onChange={(option:any) => onChange(option.value)}
                                placeholder="Выберите тип доставки"
                                className={styles.calc__inputMap}
                                noOptionsMessage={() => "Нету городов"}
                            />
                        )}
                    />
                    {/*Вес отправления в кг.*/}
                    <div className={styles.calc__value}>
                        <label className={''} htmlFor="">Введите значние</label>
                        <Controller
                            name="weight"
                            control={control}
                            defaultValue={0.3}

                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    type="number"
                                    sx={{width:'320px'}}
                                    placeholder="Введите вес"
                                    className={styles.calc__input}
                                    value={value}
                                    variant="filled"
                                    label="Введите вес"
                                    onChange={(event) => onChange(Number(event.target.value))}
                                    InputProps={{
                                        inputProps: {
                                            min: 0.3
                                        }
                                    }}
                                />
                            )}
                        />
                        <Controller
                            name="width"
                            control={control}

                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    type="number"
                                    placeholder="Введите ширину"
                                    className={styles.calc__input}
                                    value={value}
                                    sx={{width:'320px'}}
                                    variant="filled"
                                    label="Введите ширину"
                                    onChange={(event) => onChange(Number(event.target.value))}
                                    InputProps={{
                                        inputProps: {
                                            min: 0
                                        }
                                    }}
                                />
                            )}
                        />
                        <Controller
                            name="height"
                            control={control}

                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    type="number"
                                    placeholder="Введите высоту"
                                    className={styles.calc__input}
                                    value={value}
                                    sx={{width:'320px'}}
                                    variant="filled"
                                    label="Введите высоту"
                                    onChange={(event) => onChange(Number(event.target.value))}
                                    InputProps={{
                                        inputProps: {
                                            min: 0
                                        }
                                    }}
                                />
                            )}
                        />
                        <Controller
                            name="length"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    type="number"
                                    placeholder="Введите длину"
                                    className={styles.calc__input}
                                    value={value}
                                    sx={{width:'320px'}}
                                    variant="filled"
                                    label="Введите длину"
                                    onChange={(event) => onChange(Number(event.target.value))}
                                    InputProps={{
                                        inputProps: {
                                            min: 0
                                        }
                                    }}
                                />
                            )}
                        />

                        <Controller
                            name="declared_value"
                            control={control}
                            defaultValue={15000}
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    type="number"
                                    placeholder="Объявленная стоимость"
                                    className={styles.calc__input}
                                    value={value}
                                    sx={{width:'320px'}}
                                    variant="filled"
                                    label="Объявленная стоимость"
                                    onChange={(event) => onChange(Number(event.target.value))}
                                    InputProps={{
                                        inputProps: {
                                            min: 15000
                                        }
                                    }}
                                />
                            )}
                        />

                        <Button color={'success'} sx={{width:'300px',marginTop:'20px'}} variant={'outlined'} type={'submit'} >Посчитать</Button>
                    </div>

                </form>

                <div className={styles.calc__price}>
                    { !price.price? <div>

                        <h2 >Стоимость доставки еще не расчитана</h2>
                        выберете пункты доставки и вес товара
                    </div>:<div className={styles.calc__price__allPrice}>
                        <h3>общая стоимость</h3>
                        <h1 >{price.price + price.declared_value_fee+price.fuel_surplus}<span>тг</span></h1>
                        <p>сумма доставки : <span style={{fontWeight:'bold',fontSize:18}}>{price.price}</span>тг</p>
                        <p>Топплинвая надбавка: <span style={{fontWeight:'bold',fontSize:18}}>{price.fuel_surplus}</span>тг</p>
                        <p>Cбор за ценность в {price.declared_value_fee*100} тг: <span style={{fontWeight:'bold',fontSize:18}}>{price.declared_value_fee} </span>тг</p>
                        <p>(Сбор за ценность взимается с каждой единицы отправления, минимальный размер ценности одного отправления 15000 тенге)</p>
                    </div>}

                </div>


            </div>
        </div>

    );
};

export default Index;

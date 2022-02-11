import './country.css'
import { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { countries } from '../../api/dataApi';

export default ({handleCountryChange})=>{

    let [getCountries, setGetCountries] = useState([]);

    useEffect(() => {
        async function allCountries() {
            setGetCountries(await  countries())
        }
        allCountries()
    }, [setGetCountries])
    
    return <div>
        <FormControl className='formControl'>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value=''>Global</option>

                {getCountries.map((country,i)=>{
                    return <option key={i} value={country}>{country}</option>
                })}
            </NativeSelect>
        </FormControl>
    </div>
}
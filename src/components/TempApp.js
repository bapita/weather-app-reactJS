import React, {useState, useEffect} from 'react';
import "./css/style.css";

const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Kolkata");

    useEffect(() => {
        const fetchApi = async () => { // returning promise. 
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=dbe7ec7fd358d632555d8a6d51fb087d`;
            const response = await fetch(url); // either pass or fail --> as promise
            //console.log(response);
            const responsejson = await response.json(); 
            console.log(responsejson);
            setCity(responsejson.main);
        }

        fetchApi();
    },[search])
    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                        className="inputFeild"
                        placeholder="City name"
                        onChange={(event) => { setSearch(event.target.value) }} />
                </div>
            {
                !city ? (
                    <p className="noData"> No Data Found!</p>
                ) : (
                <>
                <div className="info">
                <h2 className="location">
                    <i className="fas fa-street-view"></i>{search}
                </h2>
                <h1 className="temp">
                  {city.temp}°C     
                </h1>
                <h3 className="tempmin_max">
                   Min : {city.temp_min}°Cel || Max : {city.temp_max}°Cel 
                </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </>
                )
            }
            
            
        </div>
        </>
    );
}

export default TempApp;
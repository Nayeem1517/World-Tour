import './country.css'
const Country = ({country}) => {
    console.log(country)
    const {name,flags,population} = country;
    return (
        <div className='country'>
            <h2>Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <h2>Population : {population}</h2>
        </div>
    );
};

export default Country;
import './home.css'
import {city} from './header'
export default function Home ()
{
    var congestion='82%' 
    var city;
    return (<div>
    <div className='cityheader'>
    <h1 className='cityheadertitle' >welcome to traffic updates on {city}</h1  >
    <h4 className='cityheadertitle'>road name:100ft road ayyappa society</h4> 
    </div>
        <div className='home_container'>
            <div className='countbox'>
                 <p className='numbers'>Total Vehicles</p>
                 <p className='numbers'>500</p>
                 
            </div>
            <div className='speedbox'>
                <p className='numbers'>Avg Speed</p>
                <p className='numbers'>55 Kmph </p>
            </div>
            <div className='congestionbox'>
                <p className='numbers' >Congestion Level</p>
                <p className='numbers' name='congestion' >{congestion}</p>
                
            </div>
        </div>
        {/* <div className='cityheadertitle' >
        {congestion>='80%'?<h1>Avoiding this route saves time</h1>:<h1>use this road </h1> }
        </div> */}
       
       </div>
    );
}
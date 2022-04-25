import FlagBox from "../FlagBox/FlagBox";
import InfoBox from "../InfoBox/InfoBox"

const CountryDetails = (props) => {
    return ( 
        <section>
            <FlagBox/>
            <div>
                <InfoBox/>
                <InfoBox/>
                <InfoBox/>
                <InfoBox/>
                <InfoBox/>
                <InfoBox/>
                <InfoBox/>
            </div>
        </section>
     );
}
 
export default CountryDetails;
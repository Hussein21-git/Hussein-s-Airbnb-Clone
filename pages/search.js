import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

function Search({searchResults}) {
    const router = useRouter();
    // es6 destructuring 
    const { location, startDate, endDate, noOfGuests} = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`
    return (
        <div>
            <Header placeholder={`${location}| ${range} | ${noOfGuests} guests`}/>
            <main className="flex">
                <section className="flec-grow pt-14 px-5">
                    <p className="text-xs">300+ stays - {range} - for {noOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">stays in {location} </h1>
                    <div className="hidden lg:inline-flex mb-6 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancelation Flexibility</p>
                        <p className="button">Type of Place </p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>

                     <div classname="flex flex-col">
                         {searchResults.map(
                             ({img, location, title, description, star, price, total}) => (
                        <InfoCard 
                        key={img}
                         img={img}
                         location={location}
                         title={title}
                         description={description}
                         star={star}
                         price={price}
                         total={total}

                        />
                    ))}
                     </div>
                    
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Search
export async function getServerSideProps(){
    const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());
    return {
        props: {
          searchResults,
        },
    };
}

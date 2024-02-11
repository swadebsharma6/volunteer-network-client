import { useLoaderData } from "react-router-dom";
import Banner from "../../../components/Shared/Banner";
import Activities from "../Activites";


const Home = () => {
  const activities = useLoaderData();
    return (
        <>
          <Banner/>
        <main className="lg:-mt-32 md:-mt-20 -mt-10">
          <div className="max-w-7xl mx-auto mb-16">
           <Activities activities={activities}/>
          </div>
        </main>
        </>
    );
};

export default Home;
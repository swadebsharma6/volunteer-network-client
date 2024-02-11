import ActCard from "./ActCard";


const Activities = ({activities}) => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {activities.map(act => <ActCard
                key={act._id}
                act={act}
                ></ActCard>)}
        </div>
    );
};

export default Activities;
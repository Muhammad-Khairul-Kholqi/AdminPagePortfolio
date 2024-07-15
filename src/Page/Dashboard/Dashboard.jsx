import Header from "./Header";
import DataAmount from "./Card/DataAmount";

const Dashboard = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl">Dashboard</h1>
            <Header />
            <DataAmount />
        </div>
    )
}

export default Dashboard;
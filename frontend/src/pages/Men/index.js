import { Typography } from "@mui/material";
import Layout from "../../components/Layout";
import Filter from "../../components/Filter";
import "./men.css";

const Mens = () => {
    return (
        <>
            <Typography className="collectionTitle" variant="h2" marginTop={15}>
                men's clothing
            </Typography>
            <Filter></Filter>
            <Layout />
        </>
    );
}

export default Mens;
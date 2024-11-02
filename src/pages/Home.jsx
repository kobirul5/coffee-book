import React from 'react';
import Banner from '../compnents/Banner';
import Heading from '../compnents/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import CategoryTab from '../compnents/CategoryTab';

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Heading title={"Browse coffee by category"} subtitle={"this is subtitle"} ></Heading>
            <CategoryTab categories={categories}></CategoryTab>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
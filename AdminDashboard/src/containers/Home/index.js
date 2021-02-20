import React from 'react';
import Layout from '../../components/layouts/index';
import { Jumbotron } from 'react-bootstrap';
/**
* @author
* @function Home
**/

//localStorage.setItem("logged") = false;
const Home = (props) => {
    return (
        <Layout>
            <Jumbotron style={{ margin: '4rem', background: 'white' }} className="text-center">
                <h1>welome to admin Dashboard</h1>
                <p>Here you can List all CVs or specific user CVs and many more.</p>
            </Jumbotron>
        </Layout>
    )

}

export default Home
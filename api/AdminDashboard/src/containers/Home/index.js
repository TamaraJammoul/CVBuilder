import React from 'react';
import Layout from '../../components/layouts/index';
import { Jumbotron } from 'react-bootstrap';
/**
* @author
* @function Home
**/

const Home = (props) => {
    return (
        <Layout>
            <Jumbotron style={{ margin: '4rem', background: 'white' }} className="text-center">
                <h1>welome to admin Dashboard</h1>
                <p>Qui esse enim est sit aliquip. Ad eiusmod nisi in enim qui et sit fugiat id quis. Irure ad Lorem fugiat do ad mollit ullamco reprehenderit ad amet. Ut proident minim esse aliqua consequat reprehenderit culpa nostrud excepteur tempor pariatur pariatur. Veniam elit minim proident sit ex eiusmod nostrud culpa tempor. Anim cupidatat reprehenderit culpa consequat sunt cupidatat reprehenderit culpa. Pariatur ipsum dolor est sunt laborum cillum amet esse pariatur.</p>
            </Jumbotron>
        </Layout>
    )

}

export default Home
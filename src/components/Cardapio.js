import Cards from './Cards';
import axios from 'axios';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import styles from '../styles/Menu.module.css';
import { Row, Col, Container } from 'react-bootstrap';
import react, { useState } from 'react';

require('dotenv').config()

const axiosInstance = axios.create({
    baseURL: 'https://front-end-test-app.s3.amazonaws.com/',

});
export default function Menu({ filter }) {
    const [id, setId] = useState();
    const deleted = [];
    return (
        <div>
            <AxiosProvider instance={axiosInstance}>
                <Get url='/menu.json'>
                    {(error, response, isLoading, makeRequest, axios) => {
                        if (response !== null && response !== undefined) {
                            const flat = response.data.flatMap(({ products, ...o }) => products.map(p => ({ ...o, ...p })));
                            const cards = flat.map((item, index) => {
                                const isDeleted = deleted.filter((item) => item == index);
                                const lowI = item.title.toLowerCase();
                                const lowF = filter.toLowerCase();
                                if (lowI.includes(lowF)) {
                                    return <Cards title={item.title} description={item.description} picture={item.thumbnail} price={item.price} key={index} id={index} setId={setId} />
                                } else if (lowF === '') {
                                    return <Cards title={item.title} description={item.description} picture={item.thumbnail} price={item.price} key={index} id={index} setId={setId} />
                                }
                            });
                            return (
                                <Container>
                                    <h1>Cardápio</h1>''
                                    <Row>
                                        <Col>
                                            <div className={styles.menu}>{cards}</div>
                                        </Col>
                                    </Row>
                                </Container>
                            )
                        } else if (isLoading) {
                            return (<img src='img/burger.png' alt='Um hamburguer loading' className={styles.loading} />)
                        } else {
                            return null;
                        }
                    }}
                </Get>
            </AxiosProvider>
        </div >
    )
}

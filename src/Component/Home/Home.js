import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Home.css'
const Home = () => {
    const [user, setUser] = useState([]);
    console.log(user);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(response => response.json())
            .then(data => {
                setUser(data);

            })
    }, [])
    
    const handleAll = (e) => {
        {
            user.map((user) => {
                document.getElementById('person').style.display = 'block';
                document.getElementById('price').style.display = 'none';
                document.getElementById('date').style.display = 'none';
                const person = document.getElementById('person');
                let newItem = document.createElement('p');
                newItem.innerHTML = ` Item: ${user.name} <br> Price: ${user.price} <br> Date: ${user.date}
                     `;
                person.appendChild(newItem);
                
            })
        }
        e.preventDefault();
    }
    const handlePrice = (e) => {
        {
            user.map((user) => {
                document.getElementById('price').style.display = 'block';
                document.getElementById('person').style.display = 'none';
                document.getElementById('date').style.display = 'none';
                const price = document.getElementById('price');
                let newItem = document.createElement('p');
                newItem.innerHTML = ` Price: ${user.price} <br> 
                     `;
                price.appendChild(newItem);
            })
        }
        e.preventDefault();
    }
    const handleDate = (e) => {
        {
            user.map((user) => {
                document.getElementById('date').style.display = 'block';
                document.getElementById('person').style.display = 'none';
                document.getElementById('price').style.display = 'none';

                const date = document.getElementById('date');
                let newItem = document.createElement('p');
                newItem.innerHTML = ` Date: ${user.date} <br> 
                     `;
                date.appendChild(newItem);
            })
        }
        e.preventDefault();
    }

    return (
        <div>
            <Header />

            <section className="homeBody">
                <div className="filterOption">
                   
                    <h3>Product filter</h3>
                    <button onClick={handleAll}>All</button>
                    <button onClick={handlePrice}>Price</button>
                    <button onClick={handleDate}>Date</button>

                    <div id="person">

                    </div>
                    <div id="price">

                    </div>
                    <div id="date">

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;
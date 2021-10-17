import React from 'react';
import { Dimensions } from 'react';
import { FlatList } from 'react';
import { View, Text, StyleSheet } from 'react';

  
const data = [
  {id: 'a', value: 'A'},
  {id: 'b', value: 'B'},
  {id: 'c', value: 'C'},
  {id: 'd', value: 'D'},
  {id: 'e', value: 'E'},
  {id: 'f', value: 'F'},
];
const numColumns = 3;
const size = 300;


const styles = {
      margin: '0.5em',
    paddingLeft: 0,
    listStyle: 'none'
  };

function Grid(props) {
  return (
    <p>Enter your name:</p>
  );
}

function App() {
  const users = [
    {
      id: '01',
      name: 'John Deo',
      email: 'john@gmail.com',
      phone: '202-555-0163'
    },
    {
      id: '02',
      name: 'Brad Pitt',
      email: 'fightclud@gmail.com',
      phone: '202-555-0106'
    },
  ];

  const joinList = [users, users];

  return (
    <div>
        <ul>
            {joinList.map((nestedItem, i) => (
              <ul key={i}>
                <h3> List {i} </h3>
                {nestedItem.map(data => (
                  <li key={data.id}>
                    <div>{data.id}</div>
                    <div>{data.name}</div>
                    <div>{data.email}</div>
                    <div>{data.phone}</div>
                  </li>
                ))}
              </ul>
            ))}
          </ul>       
    </div>
  );
}
  
export default App;


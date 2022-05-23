import React from 'react';
import { Component1 } from '../componets/Component1';
import Component2 from '../componets/Component2';
import { Component3 } from '../componets/Component3';
import '../styles/styles.css'

const AppContainers = () => {
    return (
        <div>
            <Component1/>
            <Component2/>
            <Component3/>
        </div>
    );
};

export default AppContainers;
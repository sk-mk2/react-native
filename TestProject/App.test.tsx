import React, { ReactElement } from 'react';
import renderer from 'react-test-renderer';

/*function testComponents(component:any){
    it(`${component.name} components without crashing`, () => {
        //このエラーわからん
        const rendered = renderer.create(<component/>).toJSON();
        expect(rendered).toBeTruthy();
    });
}*/

import App from './App';
it(`App components without crashing`, () => {
    //このエラーわからん
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
});
import Greetings from './components/Greeting';
it(`Greetings components without crashing`, () => {
    //このエラーわからん
    const rendered = renderer.create(<Greetings />).toJSON();
    expect(rendered).toBeTruthy();
});
import InputText from './components/InputText';
it(`InputText components without crashing`, () => {
    //このエラーわからん
    const rendered = renderer.create(<InputText />).toJSON();
    expect(rendered).toBeTruthy();
});


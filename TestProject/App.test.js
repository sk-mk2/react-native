import React from 'react';
import renderer from 'react-test-renderer';
function testComponents(component){
    it(`${component.name} components without crashing`, () => {
        const rendered = renderer.create(<component />).toJSON();
        expect(rendered).toBeTruthy();
    });
}

import App from './App';
testComponents(App);
import Greetings from './components/Greeting.js';
testComponents(Greetings);
import Style from './components/Style.js';
testComponents(Style);
import InputText from './components/InputText.js';
testComponents(InputText);


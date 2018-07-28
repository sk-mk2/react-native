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
import Blink from './components/Blink.js';
testComponents(Blink);
import Style from './components/Style.js';
testComponents(Style);
import Dimension from './components/Dimension.js';
testComponents(Dimension);
import Rayout from './components/Rayout.js';
testComponents(Rayout);
import InputText from './components/InputText.js';
testComponents(InputText);


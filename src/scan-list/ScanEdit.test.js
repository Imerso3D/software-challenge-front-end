import React from 'react';
import ReactDOM from 'react-dom';
import ScanEdit from './ScanEdit';
import {createUserData} from "../data";
import ScanRowData from "./ScanRowData";
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

class TestResult {
    counter = 0;
    scan = null;

    constructor() {
        this.testAddFunction = this.testAddFunction.bind(this);
    }

    testAddFunction(scan) {
        this.scan = scan;
        this.counter++;
    };
}

function scanEditElement(scan = {}, addFunction = new TestResult().testAddFunction) {
    return <ScanEdit
        scan={scan}
        users={createUserData()}
        addFunction={addFunction}
    />;
}

describe('test basic rendering', () => {
    it('renders for new scan creation', () => {
        const div = document.createElement('div');
        ReactDOM.render(scanEditElement(), div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders for scan eddition', () => {
        const div = document.createElement('div');
        const scan = new ScanRowData(1, 'name', 1.0, 2.0, 0, "test user");
        ReactDOM.render(scanEditElement(scan), div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('test saving edit results', () => {
    it('save for initialy empty form (add scan)', () => {
        const testResult = new TestResult();
        const scanEditor = shallow(scanEditElement({}, testResult.testAddFunction));

        // Save for not filled form
        scanEditor.find('.SaveButton').simulate('click');
        expect(testResult.counter).toBe(0);

        // Save for filled form
        scanEditor.find('.NameInput').simulate('change', {target: {value: 'testName'}});
        scanEditor.find('.SaveButton').simulate('click');
        expect(testResult.counter).toBe(1);
        expect(testResult.scan).toHaveProperty('name', 'testName');
        expect(testResult.scan).toHaveProperty('elevationMax', 0);
        expect(testResult.scan).toHaveProperty('elevationMin', 0);
        expect(testResult.scan).toHaveProperty('userId', 0);
        expect(testResult.scan).toHaveProperty('userName', 'Linus Torvalds');
    });

    it('save for existing scan (update scan)', () => {
        const testResult = new TestResult();
        const scan = new ScanRowData(1, 'testName', 1.0, 2.0, 0, "Linus Torvalds");
        const scanEditor = shallow(scanEditElement(scan, testResult.testAddFunction));

        scanEditor.find('.NameInput').simulate('change', {target: {value: 'testName'}});
        scanEditor.find('.SaveButton').simulate('click');
        expect(testResult.counter).toBe(1);
        expect(testResult.scan).toHaveProperty('name', 'testName');
        expect(testResult.scan).toHaveProperty('elevationMax', 1);
        expect(testResult.scan).toHaveProperty('elevationMin', 2);
        expect(testResult.scan).toHaveProperty('userId', 0);
        expect(testResult.scan).toHaveProperty('userName', 'Linus Torvalds');
    });
});
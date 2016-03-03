/**
 * Created by wangrui on 16/3/2.
 */
import React from 'react';
import {render,unmountComponentAtNode} from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import JsonTree from 'fit-json-tree'

describe('PC json-tree : ', function () {
    const jsonData = {
        info: {
            name: 'Li Lei',
            boy: true,
            deskmate: 'Han Mei Mei',
            age: [21, 22],
            sorty: [
                {
                    dayOne: 'went to school'
                },
                {
                    dayTwo: 'play with eachother'
                }
            ]
        }
    }
    it('Basic', function () {
        var container = document.createElement('div');
        render(<JsonTree json={jsonData}/>, container);
        var tar = container.innerHTML.toString().indexOf("Li Lei");
        expect(tar).not.toEqual(-1);
        //expect(x.).toBe(true);
        //console.log(container.innerHTML.toString());
    });

    it('Root', function () {
        var container = document.createElement('div');
        render(<JsonTree root={true} json={jsonData}/>, container);
        var tar = container.innerHTML.toString().indexOf("Li Lei");
        expect(tar).not.toEqual(-1);
        //expect(x.).toBe(true);
        //console.log(container.innerHTML.toString());
    });
});







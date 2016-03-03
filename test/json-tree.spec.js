/**
 * Created by wangrui on 16/3/2.
 */
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import JsonTree from 'fit-json-tree'

describe('fit-json-tree : ', function () {
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

    it('basic render', function () {
        let container = document.createElement('div')
        render(<JsonTree json={jsonData}/>, container)
        let tar = container.innerHTML.toString().indexOf("Li Lei")
        expect(tar).not.toEqual(-1)
    })

    it('root render', function () {
        let container = document.createElement('div')
        render(<JsonTree root={true} json={jsonData}/>, container)
        let tar = container.innerHTML.toString().indexOf("root")
        expect(tar).not.toEqual(-1)
    })
})







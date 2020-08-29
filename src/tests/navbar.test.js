import React from 'react'
import renderer from 'react-test-renderer'
import NavbarComponent from '../components/Navbar'
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount, shallow } from "enzyme";
import { TaskContext, TaskContextProvider } from '../contexts/TaskContext'







describe('test de la navbar', () => {

    beforeAll(() => {
        Enzyme.configure({ adapter: new Adapter() });

    })

    it('afficher le nombre correcte de tâche dans la navbar', async () => {
        const wrapper = mount(
            <TaskContext.Provider
                value={{
                    dispatch: jest.fn(),
                    tasks: [{ id: 1, description: 'hello', isChecked: false }]
                }}
            >
                <NavbarComponent />
            </TaskContext.Provider>
        )
        expect(wrapper.find("h6").text()).toEqual('React Todo List (1)')
    })



})
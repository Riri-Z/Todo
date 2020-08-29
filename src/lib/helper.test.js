import { addTask } from './helper'
describe('addTask', () => {
    it('should add todo to the list', () => {
        const startTodos = [
            { id: 1, name: 'one', isComplete: false },
            { id: 2, name: 'two', isComplete: false }
        ]

        const newTodo = { id: 3, name: 'three', isComplete: false }
        const expected = [
            { id: 3, name: 'three', isComplete: false },
            { id: 1, name: 'one', isComplete: false },
            { id: 2, name: 'two', isComplete: false }
        ]
        const result = addTask(startTodos, newTodo)
        expect(result).toEqual(expected)
    })
})
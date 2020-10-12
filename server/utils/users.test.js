const expect = require('expect')

const { Users } = require('./users')

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
                id: '1',
                name: 'mike',
                room: 'chair'
            }, {
                id: '2',
                name: 'mikk',
                room: 'react course'
            },
            {
                id: '3',
                name: 'hola',
                room: 'chair'
            }
        ]
    })
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Shahriar',
            room: 'chair'
        };
        var resUser = users.addUser(user.id, user.name, user.room)
        expect(users.users).toEqual([user]);
    })
    it('should return names for chair', () => {
        var userList = users.getUserList('chair');
        expect(userList).toEqual(['mike', 'hola']);
    })
    it('should return names for react course', () => {
        var userList = users.getUserList('react course');
        expect(userList).toEqual(['mikk']);
    })
    it('should return an user', () => {
        var userId = 2;
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    })
    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);
        expect(user).toNotExist();
    })
    it('should remove a id', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    })
    it('should not find an user', () => {
        var userId = '99';
        var users = users.removeUser(userId);
        expect(user.id).toNotExist(userId);
        expect(users.users.length).toBe(3);
    })
})
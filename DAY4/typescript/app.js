"use strict";
/* ================================
   INTERFACES
================================ */
Object.defineProperty(exports, "__esModule", { value: true });
/* ================================
   CLASSES
================================ */
class UserService {
    users = [];
    addUser(user) {
        this.users.push(user);
        return {
            success: true,
            data: user,
            message: "User added successfully",
        };
    }
    getUsers() {
        return {
            success: true,
            data: this.users,
        };
    }
}
/* ================================
   GENERICS
================================ */
function wrapResponse(data) {
    return {
        success: true,
        data,
    };
}
/* ================================
   IMPLEMENTATION / USE CASE
================================ */
const userService = new UserService();
// Create User
const newUser = {
    id: 1,
    name: "Rishi",
    email: "rishi@gmail.com",
    isActive: true,
};
console.log(userService.addUser(newUser));
// Get Users
console.log(userService.getUsers());
// Generic API Response
console.log(wrapResponse("TypeScript Ready"));
// Utility Types usage
const updateUser = {
    name: "Updated Rishi",
};
const userPreview = {
    id: 1,
    name: "Rishi",
};
const safeUser = {
    id: 1,
    name: "Rishi",
    isActive: true,
};
console.log(updateUser);
console.log(userPreview);
console.log(safeUser);
//# sourceMappingURL=app.js.map
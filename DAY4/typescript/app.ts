

// Interface for API User
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

// Interface for API Response (Generic)
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

  // CLASSES


class UserService {
  private users: User[] = [];

  addUser(user: User): ApiResponse<User> {
    this.users.push(user);
    return {
      success: true,
      data: user,
      message: "User added successfully",
    };
  }

  getUsers(): ApiResponse<User[]> {
    return {
      success: true,
      data: this.users,
    };
  }
}

   //GENERICS

function wrapResponse<T>(data: T): ApiResponse<T> {
  return {
    success: true,
    data,
  };
}


  // UTILITY TYPES


// Partial → for update use case
type UpdateUser = Partial<User>;

// Pick → selecting limited fields
type UserPreview = Pick<User, "id" | "name">;

// Omit → removing sensitive fields
type SafeUser = Omit<User, "email">;


  // IMPLEMENTATION / USE CASE


const userService = new UserService();

// Create User
const newUser: User = {
  id: 1,
  name: "Rishi",
  email: "rishi@gmail.com",
  isActive: true,
};

console.log(userService.addUser(newUser));

// Get Users
console.log(userService.getUsers());

// Generic API Response
console.log(wrapResponse<string>("TypeScript Ready"));

// Utility Types usage
const updateUser: UpdateUser = {
  name: "Updated Rishi",
};

const userPreview: UserPreview = {
  id: 1,
  name: "Rishi",
};

const safeUser: SafeUser = {
  id: 1,
  name: "Rishi",
  isActive: true,
};

console.log(updateUser);
console.log(userPreview);
console.log(safeUser);

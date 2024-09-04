export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: number | null;
  }
  
  export interface UserState {
    users: User[];
    filters: {
      name: string;
      username: string;
      email: string;
      phone: number | null;
    }
  }
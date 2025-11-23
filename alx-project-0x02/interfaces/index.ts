// interfaces/index.ts

export interface PostProps {
  id: number;
  title: string;
  content: string;
  userId: number;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

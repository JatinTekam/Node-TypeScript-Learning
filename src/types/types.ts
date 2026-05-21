
export interface Book{
    _id: string,
    title: string,
    author: User,
    genre: string,
    coverImage: string,
    file : string,
    createdAt: Date,
    updatedAt: Date
}


export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export type jwtTokenPayload={
    id: string,
    email: string
}




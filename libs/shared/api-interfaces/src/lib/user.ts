import { User as UserModel } from '@prisma/client';

/**
 * private user record
 */
export interface User extends UserModel {
  id: string;
}

/**
 * User that is shown to everyone bc they are an author
 * Name is the name or username if they have no name
 */
export interface PublicUser {
  name: string;
}

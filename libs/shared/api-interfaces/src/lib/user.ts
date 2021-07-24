/**
 * private user record
 */
export interface User {
  id: string;
  username: string;
  password: string;
  name: string;
  gamebookLibraryIds: Array<string>;
}

/**
 * User that is shown to everyone bc they are an author
 * Name is the name or username if they have no name
 */
export interface PublicUser {
  id: string;
  name: string;
}

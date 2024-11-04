import { Admin } from "./Admin";
import { Auth } from "./Auth";
import { Movies } from "./Movies";
import dotenv from 'dotenv';

dotenv.config();

const movies = new Movies();
const auth = new Auth();
const adminUsername = process.env.ADMIN_USERNAME;
const adminPassword = process.env.ADMIN_PASSWORD;
const admin = new Admin(adminUsername!, adminPassword!);

export { auth, movies, admin };
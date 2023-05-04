import axios from "axios";
import { BaseService } from "./base.service";

class AuthService extends BaseService {}

export const authService = new AuthService(axios.create({ withCredentials: true }));

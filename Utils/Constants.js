import dotenv from 'dotenv'

dotenv.config({path: './Utils/Files/login.env'});

export const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
export const PASSWORD = process.env.PASSWORD;
export const INVALID_PASSWORD = 'ThisIsNotThePassword';
export const TASK_NAME = 'QA Challenge Task';
export const URL = 'https://todoist.com/';
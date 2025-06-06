import { getTodo, getUser, promiseAll, promiseRace } from './task3.js';

promiseAll(getTodo(), getUser());
promiseRace(getTodo(), getUser());

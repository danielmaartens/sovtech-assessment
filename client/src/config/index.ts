const DEFAULT_SERVER_HOST = 'http://167.172.22.27:4000';
// const DEFAULT_SERVER_HOST = 'http://localhost:4000';

export default {
    SERVER_HOST: process.env.SERVER_HOST || DEFAULT_SERVER_HOST
};
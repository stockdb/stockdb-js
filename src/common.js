import { Client } from 'hprose-html5/dist/hprose-html5';

export const New = (uri, auth) => {
    const token = window.btoa(auth);
    const stockdb = Client.create(uri, [
        'PutOHLC',
        'PutOHLCs',
        'GetTimeRange',
        'GetOHLCs',
        'GetDepth',
    ]);

    stockdb.setHeader('Authorization', `Basic ${token}`);

    return stockdb;
};

export const Second = 1;
export const Minute = 60;
export const Hour = 3600;
export const Day = 86400;
export const Week = 604800;
export const Month = 2592000;
export const Quarter = 7776000;
export const Year = 31536000;
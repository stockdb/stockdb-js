import { Client } from 'hprose-html5/dist/hprose-html5';

export default {
    New: (uri, auth) => {
        const token = window.btoa(auth);
        const stockdb = Client.create(uri, [
            'PutOHLC',
            'PutOHLCs',
            'GetStats',
            'GetMarkets',
            'GetSymbols',
            'GetTimeRange',
            'GetOHLCs',
            'GetDepth',
        ]);
        stockdb.setHeader('Authorization', `Basic ${token}`);
        return stockdb;
    },
    Second: 1,
    Minute: 60,
    Hour: 3600,
    Day: 86400,
    Week: 604800,
    Month: 2592000,
    Quarter: 7776000,
    Year: 31536000,
};

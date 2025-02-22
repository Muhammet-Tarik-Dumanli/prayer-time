export interface Timings {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Sunset: string;
    Maghrib: string;
    Isha: string;
    Imsak: string;
    Midnight: string;
    Firstthird: string;
    Lastthird: string;
}

export interface PrayerTimes {
    code: number;
    status: string;
    data: Data;
}

export interface Params {
    Fajr: number;
    Isha: number;
}

export interface Location {
    latitude: number;
    longitude: number;
}

export interface Method {
    id: number;
    name: string;
    params: Params;
    location: Location;
}

export interface Offset {
    Imsak: number;
    Fajr: number;
    Sunrise: number;
    Dhuhr: number;
    Asr: number;
    Maghrib: number;
    Sunset: number;
    Isha: number;
    Midnight: number
}
export interface Meta {
    latitude: number;
    longitude: number;
    timezone: string;
    method: Method;
    latitudeAdjustmentMethod: string;
    midnightMode:string;
    school: string;
    offset: Offset;
}

export interface Data {
    timings: Timings;
    date: Date;
    meta: Meta;
}

export interface Designation {
    abbreviated: string;
    expanded: string;
}

export interface Hijri {
    date: string;
    format: string;
    day: string;
    weekday: Weekday;
    month: Month;
    year: string;
    designation: Designation;
    holidays: any[];
}

export interface Gregorian {
    date: string;
    format: string;
    day: string;
    weekday: Weekday;
    month: Month;
    year: string;
    designation: Designation;
}

export interface Date {
    readable: string;
    timestamp: string;
    hijri: Hijri;
    gregorian: Gregorian;
}

export interface Weekday {
    en: string;
    ar: string;
}

export interface Month {
    number: string;
    en: string;
    ar: string
}
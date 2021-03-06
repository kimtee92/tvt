﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Globals } from '../globals';
import { Driver } from '../_models';

@Injectable()
export class DriverService {
    private api: string;

    constructor(private http: HttpClient,
                private globals: Globals) { 
                    this.api = globals.api;
                }

    getAll() {
        return this.http.get<Driver[]>(`/drivers`);
    }

    getById(id: number) {
        return this.http.get(this.api + `/drivers/` + id);
    }

    getByLicense(num: string) {
        return this.http.get(this.api + `/drivers/driver/` + num);
    }

    register(driver: Driver) {
        return this.http.post(this.api + `/drivers/register`, driver);
    }

    update(driver: Driver) {
        return this.http.put(this.api + `/drivers/` + driver.id, driver);
    }

    delete(id: number) {
        return this.http.delete(this.api + `/drivers/` + id);
    }
    
}
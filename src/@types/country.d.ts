export type CountryListResponseData = {
    data: {
        objects: Array<{
            names: {
                common: string;
            };
            codes: {
                alpha_2: string;
            };
            flag: {
                emoji: string;
            };
            _meta: {
                lastUpdatedTimestamp: number;
            };
        }>;
        meta: {
            total: number;
            count: number;
            limit: number;
            offset: number;
            more: boolean;
            request_id: string;
            duration: number;
        };
    };
};

export type CountryListItem = {
    name: string;
    code: string;
    flag: string;
};


export type CountryDetailResponseData = {
    data: {
        objects: Array<{
            names: {
                alternates: Array<string>;
                common: string;
                native: {
                    [name: string]: {
                        common: string;
                        official: string;
                    };
                };
                official: string;
                translations: {
                    [translation: string]: {
                        common: string;
                        official: string;
                    };
                };
            };
            codes: {
                alpha_2: string;
                alpha_3: string;
                ccn3: string;
                cioc: string;
                fifa: string;
                fips: string;
                gec: string;
            };
            capitals: Array<{
                attributes: {
                    administrative: boolean;
                    constitutional: boolean;
                    executive: boolean;
                    judicial: boolean;
                    legislative: boolean;
                    primary: boolean;
                };
                coordinates: {
                    lat: number;
                    lng: number;
                };
                name: string;
            }>;
            flag: {
                colors: {
                    dominant: string;
                    palette: Array<{
                        hex: string;
                        proportion: number;
                    }>;
                    prominent: string;
                    swatches: {
                        dark_muted: string;
                        dark_vibrant: any;
                        light_muted: string;
                        light_vibrant: string;
                        muted: string;
                        vibrant: string;
                    };
                };
                description: string;
                emoji: string;
                html_entity: string;
                unicode: string;
                url_png: string;
                url_svg: string;
            };
            region: string;
            subregion: string;
            area: {
                kilometers: number;
                miles: number;
            };
            assets: Array<any>;
            borders: Array<string>;
            calling_codes: Array<string>;
            cars: {
                driving_side: string;
                signs: Array<string>;
            };
            classification: {
                dependency: boolean;
                dependency_type: string;
                disputed: boolean;
                iso_status: string;
                sovereign: boolean;
                un_member: boolean;
                un_observer: boolean;
            };
            continents: Array<string>;
            coordinates: {
                lat: number;
                lng: number;
            };
            currencies: Array<{
                code: string;
                name: string;
                symbol: string;
            }>;
            date: {
                academic_year_start: {
                    day: number;
                    month: number;
                };
                fiscal_year_start: {
                    corporate: {
                        basis: string;
                        day: number;
                        month: number;
                    };
                    government: {
                        day: number;
                        month: number;
                    };
                    personal: {
                        day: number;
                        month: number;
                    };
                };
                start_of_week: string;
            };
            demonyms: {
                [name: string]: {
                    f: string;
                    m: string;
                };
            };
            descriptions: {
                long: string;
                short: string;
            };
            economy: {
                gini_coefficient: {
                    [year: string]: number;
                };
            };
            government_type: string;
            landlocked: boolean;
            languages: Array<{
                bcp47: string;
                iso639_1: string;
                iso639_2b: string;
                iso639_2t: string;
                iso639_3: string;
                name: string;
                native_name: string;
            }>;
            leaders: Array<{
                message: string;
                sample: string;
            }>;
            links: {
                google_maps: string;
                official: string;
                open_street_maps: string;
                wikipedia: string;
            };
            memberships: {
                african_union: boolean;
                arab_league: boolean;
                asean: boolean;
                brics: boolean;
                commonwealth: boolean;
                eu: boolean;
                eurozone: boolean;
                g20: boolean;
                g7: boolean;
                nato: boolean;
                oecd: boolean;
                opec: boolean;
                schengen: boolean;
                un: boolean;
            };
            number_format: {
                decimal_separator: string;
                thousands_separator: string;
            };
            parent: {
                alpha_2: string;
                alpha_3: string;
            };
            population: number;
            postal_code: {
                format: string;
                regex: string;
            };
            timezones: Array<string>;
            tlds: Array<string>;
            units: {
                measurement_system: string;
                temperature_scale: string;
            };
            uuid: string;
            _match: Array<{
                path: string;
                value: string;
            }>;
            _meta: {
                lastUpdatedTimestamp: number;
            };
        }>;
        meta: {
            total: number;
            count: number;
            limit: number;
            offset: number;
            more: boolean;
            request_id: string;
            duration: number;
        };
    };
};

export type CountryDetail = {
    name: {
        native: string[];
        fr: string;
    };
    code: string;
    capital: string;
    region: string;
    population: number;
    area: number;
    coordinates: {
        lat: number;
        lng: number;
    };
    currencies: {
        code: string;
        name: string;
        symbol: string;
    }[];
};
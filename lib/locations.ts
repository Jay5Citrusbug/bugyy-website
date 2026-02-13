export interface Country {
    code: string;
    name: string;
}

export interface State {
    code: string;
    name: string;
    countryCode: string;
}

export interface City {
    name: string;
    stateCode: string;
}

// BUG #6: Countries not in alphabetical order
export const countries: Country[] = [
    { code: 'US', name: 'United States' },
    { code: 'IN', name: 'India' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'AU', name: 'Australia' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'JP', name: 'Japan' },
];

// BUG #3: States mapping bug - same states shown for all countries
// This array will be used for ALL countries regardless of selection
export const states: State[] = [
    { code: 'CA', name: 'California', countryCode: 'US' },
    { code: 'NY', name: 'New York', countryCode: 'US' },
    { code: 'TX', name: 'Texas', countryCode: 'US' },
    { code: 'FL', name: 'Florida', countryCode: 'US' },
    { code: 'IL', name: 'Illinois', countryCode: 'US' },
];

export const cities: City[] = [
    { name: 'Los Angeles', stateCode: 'CA' },
    { name: 'San Francisco', stateCode: 'CA' },
    { name: 'New York City', stateCode: 'NY' },
    { name: 'Buffalo', stateCode: 'NY' },
    { name: 'Houston', stateCode: 'TX' },
    { name: 'Dallas', stateCode: 'TX' },
    { name: 'Miami', stateCode: 'FL' },
    { name: 'Orlando', stateCode: 'FL' },
    { name: 'Chicago', stateCode: 'IL' },
];

// BUG #3: This function ignores the countryCode parameter
export const getStatesByCountry = (countryCode: string): State[] => {
    // Should filter by countryCode, but doesn't - returns all states
    return states;
};

export const getCitiesByState = (stateCode: string): City[] => {
    return cities.filter(city => city.stateCode === stateCode);
};

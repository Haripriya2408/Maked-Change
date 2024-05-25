class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filter() {
        let filterObj = {};
        let queryObj = { ...this.queryString };

        // Filter by minimum and maximum price
        if (queryObj.minPrice && queryObj.maxPrice) {
            if (queryObj.maxPrice > queryObj.minPrice) {
                filterObj.price = { '$gte': queryObj.minPrice, '$lte': queryObj.maxPrice };
            }
        }

        // Filter by property type
        if (queryObj.propertyType) {
            let propertyTypes = queryObj.propertyType.split(',').map(type => type.trim().toLowerCase());
            filterObj.propertyType = { '$in': propertyTypes };
        }

        // Filter by room type
        if (queryObj.roomType) {
            filterObj.roomType = queryObj.roomType;
        }

        // Filter by number of guests
        if (queryObj.guests) {
            filterObj.guests = queryObj.guests;
        }

        // Filter by amenities
        if (queryObj.amenities) {
            let amenities = queryObj.amenities.split(',').map(amenity => amenity.trim());
            filterObj['amenities.name'] = { '$in': amenities };
        }

        this.query = this.query.find(filterObj);
        return this;
    }

    search() {
        let searchObj = {};
        let queryObj = { ...this.queryString };

        // Search by city, state, or area
        if (queryObj.search) {
            let searchTerms = queryObj.search.toLowerCase().split(' ');
            searchObj = {
                '$or': [
                    { 'address.city': { '$in': searchTerms } },
                    { 'address.state': { '$in': searchTerms } },
                    { 'address.area': { '$in': searchTerms } }
                ]
            };
        }

        // Filter by date range
        if (queryObj.dateIn && queryObj.dateOut) {
            searchObj.$and = [
                {
                    'currentBookings': {
                        '$not': {
                            '$elemMatch': {
                                '$or': [
                                    { 'fromDate': { '$lt': queryObj.dateOut }, 'toDate': { '$gt': queryObj.dateIn } },
                                    { 'fromDate': { '$lt': queryObj.dateIn }, 'toDate': { '$gt': queryObj.dateIn } }
                                ]
                            }
                        }
                    }
                }
            ];
        }

        this.query = this.query.find(searchObj);
        return this;
    }

    paginate() {
        let page = this.queryString.page * 1 || 1;
        let limit = this.queryString.limit * 1 || 12;
        let skip = (page - 1) * limit;

        this.query = this.query.skip(skip).limit(limit);
        return this;
    }
}

module.exports = APIFeatures;

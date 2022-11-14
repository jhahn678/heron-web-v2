import { gql, useQuery } from '@apollo/client'
import { NearbyWaterbody, WaterbodyClassification } from '../../types/Waterbody'
import { useLocationStore } from '../store/useLocationStore'

//@TODO --- Change sort to enum on backend then here

const GET_WATERBODIES = gql`
query Waterbodies($classifications: [ClassificationEnum!], $queryLocation: QueryLocation, $offset: Int, $limit: Int, $sort: Sort) {
    waterbodies(classifications: $classifications, queryLocation: $queryLocation, offset: $offset, limit: $limit, sort: $sort) {
        id
        name
        classification
        country
        ccode
        subregion
        admin_one
        admin_two
        media {
            id
            url
        }
        distance
        rank
        total_catches
        total_locations
        average_rating
    }
}`



interface GetNearbyWaterbodiesArgs {
    classification?: WaterbodyClassification
    sort?: 'distance' | 'rank'
    limit?: number
}

type GetNearbyWaterbodies= { waterbodies: NearbyWaterbody[] }

export const useGetNearbyWaterbodies = (args?: GetNearbyWaterbodiesArgs) => {

    const { coords } = useLocationStore()

    const result = useQuery<GetNearbyWaterbodies>(GET_WATERBODIES, {
        fetchPolicy: 'cache-first',
        skip: !Boolean(coords),
        variables: { 
            queryLocation: { 
                ...coords,
                withinMeters: 100000 
            },
            classifications: Boolean(args && args.classification) ? [args.classification] : null,
            limit: Boolean(args && args.limit) ? args.limit : 8, 
            sort: Boolean(args && args.sort) ? args.sort : 'distance'
        }
    })
    
    return result;
}


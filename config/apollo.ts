import { 
    from,
    ApolloClient, 
    InMemoryCache,
    createHttpLink, 
} from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { onError } from '@apollo/client/link/error'
import { WaterbodyMedia } from "../types/Media";
import { RefreshTokenLink } from "../utils/apollo/RefreshTokenLink";

const httpLink = createHttpLink({ uri: process.env.NEXT_PUBLIC_API_GRAPH_URL });

const retryLink = new RetryLink()

const authTokenLink = new RefreshTokenLink(() => window.location.href = '/auth/login')

const errorLink = onError(({ graphQLErrors }) => {
    if(graphQLErrors){    
        graphQLErrors.forEach(x => {
            console.log({ graphQLError: x.extensions.code, error: x })
        })
    }
})

export const apolloClient = new ApolloClient({
    link: from([authTokenLink, errorLink, retryLink, httpLink]),
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    waterbodies: {
                        keyArgs: [
                            'sort',
                            'value', 
                            'adminOne', 
                            'queryLocation', 
                            'classifications'
                        ],
                        merge: (existing = [], incoming) => {
                            return [...existing, ...incoming];
                        }
                    },
                    catches: {
                        keyArgs: [
                            'type',
                            'id',
                            'sort',
                            'coordinates'
                        ],
                        merge: (existing=[], incoming) => ([
                            ...existing, ...incoming
                        ])
                    },
                    locations: {
                        keyArgs: [
                            'type',
                            'id',
                            'sort',
                            'coordinates'
                        ],
                        merge: (existing=[], incoming) => ([
                            ...existing, ...incoming
                        ])
                    }
                }
            },
            Waterbody: {
                fields: {
                    classification: {
                        read(value){
                            if(value){
                                return value.charAt(0).toUpperCase() + value.slice(1)
                            }
                        }
                    },
                    media: {
                        keyArgs: false,
                        merge: (existing:WaterbodyMedia[]=[], incoming:WaterbodyMedia[], { args }) => {
                            if(existing.length === 0 || !args) return incoming;
                            const { offset=0 } = args as { limit: number, offset: number }
                            if(offset === existing.length){
                                return [...existing, ...incoming];
                            }else if(offset > 0){
                                return [ ...existing.slice(offset), ...incoming ]
                            }else if(incoming.length > existing.length) {
                                return incoming;
                            }else{
                                return existing;
                            }
                        }
                    }
                }
            },
            User: {
                fields: {
                    catches: {
                        keyArgs: [
                            'waterbody', 
                            'species', 
                            'date',
                            'weight', 
                            'length'
                        ],
                        merge: (existing=[], incoming) => ([
                            ...existing, ...incoming
                        ])
                    },
                    catch_statistics: {
                        merge: (existing={}, incoming) => ({
                            ...existing, ...incoming
                        })
                    },
                    media: {
                        keyArgs: false,
                        merge: (existing=[], incoming) => ([
                            ...existing, ...incoming
                        ])
                    },
                    following: {
                        keyArgs: false,
                        merge: (existing=[], incoming) => ([
                            ...existing, ...incoming
                        ])
                    },
                    followers: {
                        keyArgs: false,
                        merge: (existing=[], incoming) => ([
                            ...existing, ...incoming
                        ])
                    }
                }
            }
        }
    })
})

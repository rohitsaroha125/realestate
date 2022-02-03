import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const fetchHeaders={
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '6d8a0640a6msh6e404dee8081791p117570jsn3a75cab7c683'
}

const baseUrl=`https://bayut.p.rapidapi.com/`

const createRequest=(url) => ({url, headers: fetchHeaders})

export const fetchApi=createApi({
    reducerPath:'fetchApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getPropertyForSale: builder.query({
            query: () => createRequest(`properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
        }),
        getPropertyForRent: builder.query({
            query: () => createRequest(`properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
        }),
        getProperty: builder.query({
            query: (id) => createRequest(`properties/detail?externalID=${id}`)
        })
    })
})

export const {
    useGetPropertyForSaleQuery,
    useGetPropertyForRentQuery,
    useGetPropertyQuery
}=fetchApi
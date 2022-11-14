import create from 'zustand'
// import useModalContext from "../../hooks/contexts/modal/useModalContext";
import { useState, useEffect } from 'react'
// import { 
//     GEOLOCATION_DISABLED_BODY, 
//     GEOLOCATION_DEFAULT_ERROR,
//     GEOLOCATION_UNAVAILABLE_BODY
// } from '../../hooks/contexts/modal/constants'
import { useGeolocated } from "react-geolocated";


export type latlng = {
    latitude: string | number,
    longitude: string | number
}

interface Params {
    onSuccess: (coords: latlng) => void,
    onError?: () => void
}

const useCurrentLocation = ({ onSuccess, onError }: Params) => {

    // const { dispatch } = useModalContext()

    const [isLoading, setIsLoading] = useState(false)

    const { 
        isGeolocationAvailable, 
        isGeolocationEnabled, 
        getPosition 
    } = useGeolocated({
        onSuccess: ({ coords }) => {
            setIsLoading(false)
            onSuccess(coords)
        },
        onError: () => {
            setIsLoading(false)
            // dispatch({ 
            //     type: 'SHOW_ERROR_MODAL',
            //     body: GEOLOCATION_DEFAULT_ERROR 
            // })
            if(onError) onError()
        }
    })


    const getCurrentLocation = () => {
        if(!isGeolocationEnabled){
            // dispatch({ type: 'SHOW_ERROR_MODAL', body: GEOLOCATION_DISABLED_BODY })
        }else if(!isGeolocationAvailable){
            // dispatch({ type: 'SHOW_ERROR_MODAL', body: GEOLOCATION_UNAVAILABLE_BODY })
        }else{
            setIsLoading(true)
            getPosition()
        }
    }

    useEffect(() => {
        if(!isGeolocationEnabled){
            // dispatch({ type: 'SHOW_ERROR_MODAL', body: GEOLOCATION_DISABLED_BODY })
        }else if(!isGeolocationAvailable){
            // dispatch({ type: 'SHOW_ERROR_MODAL', body: GEOLOCATION_UNAVAILABLE_BODY })
        }
    },[isGeolocationAvailable, isGeolocationEnabled])
    

    return {
        isLoading,
        getCurrentLocation,
    }

}


export default useCurrentLocation;

interface LocationStore {
    hasPermission: boolean | undefined
    hasCoordinates: boolean,
    isFetchingLocation: boolean,
    longitude: number | null,
    latitude: number | null,
    setHasPermission: (hasPermission: boolean) => void,
    // setCoordinates: (coords: LocationObjectCoords) => void,
    setIsFetching: (isFetchingLocation: boolean) => void,
}

export const useLocationStore = create<LocationStore>((set) => ({
    hasPermission: undefined,
    hasCoordinates: false,
    isFetchingLocation: false,
    longitude: null,
    latitude: null,
    setCoordinates: coords => set({
        latitude: coords.latitude,
        longitude: coords.longitude,
        hasCoordinates: true,
        isFetchingLocation: false
    }),
    clearCoordinates: () => set({
        latitude: null,
        longitude: null,
        hasCoordinates: false
    }),
    setIsFetching: isFetchingLocation  => set({ isFetchingLocation }),
    setHasPermission: hasPermission => set({ hasPermission })
}))
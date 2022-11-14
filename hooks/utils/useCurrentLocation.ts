import { useEffect } from 'react'
import { useGeolocated } from "react-geolocated";
import { useLocationStore } from '../store/useLocationStore';
import { ModalType, useModalStore } from '../store/useModalStore';

export type Coords = {
    longitude: number,
    latitude: number
}

interface Args {
    onSuccess?: (position: GeolocationPosition) => void
    onError?: (positionError?: GeolocationPositionError) => void
}

export const useCurrentLocation = (args?: Args) => {

    const showModal = useModalStore(store => store.setVisible)

    const { setCoordinates, setIsFetching } = useLocationStore(store => ({
        setHasPermission: store.setHasPermission,
        setCoordinates: store.setCoordinates,
        setIsFetching: store.setIsFetching,
        coords: store.coords
    }))

    const { 
        getPosition, 
        isGeolocationAvailable, 
        isGeolocationEnabled 
    } = useGeolocated({
        onSuccess: ({ coords }) => {
            setIsFetching(false)
            setCoordinates(coords)
        },
        onError: (err) => {
            setIsFetching(false)
            if(args && args.onError) args.onError(err)
        }
    })

    useEffect(() => {
        if(isGeolocationAvailable && isGeolocationEnabled) {
            setIsFetching(true)
            getPosition()
        }else if(!isGeolocationAvailable){
            showModal(true, ModalType.GeolocationUnavailable)
        }else if(!isGeolocationEnabled){
            showModal(true, ModalType.GeolocationDisabled)
        }
    },[isGeolocationAvailable, isGeolocationEnabled])

    return { getPosition }
}
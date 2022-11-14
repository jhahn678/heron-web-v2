import create from 'zustand'
import { Coords } from '../utils/useCurrentLocation';

interface LocationStore {
    hasPermission: boolean | undefined
    isFetchingLocation: boolean,
    coords: Coords | null
    setHasPermission: (hasPermission: boolean) => void,
    setCoordinates: (coords: GeolocationCoordinates) => void,
    setIsFetching: (isFetchingLocation: boolean) => void,
}

export const useLocationStore = create<LocationStore>((set) => ({
    coords: null,
    hasPermission: undefined,
    isFetchingLocation: false,
    setCoordinates: coords => set({ coords, isFetchingLocation: false }),
    clearCoordinates: () => set({ coords: null }),
    setIsFetching: isFetchingLocation  => set({ isFetchingLocation }),
    setHasPermission: hasPermission => set({ hasPermission })
}))
import create from 'zustand'

export enum ModalType{
    GeolocationUnavailable,
    GeolocationDisabled,
    GeolocationError
}

const mapModalTypeToDetails = (type?: ModalType) => {
    switch(type){
        case ModalType.GeolocationUnavailable:
            return {
                title: 'Location Services Unavailable',
                body: 'It looks like your browser does not support Geolocation services. Some features of the site may be limited.'
            }
        case ModalType.GeolocationDisabled:
            return {
                title: 'Location Services Disabled',
                body: 'It looks like your location services are disabled. Some features of this site may be limited. It is recommended that they are enabled.'
            }
        case ModalType.GeolocationError:
            return {
                title: 'There was an error',
                body: 'There was a problem obtaining your current location. Try refreshing the browser or checking your network connection.'
            }
        default:
            return {
                title: 'There was an error',
                body: 'Refresh the page and try again.'
            }
    }
} 

interface ModalStore {
    visible: boolean
    title: string | undefined
    body: string | undefined
    setVisible: (visible: boolean, modalType?: ModalType) => void
}

export const useModalStore = create<ModalStore>((set, get) => ({
    visible: false,
    title: undefined,
    body: undefined,
    setVisible: (visible, modalType) => visible ? set({ 
        visible: true, 
        title: mapModalTypeToDetails(modalType).title,
        body: mapModalTypeToDetails(modalType).body
    }) : set({ visible: false })
}))
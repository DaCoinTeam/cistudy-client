import { useEffect } from "react"
import { AppDispatch, setUser } from "@redux"
import { useDispatch } from "react-redux"
import { api, storage } from "@utils"
import { UserEntity, init } from "@services"

export const useInitialization = () => {
    const dispath: AppDispatch = useDispatch()
    useEffect(() => {
        storage.generateClientId()
        const handleEffect = async () => {
            const response = await init()
            const parsedError = api.parseErrorResponse(response)
            if (!parsedError) {
                const _response = response as Partial<UserEntity>
                dispath(setUser(_response))
            }
        }
        handleEffect()
    }, [])
}

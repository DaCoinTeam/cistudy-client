import { useEffect } from "react"
import { AppDispatch, setUser } from "@redux"
import { useDispatch } from "react-redux"
import { api, storage } from "@utils"
import { UserDto, server } from "@services"

const useInitialization = () => {
    const dispath: AppDispatch = useDispatch()
    useEffect(() => {
        storage.generateClientId()
        const handleEffect = async () => {
            const response = await server.restful.auth.init()
            const parsedError = api.parseErrorResponse(response)
            if (!parsedError) {
                const _response = response as Partial<UserDto>
                dispath(setUser(_response))
            }
        }
        handleEffect()
    }, [])
}

export default useInitialization
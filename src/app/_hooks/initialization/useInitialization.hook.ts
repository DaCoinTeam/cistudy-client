import { useEffect } from "react"
import { UserDto, server } from "@services"
import { AppDispatch, setUser } from "@redux"
import { useDispatch } from "react-redux"
import { api, storage } from "@utils"

const useInitialization = () => {
    const dispath: AppDispatch = useDispatch()
    useEffect(() => {
        storage.generateClientId()
        
        const handleEffect = async () => {
            const response = await server.graphql.auth.init()
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
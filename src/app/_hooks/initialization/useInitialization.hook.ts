import { useEffect } from "react"
import { AppDispatch, setUser } from "@redux"
import { useDispatch } from "react-redux"
import { api, storage } from "@utils"
import { UserDto, server } from "@services"

const useInitialization = () => {
    const dispath: AppDispatch = useDispatch()
    useEffect(() => {
        storage.generateClientId()
        server.graphql.course.findOne({
            courseId: "04d72365-f6f8-46bb-9640-68a93e98b6fa"
        }, {
            courseId : true,
            description: true,
            thumbnailUrl: true,
        })
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
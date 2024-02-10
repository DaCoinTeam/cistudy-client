import React, { ReactNode, useContext } from "react"
import { Input } from "@nextui-org/react"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import { AppButton } from "@app/_shared"
import { FormikContext } from "../hooks/FormikProviders"

export const SignUpForm = () => {
    const formik = useContext(FormikContext)
    if (formik === null) return
    const [isVisible, setIsVisible] = React.useState(false)
    const [isVisibleConfirm, setIsVisibleConfirm] = React.useState(false)

    const toggleVisibility = () => setIsVisible(!isVisible)
    const toggleVisibilityConfirm = () => setIsVisibleConfirm(!isVisibleConfirm)

    return (
        <div>
            <div className='grid grid-cols-2 gap-4 mb-4'>
                <Input
                    name='firstName'
                    label='First Name'
                    variant='flat'
                    className='max-w'
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!(formik.errors.firstName && formik.touched.firstName)}
                    errorMessage={formik.touched.firstName && formik.errors.firstName}
                />
                <Input
                    name='lastName'
                    label='Last Name'
                    variant='flat'
                    className='max-w'
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!(formik.errors.lastName && formik.touched.lastName)}
                    errorMessage={formik.touched.lastName && formik.errors.lastName}
                />
            </div>
            <div className="mb-4">
                <Input
                    type='date'
                    label='birthdate'
                    placeholder='Enter your date of birth'
                    name='birthdate'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!(formik.errors.birthdate && formik.touched.birthdate)}
                    errorMessage={
                        formik.touched.birthdate
                            ? (formik.errors.birthdate as ReactNode)
                            : undefined
                    }
                />
            </div>
            <div  className="mb-4">
                <Input
                    name='email'
                    label='Email'
                    type='email'
                    variant='flat'
                    className='max-w'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={!!(formik.errors.email && formik.touched.email)}
                    errorMessage={formik.touched.email && formik.errors.email}
                />
            </div>
            <div  className="mb-4">
                <Input
                    name='password'
                    label='Password'
                    variant='flat'
                    endContent={
                        <button
                            className='focus:outline-none'
                            type='button'
                            onClick={toggleVisibility}
                        >
                            {isVisible ? (
                                <EyeIcon className='w-4 h-4' />
                            ) : (
                                <EyeSlashIcon className='w-4 h-4' />
                            )}
                        </button>
                    }
                    isInvalid={!!(formik.errors.password && formik.touched.password)}
                    type={isVisible ? "text" : "password"}
                    className='max-w'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={formik.touched.password && formik.errors.password}
                />
            </div>
            <div  className="mb-4">
                <Input
                    name='confirmPassword'
                    label='Confirm Password'
                    variant='flat'
                    endContent={
                        <button
                            className='focus:outline-none'
                            type='button'
                            onClick={toggleVisibilityConfirm}
                        >
                            {isVisibleConfirm ? (
                                <EyeIcon className='w-4 h-4' />
                            ) : (
                                <EyeSlashIcon className='w-4 h-4' />
                            )}
                        </button>
                    }
                    isInvalid={
                        !!(
                            formik.errors.confirmPassword && formik.touched.confirmPassword
                        )
                    }
                    type={isVisibleConfirm ? "text" : "password"}
                    className='max-w'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={
                        formik.touched.confirmPassword && formik.errors.confirmPassword
                    }
                />
            </div>

                
            <AppButton className='w-full' submit text='Sign Up' />
        </div>
    )
}
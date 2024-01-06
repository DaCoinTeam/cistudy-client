
import { Form, Formik, FormikProps } from "formik"
import React, { ReactNode, createContext, useContext, useEffect } from "react"
import * as Yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import {
    AppDispatch,
    RootState,
} from "@redux"
import utils from "@utils"
import { ContextProps, notify } from "@app/_shared"
import { Input } from "@nextui-org/react"


interface FormikValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
    birthday: Date;
}

const initialValues: FormikValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    birthday: new Date(),
}

// export const SLIPPAGE_DEFAULT = 0.001
// export const DEADLINE_DEFAULT = 30
// export const AMOUNT_DEFAULT = BigInt(100000)

export const FormikContext = createContext<FormikProps<FormikValues> | null>(
    null
)

const renderBody = (
    props: FormikProps<FormikValues> | null,
    chidren: ReactNode
) => {
    const _props = props!

    // useEffect(() => {
    //     const handleEffect = async () => {
    //         if (!_props.values.steps.length) return

    //         const path = services.next.smartRouter.encodePacked(
    //             _props.values.steps
    //         )

    //         const quoterContract = new QuoterContract(
    //             chainId,
    //             chainInfos[chainId].quoter
    //         )

    //         const priceX96 = await quoterContract.quotePriceX96(path)
    //         if (priceX96 == null) return
    //         const price = utils.math.computeDivideX96(priceX96)

    //         _props.setFieldValue("price", price)
    //     }
    //     handleEffect()
    // }, [_props.values.steps, swapState.infoIn.address])

    return (
        <FormikContext.Provider value={props}>
            <Form onSubmit={props?.handleSubmit}>{chidren}</Form>
        </FormikContext.Provider>
    )
}
const FormikProviders = (props: ContextProps) => {
    // const { swapState } = useContext(SwapContext)!
    // const { web3State } = useContext(MetamaskContext)!

    const dispatch: AppDispatch = useDispatch()

    // const chainId = useSelector((state: RootState) => state.blockchain.chainId)

    // const account = useSelector((state: RootState) => state.blockchain.account)

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
                
                password: Yup.string()
                
                    .min(8, "At least be 8 characters")
                    .matches(
                        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/,
                        "At least 1 number, 1 lower case and 1 upper case letter"
                    )
                    .required("Required"),
                firstName: Yup.string().required("Required"),
			    lastName: Yup.string().required("Required"),
                birthday: Yup.date().required("Required"),             

            })}
            onSubmit={
                async (values) => {


            }
        }
            
        
        >
            {(_props) => renderBody(_props, props.children)}
        </Formik>
        
    )
}

export default FormikProviders

// type SwapParams =
//   | ExactInputSingleParams
//   | ExactInputParams
//   | ExactOutputSingleParams
//   | ExactOutputParams;
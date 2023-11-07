import React from "react";
import { useDispatch, useSelector } from "react-redux";
import close from "../../assets/dashboard/general/close.svg"
import { AppDispatch } from "../../store/store";
import { campaignActions } from "../../store/slices/campaignSlice";



type Props = {
    children: any;
};


const Modal = (props: Props) => {


    // <---------- utility --------->
    const dispatch: AppDispatch = useDispatch()

    // <---------- useSelectors --------->
    const campaignDetails = useSelector(
        (state: { campaign: CampaignSliceProps }) => state.campaign
    );

    // <---------- functions --------->
    const handleClose = () => {
        dispatch(campaignActions.closeCampaignModal())
    }

    return (
        <>


            <div className={`w-full h-full z-50 fixed top-0  left-0   flex items-end sm:items-center justify-center  ${campaignDetails.showModal ? "block" : "hidden"} `}>

                <div className=" w-full h-full absolute top-0 left-0 bg-[#212121] opacity-40 cursor-pointer" onClick={() => {
                    handleClose()
                }}></div>
                <div className={`${campaignDetails.modal.size === 'full' ? "sm:w-[600px] md:w-[700px] xl:w-[800px] " : " sm:w-[500px] "} h-[90%] md:h-fit w-full mx-auto  bg-white z-[60] rounded p-4 sm:p-6 `}>

                    <div className="flex justify-between mb-4 sm:mb-6">
                        <p className="text-gray/800 font-medium">{campaignDetails.modal.title}</p>

                        <button
                            className=""
                            type="button"
                            onClick={() => {
                                handleClose()
                            }}
                        >
                            <img src={close} alt="close-icon" />
                        </button>
                    </div>

                    {props.children}
                </div>

            </div>



        </>
    );
};

export default Modal;

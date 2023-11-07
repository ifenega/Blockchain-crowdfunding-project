import React, { useState, useEffect } from 'react';

type Props = {
    deadlineISOString: string | null | undefined;
};

interface UpdateTimeProps {
    status: string;
    time: null | string;
}

export const updateRemainingTime = (deadlineISOString: string | undefined | null): UpdateTimeProps => {
    if (deadlineISOString === null || deadlineISOString === undefined) return {
        status: "Inactive",
        time: null
    }
    const deadline = new Date(deadlineISOString);
    const currentTime = new Date();
    const timeDifference = deadline.getTime() - currentTime.getTime();

    if (timeDifference <= 0) {
        return {
            status: 'Ended',
            time: null,
        };
    }

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const remainingTime = `${hours}h ${minutes}m ${seconds}s`;

    return {
        status: 'Ongoing',
        time: remainingTime,
    };
};

const CampaignTimer: React.FC<Props> = (props) => {
    const [currentTime, setCurrentTime] = useState<UpdateTimeProps>({
        status: 'Ongoing',
        time: null,
    });

    useEffect(() => {
        if (props.deadlineISOString) {
            const intervalId = setInterval(() => {
                const remainingTime = updateRemainingTime(props.deadlineISOString!);
                setCurrentTime(remainingTime);
            }, 1000);

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [props.deadlineISOString]);



    return (
        <div className='px-3 py-2 bg-white rounded-[99px] flex items-center justify-center w-fit'>

            {currentTime.status === "Ended" ?
                <p className='text-xs font-medium text-[#CF4E4E]'>Ended</p> :
                <p className='text-xs font-medium text-[#7F56D9] w-[115px] text-left'><span className='font-normal text-[#667085]'>Ends</span> {currentTime.time}</p>}
        </div>
    );
};

export default CampaignTimer;

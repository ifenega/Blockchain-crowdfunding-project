import React, { useState } from 'react';
import { DatePicker } from 'baseui/datepicker';
import { ThemeProvider, createTheme, lightThemePrimitives } from 'baseui';
import { ChevronLeft, ChevronRight } from 'baseui/icon';

export const overrides = {
    Root: {
        style: ({ $theme }: any) => ({
            zIndex: '999',
        }),
    },
    '[data-baseweb]': {
        backgroundColor: 'red',
        color: 'white',
    },

    Input: {
        style: ({ $theme }: any) => ({
            color: '#5d2ece',
        }),
    },

    CalendarContainer: {
        style: ({ $theme }: any) => ({
            zIndex: '99',
        }),
    },

    Day: {
        style: ({ $theme, $selected }: any) => ({
            color: $selected ? '#fff' : '#5d2ece',
            backgroundColor: $selected ? '' : '',
        }),
    },
    WeekdayHeader: {
        style: ({ $theme }: any) => ({
            color: '#5d2ece',
        }),
    },
    MonthHeader: {
        style: ({ $theme }: any) => ({
            color: '#5d2ece',
        }),
    },
    CalendarIcon: {
        style: ({ $theme }: any) => ({
            color: '#5d2ece',
        }),
    },

    PrevButton: {
        style: ({ $theme }: any) => ({
            color: '#5d2ece',
        }),
        props: {
            children: <ChevronLeft size={10} />,
        },
    },
    NextButton: {
        style: ({ $theme }: any) => ({
            color: '#5d2ece',
        }),
        props: {
            children: <ChevronRight size={10} />,
        },
    },
    MonthYearSelectButton: {
        style: ({ $theme }: any) => ({
            color: '#5d2ece',
        }),
    },
    InputWrapper: {
        style: ({ $theme }: any) => ({
            outline: `none`,
        }),
    },
};
type Props = {
    setFieldValue?: () => void;
    value: any;
    onChange: (data: any) => void;
    required?: Boolean;
    setValue?: any;
};
const CustomCalender = ({
    setFieldValue,
    value,
    onChange,
    setValue,
    required,
}: Props) => {
    const theme = createTheme(lightThemePrimitives, {
        colors: {
            primaryA: '#3498db',
            primaryB: '#5d2ec', // Set a custom text color
            accent: '#2ecc71',
            background: '#ecf0f1',
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <div>
                <DatePicker
                    value={value}
                    overrides={overrides}
                    onChange={onChange}
                    clearable
                    required={required ? true : false}
                    minDate={new Date("1780")}
                />
            </div>
        </ThemeProvider>
    );
};

export default CustomCalender;

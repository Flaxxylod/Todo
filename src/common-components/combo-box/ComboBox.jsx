import { useState } from "react";
import Select from "react-select"
const ComboBox = () => {
    const options = [
        { value: 'ALL', label: 'ALL' },
        { value: 'Complete', label: 'Complete' },
        { value: 'Incomplete', label: 'Incomplete' }
    ];

    const [selectedOption, setSelectedOption] = useState('ALL');

    const CustomStyles = {
        //отвечает за стили ОБЩЕГО контейнера react-select
        control: (base) => ({

            overflow: 'hidden',   // ← СКРЫТЬ ВЫХОДЯЩИЙ ТЕКСТ
            minWidth: "135px",
            minHeight: '42px',
            ...base,
            alignContent: "center",
            backgroundColor: 'var(--Light-color)',
            border: '1px solid var(--Light-color)',
            borderRadius: '4px',
            height: '32px',


        }),
        // отвечает за стили в option
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected ? 'rgba(108, 99, 255, 0.2)' : 'white',
            color: 'var(--Light-color)',
            '&:hover': {
                backgroundColor: 'rgba(108, 99, 255, 0.2)',
            },

        }),
        singleValue: (base) => ({
            ...base,
            color: 'var(--Light-Text-color)',
            fontSize: '18',
            fontWeight: '500',

        }),
        // для общей обводки option
        menu: (base) => ({
            ...base,
            border: '1px solid var(--Light-color)'
        }),
        // Убираем противную, белую палку |
        indicatorSeparator: (base) => ({
            ...base,
            display: 'none'
        }),
        dropdownIndicator: (base) => ({
            ...base,
            '& svg': {  // Для покраски svg стрелочки
                fill: 'var(--Light-Text-color)',
            },

        }),
    }

    return (
        <Select
            options={options}
            value={selectedOption}
            onChange={setSelectedOption}
            styles={CustomStyles}
        />
    );
};
export default ComboBox;
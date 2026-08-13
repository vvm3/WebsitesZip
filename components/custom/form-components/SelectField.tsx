import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export interface Option {
    label: string; // text displayed to user
    value: string; // actual value being sent on selection
}

interface SelectFieldProps {
    name: string;
    label: string;
    options: Option[];
    value: string;
    onChange: (val: string) => void;
    className?: string;
    disabled?: boolean;
}

export function SelectField({ name, className, label, options, onChange, value, disabled }: SelectFieldProps) {
    return (
        <Select name={name} onValueChange={onChange} value={value} disabled={disabled ?? false}>
            <SelectTrigger className={className}>
                <SelectValue placeholder={`Select ${label}`} />
            </SelectTrigger>
            <SelectContent position="popper" className="transition-all !duration-75 !animate-fade-in">
                <SelectGroup>
                    {options.map((item,idx)=><SelectItem key={`select-${name}-option-${idx}`} value={item.value}>{item.label}</SelectItem>)}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

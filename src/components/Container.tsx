import React from "react"

type Props = {
    children?: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => (
    <div className=" flex-auto p-4 ">
        {children}
    </div>
)
export default Container


import React from "react"

type Props = {
    children?: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({children}) => (
    <div className="h-screen bg-slate-50 flex flex-col ">
        {children}
    </div>
)
export default Wrapper


import React, { useContext } from "react"

type Props = {
    children?: React.ReactNode;
    isDark:boolean
}

const Wrapper: React.FC<Props> = ({children,isDark}) => (
    <div className={`h-screen  flex flex-col ${isDark?"dark":""}`}>
        {children}
    </div>
)
export default Wrapper


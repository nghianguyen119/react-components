import useSettings from "../hooks/useSettings";


export default function ChildComponent() {
    const {param, onChangeParam} = useSettings();

    return(
    <>
        <div>{param}</div>
       <div onClick={()=>onChangeParam('Ok')}>
            Click useSettings
        </div>
    </>
    )
}
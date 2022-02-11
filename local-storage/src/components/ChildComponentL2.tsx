import useSettings from "../hooks/useSettings";


export default function ChildComponent() {
    const {param, onChangeParam} = useSettings();
    
    return(<div onClick={()=>onChangeParam('Ok2')}>
        Click useSettings2
    </div>)
}
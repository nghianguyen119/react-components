import useLocalStorage from "../hooks/useLocalStorage";

export default function Test() {
    const [value, setValueInLocalStorage] = useLocalStorage("test", {param1: "value1", param2: "value2"});
    setValueInLocalStorage({param1: "value1", param2: "value3"});

    // console.log(value);

    return <div>Hello</div>;
}
import { useDispatch } from "react-redux";

function Click() {
    const dispatch = useDispatch();
    const click = () => {
        dispatch({ type: "GETUSERS" });
    };
    return (

        <>
            <h1>User list</h1>
            <button
                type="button"
                onClick={() => {
                    click();
                }}
            >
                Get users
            </button>
        </>


    );
}
export default Click;

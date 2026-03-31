import Chem from "./components/Chem";
import Chemical from "./components/Chemical";
import Chemicall from "./components/Chemicall";
import Chemicals from "./components/Chemicals";

export default function App(){
    return(
        <>
        <h1>Chemical Formula</h1>
        <Chemical/>
        <Chem/>
        <Chemicall/>
        <Chemicals/>
        </>
    );
}
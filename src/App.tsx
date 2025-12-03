import './App.css'
import {Header} from "./components/layout/header/Header.tsx";
import {Main} from "./components/layout/main/Main.tsx";
import {TheCompany} from "./components/layout/theСompany/TheСompany.tsx";
import {CompleteSoftwareSolution} from "./components/layout/completeSoftwareSolution/CompleteSoftwareSolution.tsx";
import {Discover} from "./components/layout/discover/Discover.tsx";
import {DiscoverPartTwo} from "./components/layout/discover/DiscoverPartTwo.tsx";
import {GetOurSoftware} from "./components/layout/getOurSoftware/GetOurSoftware.tsx";
import {Footer} from "./components/layout/footer/Footer.tsx";
import {BestPricingPlan} from "./components/layout/bestPricingPlan/BestPricingPlan.tsx";

function App() {

    return (
        <>
            <Header/>
            <Main/>
            <TheCompany/>
            <CompleteSoftwareSolution/>
            <Discover/>
            <DiscoverPartTwo/>
            <GetOurSoftware/>
            <BestPricingPlan/>
            <Footer/>
        </>
    )
}

export default App

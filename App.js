//const heading=React.createElement("h1",{id:"heading"},"Hello World from React!")

const heading=React.createElement("div",{},React.createElement("div",{},React.createElement("h1",{},"this is nested div")))


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
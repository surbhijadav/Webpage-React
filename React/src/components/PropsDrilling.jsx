export const ParentComponent =() =>{
    return(
        <section className={`p-4 h-lvh font-display tracking-wider 
            flex flex-col justify-center item-center
             bg-grey-900 text-white`}>
        <h1>Hello Parent component!</h1>
        <ChildComponent data="React Js" />
        </section>
    );
};

const ChildComponent =(props) =>{
    return(
        <>
        <h1>Hello,i am  child component</h1>
        <GrandChildComponent data={props.data} />
        </>
    )
}

const GrandChildComponent =(props) =>{
    return(
        <>
        <h1>Hello,i am   grand child component</h1>
        <GrandGrandChildComponent data={props.data} />
        </>
    )
}

const GrandGrandChildComponent =(props) =>{
    return(
        <>
        <h1>Hello,i am  {props.data}</h1>
        </>
    )
}
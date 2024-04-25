export default function Text (){
    const someting = ["samo jako"];

    return (
        
        <>
        {someting.map((i) => (
            <p>{i}</p>
        ))}
        </>
    );
}

function Names() {
    const styles = {
        listStyle: "none",
        textDecoration: "none"
    };

    const persons = [
        {
            id: '1A',
            name: 'Kulas',
            isGraduate: false,
        },
        {
            id: '1B',
            name: 'Mickey',
            isGraduate: true,
        },
        {
            id: '3A',
            name: 'Donald',
            isGraduate: false,
        }
    ];

    return (
        <>
            <h1>Class Names</h1>
            <ul style={styles}>
                {persons.map((person, index) => (
                    <>
                        <li key={person.id}>
                            <b>Name : </b>{person.name}<br></br>
                            <b>Graduate : </b>{person.isGraduate ? 'Yes' : 'No'}
                        </li>
                        <br></br>
                    </>
                ))}

            </ul>
        </>
    );
}

export default Names
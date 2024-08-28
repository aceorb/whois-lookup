function ErrorContainer({ error }) {
    return (
        <div className="container-error mt-4">
            <p style={{color: 'red'}}>{error}</p>
        </div>
    );
}

export default ErrorContainer;
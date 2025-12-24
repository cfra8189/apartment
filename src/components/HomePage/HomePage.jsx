function HomePage () {
    return (
        <div style={{ paddingTop: 'var(--header-height)', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - var(--header-height))' }}>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 8rem)' }}>Home Page Component</h1>
        </div>
    );
}
export default HomePage
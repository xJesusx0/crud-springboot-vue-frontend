const validateSession = (response,$router) => {
    if (!response.ok) {
        if (response.status == 403) {
            alert('Sesion invalida')
            $router.push('/login')
        }
    }
}

export { validateSession }
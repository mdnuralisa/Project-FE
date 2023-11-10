export default defineNuxtRouteMiddleware((to, from) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    // isAuthenticated() is an example method verifying if a user is authenticated
    if (token === "") {

      return navigateTo('/auth/login')
    }
  })
  
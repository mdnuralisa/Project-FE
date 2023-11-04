<script setup lang="ts">
definePageMeta({
    layout: 'empty'
})
</script>

<template>
    
    <div class="w-50 mx-auto mt-5 border border-primary border-2 p-3">
        <form>
            <div class="position-relative m-5 text-center">
        <h1 class="d-inline">Login</h1>
    </div>
            <div class="mb-3 text-center">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3 text-center">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 text-center">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
            <div class="mb-3 text-center">
                Don't have an account? Register
            </div>
        </form>
    </div>
</template>
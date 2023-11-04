<template>
    
    <div class="w-50 mx-auto mt-5 border border-primary border-2 p-3">
        <form>
            <div class="position-relative m-5 text-center">
                <h1 class="d-inline">Profile</h1>
            </div>
            <div class="mb-3 text-center">
                <label for="exampleInputEmail1" class="form-label">Your Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3 text-center">
                <label for="exampleInputPassword1" class="form-label">Change Password?</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 text-center">
                <label for="exampleInputPassword2" class="form-label">Confirm New Password</label>
                <input type="password" class="form-control" id="exampleInputPassword2">
            </div>
            <div class="mb-3 text-center">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>
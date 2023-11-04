<template>
    <div class="position-relative d-block my-3">
        <h1 class="d-inline">Categories</h1>
        <button class="btn btn-primary float-end">Add New</button>
    </div>
    <div class="position-relative d-flex flex-wrap grid gap-3">
        <div class="card w-25" v-for="index in 10">
            <div class="card-body">
            <p class="card-title">This is some text within a card body.</p>
            <button class="btn btn-danger">Delete</button>    
            </div>
        </div>
    </div>
</template>
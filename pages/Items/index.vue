<template>
    <div class="position-relative d-block my-3">
        <h1 class="d-inline">Kitchen's Items</h1>
        <button class="btn btn-primary float-end">Add New</button>
    </div>
    <div class="position-relative ">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="index in 10">
                    <th scope="row">{{ index }}</th>
                    <td>Ayam</td>
                    <td>1 ekor</td>
                    <td>
                        <button class="btn btn-primary me-2">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>